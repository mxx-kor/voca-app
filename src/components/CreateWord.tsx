import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { IDay } from "./Daylist";

export default function CreateWord() {
    const days: IDay[] = useFetch('http://localhost:3001/days');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(!isLoading);

        if (dayRef.current && engRef.current && korRef.current) {

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json', 
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone : false
                })
            })
            .then(res => {
                if(res.ok) {
                    alert("생성이 완료되었습니다.");
                    navigate(`/day/${day}`);
                    setIsLoading(!isLoading);
                }
            });
        }
        
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);


    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    )
}
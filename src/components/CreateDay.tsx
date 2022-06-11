import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        setIsLoading(!isLoading)
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json', 
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/`);
                setIsLoading(!isLoading);
            }
        })
        
    }

    return (
        <div>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={onClick} style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "Day 추가"}</button>
        </div>
    )
}
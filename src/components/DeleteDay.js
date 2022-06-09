import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DeleteDay () {
    const days = useFetch('http://localhost:3001/days');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const del = (e) => {
        e.preventDefault();
        setIsLoading(!isLoading);

        if(window.confirm('최근 Day를 삭제하시겠습니까?')) {
            fetch(`http://localhost:3001/days/${days.length}`, {
                method: 'DELETE'
            }).then(res => {
                if(res.ok) {
                    alert('삭제가 완료되었습니다.');
                    navigate('/');
                    setIsLoading(!isLoading);
                }
            });
        }
    }

    return (
        <form onSubmit={del}>
            <h3>현재 일수 : {days.length}</h3>
            <p>삭제 버튼을 누르면 Day {days.length}가 삭제됩니다. 단어가 저장되어있다면 Day추가시 그대로 내용이 보입니다.</p>
            <button className="btn_del" style={{
                opacity: isLoading ? 0.3 : 1,
            }}>
                {isLoading ? "Deleting..." : "Day 삭제"}
            </button>
        </form>
    )
}
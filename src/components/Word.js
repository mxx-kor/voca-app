import { useState } from "react"

export default function Word({ word }) {
    const [toggle, setToggle] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const toggleShow = () => {
        setToggle(!toggle)
    }
    const toggleDone = () => {
        setIsDone(!isDone)
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{toggle && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {toggle ? '숨기기' : '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}
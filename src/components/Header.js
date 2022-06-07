import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function Header() {
    const days = useFetch('http://localhost:3001/days');

    return (
        <div className="header">
            <h1>
                <Link to="/">영단어(고급)</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">
                    단어추가
                </Link>
                <a href="#x" className="link">
                    Day 추가
                </a>
            </div>
        </div>
    )
}
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;

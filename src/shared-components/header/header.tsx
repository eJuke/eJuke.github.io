import "./header.css";
import { Link } from "react-router-dom";

export interface HeaderLinkInfo {
    name: string;
    path: string;
}

function Header({
    links,
}:{
    links: HeaderLinkInfo[]
}) {
    return (
        <div className="header">
            <div className="wrapper">
                <nav>
                    <ul>
                        {
                            links.map(item => (
                                <li>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;

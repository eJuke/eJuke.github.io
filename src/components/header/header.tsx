import "./header.css";

export function Header() {

    return <div className="header">
        <div className="wrapper">
            <div className="header_container">
                <div className="header_logo">
                    <span>EV</span>
                </div>
                <nav className="header_links">
                    <ul>
                        <li className="header_link text-bold">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="header_link text-bold">
                            <a href="#career">Experience</a>
                        </li>
                        <li className="header_link text-bold">
                            <a href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
}

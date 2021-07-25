import "./header.css";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum Theme {
    LIGHT = "LIGHT",
    DARK = "DARK",
}

export function Header({
    currentTheme = Theme.LIGHT,
    setTheme,
}:{
    currentTheme: Theme,
    setTheme: (theme: Theme) => void,
}) {

    const scrollTo = (event: React.MouseEvent, selector: string) => {

        event.preventDefault();

        const elementToScroll = document.querySelector(selector) as HTMLElement;
        const { top: elementTopPosition } = elementToScroll.getBoundingClientRect();

        window.scrollBy({ top: elementTopPosition, behavior: "smooth" });
    }

    const toggleTheme = () => {

        setTheme(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return <div className="header">
        <div className="wrapper">
            <div className="header_container">
                <div className="header_logo">
                    <span>EV</span>
                </div>
                <nav className="header_links">
                    <ul>
                        <li className="header_link text-bold">
                            <a href="#skills"
                                onClick={(event) => scrollTo(event, "#skills")}>
                                Skills
                            </a>
                        </li>
                        <li className="header_link text-bold">
                            <a href="#career"
                                onClick={(event) => scrollTo(event, "#career")}>
                                Experience
                            </a>
                        </li>
                        <li className="header_link text-bold">
                            <a href="#contacts"
                                onClick={(event) => scrollTo(event, "#contacts")}>
                                Contacts
                            </a>
                        </li>
                    </ul>
                    <div className={`header_theme-toggle header_theme-toggle_${currentTheme === Theme.LIGHT ? "light" : "dark"}`}>
                        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                        <div className="toggle"
                            onClick={toggleTheme}>
                        </div>
                        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </div>
                </nav>
            </div>
        </div>
    </div>
}

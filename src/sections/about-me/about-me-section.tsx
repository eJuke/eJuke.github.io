import "./about-me-section.css";
import { Tag } from "../../components/tag/tag"

export function AboutMeSection() {

    const skillsList = [
        "TypeScript",
        "JavaScript",
        "Angular",
        "HTML",
        "CSS",
        "Git",
        "Node.js",
        "RxJs",
        "Docker",
        "Webpack",
        "ASP.NET",
        "Unit testing"
    ]

    return <div className="about-me section" id="about-me">
        <div className="wrapper">
            <div className="grid grid-10">
                <div className="about-me_description">
                    <h2>About me</h2>
                    <p className="about-me_description__text">Hi there! I’m a web engineer from Russia. Looking for new challenges, that may improve my skills. Have a strong expertise in building single-page applications and shared UI libraries.</p>
                    <p className="about-me_description__text">I spend my free time riding my bicycle, snowboarding, and travelling with my family.</p>
                </div>
                <div className="about-me_tags">
                    {skillsList.map(skill => <Tag key={skill} text={skill}></Tag>)}
                </div>
            </div>
        </div>
    </div>
}

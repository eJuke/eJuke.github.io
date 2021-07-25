import "./skills-section.css";
import { Tag } from "../../components/tag/tag"

export function SkillsSection() {

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

    return <div className="skills section" id="skills">
        <div className="wrapper">
            <div className="grid grid-10">
                <div className="skills_description">
                    <h2>My skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at quis risus. Sit amet massa vitae tortor condimentum. Aliquam sem et tortor consequat id. Nec feugiat nisl pretium fusce id velit ut. Neque volutpat ac tincidunt vitae semper quis lectus nulla at.</p>
                </div>
                <div className="skills_tags">
                    {skillsList.map(skill => <Tag key={skill} text={skill}></Tag>)}
                </div>
            </div>
        </div>
    </div>
}

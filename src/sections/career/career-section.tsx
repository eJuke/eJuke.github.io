import { CareerHighlight, Highlight, HighlightType } from "../../components/career-highlight/career-hightlight";

export function CareerSection() {

    const careerHighlightList: Highlight[] = [
        {
            type: HighlightType.JOB_POSITION,
            place: "Murano Software",
            position: "Front End Developer",
            timings: "Dec 2017 - Current",
            descriptionParagraphs: [
                "My project is related to USA-based vehicle-to-government system for car dealers. We support a bunch of projects that help our customers to sale cars, generate and sign docs, pay taxes/fees and receive their number plates when all of this done.",
                "My role here is a front end developer. Projects are mostly based on Angular and asp.net, but some services run on Java.",
                "Achievements:",
                "- Providing migration from AngularJS (v1) to the new Angular (v2+) - this is still in progress",
                "- Implemented unit and screenshot tests infrastructure and helped integrate testing into our development process",
                "- Constantly improved our build system that's based on webpack",
            ],
            skills: ["Angular", "TypeScript"]
        },
        {
            type: HighlightType.JOB_POSITION,
            place: "DDG Corp",
            position: "Full Stack Developer",
            timings: "Apr 2017 - Dec 2017",
            descriptionParagraphs: [
                "We make a device for self-driving cars to send driving data into the cloud and connect to another devices of the same type (kind of a mesh network).",
                "My main responsibility is a device control server. It's based on ASP.net Core MVC and run in Azure cloud.",
                "Also some part of my worktime is dedicated to Node.js API server that's used to collect IoT vehicle data via message broker (MQTT)",
            ],
            skills: ["Javascript", "C#", "ASP.NET", "jQuery", "Node.js", "MQTT", "Azure"]
        },
        {
            type: HighlightType.JOB_POSITION,
            place: "Asanov Agency",
            position: "Front End Developer",
            timings: "Jun 2016 - Jan 2017",
            descriptionParagraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at quis risus. Sit amet massa vitae tortor condimentum.",
            ],
            skills: ["Javascript", "jQuery", "HTML", "CSS", "Bootstrap"]
        },
        {
            type: HighlightType.EDUCATION,
            place: "Saint-Petersburg Electrotechnical University \"LETI\"",
            position: "Student",
            timings: "Sep 2013 - Feb 2019",
            descriptionParagraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at quis risus. Sit amet massa vitae tortor condimentum.",
            ],
        }
    ]

    return <div className="career section" id="career">
        <div className="wrapper">
            <h2>Career</h2>
            {careerHighlightList.map((highlight, index) => {
                return <CareerHighlight
                    key={index}
                    isLastItem={index === careerHighlightList.length - 1}
                    highlight={highlight}>
                </CareerHighlight>
            })}
        </div>
    </div>
}

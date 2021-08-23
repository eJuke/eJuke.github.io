import { CareerHighlight, Highlight, HighlightType } from "../../components/career-highlight/career-hightlight";

export function CareerSection() {

    const careerHighlightList: Highlight[] = [
        {
            type: HighlightType.JOB_POSITION,
            place: "Murano Software",
            position: "Front End Developer",
            timings: "Dec 2017 - Current",
            descriptionParagraphs: [
                "Working as an out staff engineer for MVSC USA. The company creates a solution for USA-based dealership vehicle management and vehicle registrations (including interaction with government services).",
                "My role here is a front-end developer in core UI team. As a developer, I support most of the company projects, e.g., forms, payment gates, admin panel etc.",
                "Achievements:",
                "- Integrated unit testing into our development process. Implemented unit test infrastructure from scratch",
                "- Improved out webpack builder, that resulted in a 30 percent decrease in build duration.",
                "- Supported AngularJs -> Angular migration process (this is still in progress, 80% of migration is complete)",
            ],
            skills: ["Angular", "AngularJs", "TypeScript", "RxJs"]
        },
        {
            type: HighlightType.JOB_POSITION,
            place: "DDG Corp",
            position: "Full Stack Developer",
            timings: "Apr 2017 - Dec 2017",
            descriptionParagraphs: [
                "Was a part of company's researching team. As a team, we developed IoT devices for vehicles (areas: vehicle self-check, mesh network communication between self-driving vehicles).",
                "Most of the time I supported core control server for our devices - managed both front-end and back-end parts. Also, I was involved in a message server development, that received and handled messages from MQTT broker.",
                "During my free time, I helped my teammates with UI part (AngularJs) on their side project - GPS tracking system for boats.",
            ],
            skills: ["Javascript", "C#", "ASP.NET", "jQuery", "Node.js", "MQTT", "Azure", "AngularJs"]
        },
        {
            type: HighlightType.JOB_POSITION,
            place: "Asanov Agency",
            position: "Front End Developer",
            timings: "Jun 2016 - Jan 2017",
            descriptionParagraphs: [
                "This is a small web agency in Saint-Petersburg. As a team member, I supported UI part of the site development process: created new markup, supported current projects, was involved into design discussions.",
                "Technology stack: mostly HTML & CSS (with preprocessors - Pug, Sass, Less), also created some simple components with JavaScript and jQuery.",
            ],
            skills: ["Javascript", "jQuery", "HTML", "CSS", "Bootstrap"]
        },
        {
            type: HighlightType.EDUCATION,
            place: "Saint-Petersburg Electrotechnical University \"LETI\"",
            position: "Student",
            timings: "Sep 2013 - Feb 2019",
            descriptionParagraphs: [
                "Spent 6 years to master my CS specialty: \"Information security\". Paid more attention to software development courses during my university years.",
            ],
        }
    ]

    return <div className="career section" id="career">
        <div className="wrapper">
            <h2>Experience</h2>
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

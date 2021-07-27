import "./career-highlight.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "../tag/tag";

export enum HighlightType {
    JOB_POSITION,
    EDUCATION,
}

export interface Highlight {
    type: HighlightType,
    position: string,
    place: string,
    timings: string,
    descriptionParagraphs: string[],
    skills?: string[],
}

const iconMap = {
    [HighlightType.JOB_POSITION]: faBriefcase,
    [HighlightType.EDUCATION]: faGraduationCap,
};

export function CareerHighlight({
    highlight,
    isLastItem,
    children,
}:{
    highlight: Highlight,
    isLastItem: boolean,
    children?: unknown, // todo: determine why children prop is required here (otherwise causes ts type errors)
}) {

    return <div className="career-highlight">
        <div className="grid grid-10">
            <div className="career-highlight_timeline">
                <div className="career-highlight_timeline-icon">
                    <FontAwesomeIcon icon={iconMap[highlight.type]} />
                </div>
                {!isLastItem && <div className="career-highlight_timeline-line"></div>}
            </div>
            <div className="career-highlight_info">
                <p className="text-bigger career-highlight_announce text-bold">{highlight.position} at {highlight.place}</p>
                <p className="career-highlight_timings text-bold">{highlight.timings}</p>
                {highlight.descriptionParagraphs.map((text, index) => <p key={index} className="career-highlight_description">{text}</p>)}
                {highlight.skills
                    && <div className="career-highlight_tags">
                        {highlight.skills.map(skill => <Tag key={skill} text={skill}></Tag>)}
                    </div>}
            </div>
        </div>
    </div>
}

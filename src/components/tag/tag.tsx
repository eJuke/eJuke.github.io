import "./tag.css";

export function Tag({
    text,
}:{
    text: string
}) {

    return <div className="tag">
        {text}
    </div>
}

import "./greeting-section.css";
import myPhoto from "../../assets/my-photo.jpg"

export function GreetingSection() {

    return <div className="greeting section">
        <div className="wrapper">
            <div className="grid grid-10 grid-align-center">
                <div className="greeting_photo">
                    <img src={myPhoto} alt="Evgeniy Voynov's pic" />
                </div>
                <div className="greeting_text">
                    <h1>Hi, I'm Evgeniy Voynov!</h1>
                    <p className="text-bigger">Front-end software developer from Saint-Petersburg, Russia</p>
                </div>
            </div>
        </div>
    </div>
}

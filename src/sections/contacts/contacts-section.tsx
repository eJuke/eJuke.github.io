import "./contacts-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

export function ContactsSection() {

    const contactList = [
        { link: "https://t.me/e_voynov", text: "e_voynov", icon: faTelegram },
        { link: "mailto:voynov.ev@gmail.com", text: "voynov.ev@gmail.com", icon: faEnvelope },
        { link: "tel:+79062558919", text: "+7 (906) 255-8919", icon: faPhoneAlt },
        { link: "https://github.com/eJuke", text: "eJuke", icon: faGithub },
        { link: "https://www.linkedin.com/in/evgeniy-voynov-710487175/", text: "Evgeniy Voynov", icon: faLinkedin }
    ];

    return <div className="contacts section" id="contacts">
        <div className="wrapper">
            <div className="grid grid-10">
                <div className="contacts_title">
                    <h2>Feel free to reach me out</h2>
                </div>
                <div className="contacts_list">
                    <ul className="contacts_contact-list">
                        {
                            contactList.map(contact => (
                                <li key={contact.link} className="contacts_contact">
                                    <a href={contact.link}>
                                        <FontAwesomeIcon className="contacts_contact-icon" icon={contact.icon} />
                                        <span className="contacts_contact-text">{contact.text}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

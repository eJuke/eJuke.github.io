import "./App.css";
import { Header } from "./components/header/header";
import { CareerSection } from "./sections/career/career-section";
import { ContactsSection } from "./sections/contacts/contacts-section";
import { GreetingSection } from "./sections/greeting/greeting-section";
import { SkillsSection } from "./sections/skills/skills-section";

function App() {
    return (
        <div className="light-theme">
            <Header></Header>
            <div className="page-container">
                <GreetingSection></GreetingSection>
                <SkillsSection></SkillsSection>
                <CareerSection></CareerSection>
                <ContactsSection></ContactsSection>
            </div>
        </div>
    );
}

export default App;

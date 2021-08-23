import "./App.css";
import { useState } from "react";
import { Header, Theme } from "./components/header/header";
import { CareerSection } from "./sections/career/career-section";
import { ContactsSection } from "./sections/contacts/contacts-section";
import { GreetingSection } from "./sections/greeting/greeting-section";
import { AboutMeSection } from "./sections/about-me/about-me-section";

const THEME_STORAGE_KEY = "selectedTheme";

export function App() {

    const getInitialTheme = () => {

        const savedValue = window.localStorage.getItem(THEME_STORAGE_KEY) as (Theme | null);

        return savedValue
            ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT);
    }

    const [state, setState] = useState({ currentTheme: getInitialTheme() });

    const setTheme = (currentTheme: Theme) => {

        window.localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
        setState({ currentTheme });
    }

    return (
        <div className={ `theme ${state.currentTheme === Theme.LIGHT ? "light-theme" : "dark-theme"}` }>
            <Header currentTheme={state.currentTheme}
                setTheme={setTheme}></Header>
            <div className="page-container">
                <GreetingSection></GreetingSection>
                <AboutMeSection></AboutMeSection>
                <CareerSection></CareerSection>
                <ContactsSection></ContactsSection>
            </div>
        </div>
    );
}

export default App;

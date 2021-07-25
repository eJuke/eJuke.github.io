import "./App.css";
import React from "react";
import { Header, Theme } from "./components/header/header";
import { CareerSection } from "./sections/career/career-section";
import { ContactsSection } from "./sections/contacts/contacts-section";
import { GreetingSection } from "./sections/greeting/greeting-section";
import { SkillsSection } from "./sections/skills/skills-section";

const THEME_STORAGE_KEY = "selectedTheme";

export class App extends React.Component<unknown, { currentTheme: Theme }> {

    constructor(
        props: unknown,
    ) {

        super(props);

        this.state = {
            currentTheme: this.getInitialTheme(),
        };
    }

    private getInitialTheme() {

        const savedValue = window.localStorage.getItem(THEME_STORAGE_KEY) as (Theme | null);

        return savedValue
            ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT);
    }

    setTheme = (currentTheme: Theme) => {

        window.localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
        this.setState({ currentTheme });
    }

    render() {

        return (
            <div className={ `theme ${this.state.currentTheme === Theme.LIGHT ? "light-theme" : "dark-theme"}` }>
                <Header currentTheme={this.state.currentTheme}
                    setTheme={this.setTheme}></Header>
                <div className="page-container">
                    <GreetingSection></GreetingSection>
                    <SkillsSection></SkillsSection>
                    <CareerSection></CareerSection>
                    <ContactsSection></ContactsSection>
                </div>
            </div>
        );
    }
}

export default App;

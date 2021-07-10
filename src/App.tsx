import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./shared-components/header/header";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import ExperiencePage from "./pages/experience/experience-page";
import ContactsPage from "./pages/contacts/contacts-page";

function App() {
    return (
        <div className="page-container light-theme">
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route path="/home">
                            <HomePage></HomePage>
                        </Route>
                        <Route path="/about">
                            <AboutPage></AboutPage>
                        </Route>
                        <Route path="/experience">
                            <ExperiencePage></ExperiencePage>
                        </Route>
                        <Route path="/contacts">
                            <ContactsPage></ContactsPage>
                        </Route>
                        <Route render={() => (<Redirect to="/home" />)}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

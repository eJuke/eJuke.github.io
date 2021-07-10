import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { ClassicModePage } from "./pages/classic/classic";
import { InteractiveModePage } from "./pages/interactive/interactive";

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/classic">Classic</Link>
                        </li>
                        <li>
                            <Link to="/interactive">Interactive</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/classic">
                        <ClassicModePage></ClassicModePage>
                    </Route>
                    <Route path="/interactive">
                        <InteractiveModePage></InteractiveModePage>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Form from "./components/Form";
import ColorPage from "./components/ColorPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/colors" render={() => <Home />} />
          <Route exact path="/colors/new" render={() => <Form />} />
          <Route
            exact
            path="/colors/:color"
            component={ColorPage}
            // render={() => <ColorPage />}
          />
          <Redirect to="/colors" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

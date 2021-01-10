import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import DetailPage from "../pages/DetailPage";
import Jelajahi from "../pages/Jelajahi";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/jelajahi" component={Jelajahi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

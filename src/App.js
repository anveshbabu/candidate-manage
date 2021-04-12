import React from 'react';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import 'moment-timezone';
import { Home, Profile } from "./pages";
import { AppContext } from "./sevices/themeContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile/123">Profile</Link>
          </li>


        </ul>
      </nav>
      <AppContext>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:userId" component={Profile} />

        </Switch>

      </AppContext>



    </Router>
  );
}

export default App;

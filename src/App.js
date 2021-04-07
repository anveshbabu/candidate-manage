import React from 'react';
import './App.css';
import { Home, Profile } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>


        </ul>
      </nav> */}


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:userId" component={Profile} />

      </Switch>





    </Router>
  );
}

export default App;

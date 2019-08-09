import React from "react";
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import App from "../App";
import About from "./pages/About";
import EmergencyContact from "./pages/EmergencyContact";
import IncomingComm from "./pages/IncomingComm";
import People from "./pages/People";
import Geolocation from "./pages/Geolocation";

function Routes(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/EmergencyContact">Emergency Contact</Link></li>
            <li><Link to="/People">People Directory</Link></li>
            <li><Link to="/IncomingComm">Incoming Communications</Link></li>
            <li><Link to="/Geolocation">Geolocation</Link></li>
            {/* Content would be replaced with a dynamic link generator 
            using JSON file */}
            <li><Link to="/Content"></Link></li>
          </ul>
        </nav>
        
        
      </div>
    </Router>
  );
}

export default Routes;
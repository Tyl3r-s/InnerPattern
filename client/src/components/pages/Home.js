import React from "react";
import { Link } from "react-router-dom";
import LandingLogo from '../../assets/mainlogo.png'

const Home = () => {
  return (
    <div className="LandingContainer">
      <div className="divContainer">
        <img src={LandingLogo} className="LandingLogo" alt="landing page logo"></img>
        <p className="LandingText">Welcome to InnerPattern, where we strive to understand ourselves better, become more mindful, and in the process modulate the thought patterns that are generating our suffering. </p>
        <div className="LandingBtn">
          <Link to="/SignUp" style={{ textDecoration: 'none', color: 'white' }}>
            Start!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

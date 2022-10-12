import LandingLogo from "../../assets/mainlogo.png";
import React from "react";
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

const Home = () => {
  if (Auth.loggedIn()) {
  return (
    <main>
      <div className="LandingContainer">
        <div className="divContainer">
          <img
            src={LandingLogo}
            className="LandingLogo"
            alt="landing page logo"
          ></img>
          <p className="LandingText">
            Welcome to InnerPattern, where we strive to understand ourselves
            better, become more mindful, and in the process modulate the thought
            patterns that are generating our suffering.{" "}
          </p>
          <div className="btnContainer1">
            <a href="/Profile" className="homeBtn">
              Account
            </a>
          </div>
        </div>
      </div>
    </main>
  )} else {
    return (
      <main>
      <div className="LandingContainer">
        <div className="divContainer">
          <img
            src={LandingLogo}
            className="LandingLogo"
            alt="landing page logo"
          ></img>
          <p className="LandingText">
            Welcome to InnerPattern, where we strive to understand ourselves
            better, become more mindful, and in the process modulate the thought
            patterns that are generating our suffering.{" "}
          </p>
          <div className="btnContainer1">
            <a href="/SignUp" className="homeBtn">
              Signup
            </a>
            <a href="/Login" className="homeBtn">
              Login
            </a>
          </div>
        </div>
      </div>
    </main>
    )
  }
};

export default Home;

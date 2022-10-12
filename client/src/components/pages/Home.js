import LandingLogo from "../../assets/mainlogo.png";
import React from "react";
import Auth from '../../utils/auth';

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
            <a href="/Profile" className="inputBoxBtn landing-btn">
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
          <div className="btn-container-1">
            <a href="/SignUp" className="inputBoxBtn five-margin landing-btn">
              Signup
            </a>
            <a href="/Login" className="inputBoxBtn five-margin landing-btn">
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

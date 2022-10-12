import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ProfileLogo from "../../assets/Profile1.png";

function Profile(props) {
  // if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign("/Login");
    return;
  }
  return (
    <container className="bodyContainer">
      <Navigation />
      <div className="profile-section">
        <div className="flex-row">
          <div className="card">
            <img src={ProfileLogo} className="profileLogo"></img>
            <h2>Your Name</h2>
            <span>youremail@test.com</span>
          </div>
          <div>
            <div>
              {/* TODO: add path to Journal */}
              <Link to="/JournalEntries">Journal Entries</Link>
            </div>
            <div className="card">
              {/* TODO: add path to Behaviour activation */}
              <Link to="/CreateJournalEntry">Create Entry</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </container>
  );
}

export default Profile;

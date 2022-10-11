import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Profile (props) {
// if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign('/Login');
    return;
  }
    return(
        <div>
            <Navigation />
            <div className="flex-row">
                <div className="card">
                    <h2>Your Name</h2>
                    <span>youremail@test.com</span>
                </div>
                <div>
                    <div>
                        {/* TODO: add path to Journal */}
                        <Link to="/JournalEntries">
                            Journal Entries
                        </Link>
                    </div>
                    <div className="card">
                        {/* TODO: add path to Behaviour activation */}
                        <Link to="/">
                            Your Entries
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;
import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import sampleImg from "../../assets/navlogo.png"

function Profile (props) {
    return(
        <div>
            <Navigation />
            <div className="flex-row">
                <div className="card">
                    <img src={sampleImg} alt="placeholder" />
                    <h2>Your Name</h2>
                    <span>youremail@test.com</span>
                </div>
                <div>
                    <div>
                        {/* TODO: add path to Journal */}
                        <Link to="/">
                            Journal
                        </Link>
                    </div>
                    <div className="card">
                        {/* TODO: add path to Behaviour activation */}
                        <Link to="/">
                            Behaviour Activation
                        </Link>
                    </div>
                    <div>
                        {/* TODO: add path to goal tracker */}
                        <Link to="/">
                            Goal Tracker
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;
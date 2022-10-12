import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ProfileLogo from "../../assets/Profile1.png";
import { useQuery } from "@apollo/client";
import { QUERY_ENTRIES } from "../../utils/queries";

function Profile(props) {
    let email = '';

    try {
      email = Auth.getProfile().data.email;

    } catch (e) {
      console.log('Not logged');
    }
    const { loading, data } = useQuery(QUERY_ENTRIES, {
      variables: { email }
    });

    if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    const entries = data.entries;

    // if not loggedIn, redirect
    if (!Auth.loggedIn()) {
        window.location.assign('/Login');
        return;
    }
    return (
        <div className="bodyContainer">
            <Navigation />
            <div className="flex-row">
                <div className="card">
                    <img src={ProfileLogo} className="profileLogo"></img>
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
                        <Link to="/CreateJournalEntry">
                            Create Entry
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;
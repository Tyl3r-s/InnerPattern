import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ProfileLogo from "../../assets/Profile1.png";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Profile(props) {
    let id = '';

    try {
      id = Auth.getProfile().data.id;

    } catch (e) {
      console.log('Not logged');
    }
    const { loading, data } = useQuery(QUERY_ME, {
      variables: { id }
    });

    if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    const me = data.me;

    // if not loggedIn, redirect
    if (!Auth.loggedIn()) {
        window.location.assign('/Login');
        return;
    }
    return (
        <div className="bodyContainer">
            <div className="flex-row profile-form">
                <div className="card profilePic">
                    <img src={ProfileLogo} className="profileLogo"></img>
                    <h2>{me.firstName} {me.lastName}</h2>
                    <span>{me.email}</span>
                </div>
                <div className="profileLinks">
                    <div>
                        <Link to="/JournalEntries" className="homeBtn">
                            Journal Entries
                        </Link>
                    </div>
                    <div>
                        <Link to="/CreateJournalEntry" className="homeBtn">
                            Create Entry
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import ProfileLogo from "../../assets/Profile1.png";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";

function Profile(props) {
  let id = "";

  try {
    id = Auth.getProfile().data.id;
  } catch (e) {
    console.log("Not logged");
  }
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id },
  });

  if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  const me = data.me;

  // if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign("/Login");
    return;
  }
  return (
    <div>
      <Navigation />
      <main>
        <div className="bodyContainer">
          <div className="flex-row profile-form">
            <div className="card profilePic">
              <img src={ProfileLogo} className="profileLogo"></img>
              <h2>
                {me.firstName} {me.lastName}
              </h2>
              <span>{me.email}</span>
            </div>
            <div className="profileLinks">
              <a href="/JournalEntries" className="inputBoxBtn extended">
                Journal Entries
              </a>
              <a href="/CreateJournalEntry" className="inputBoxBtn extended">
                Create Entry
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;

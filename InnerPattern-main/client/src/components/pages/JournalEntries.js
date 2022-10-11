import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QUERY_ENTRIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

const JournalEntries = () => {
  let email = '';

  try {
    email = Auth.getProfile().data.email;
    // for testing
    // const email = "test@test.com";
  } catch (e) {
    console.log('Not logged');
  }
  const { loading, data } = useQuery(QUERY_ENTRIES, {
    variables: { email }
  });
  // const {loading, error, data} = useQuery(QUERY_ENTRIES);

  if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  const entries = data.entries;


  // if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign('/Login');
    return;
  }

  return (
    <>
      <Navigation />
      <main>
        <div className="my-journal-section">
          <div className="section-header">
            <h4>Your Journal</h4>
          </div>
          <div className="journal-group">
            <div className="entry-group">
              {entries.map((entry) => (
                <div className="full-width" key={entry._id}>
                  <Card.Body>
                    <Card.Title>{entry.title}</Card.Title>
                    <Card.Subtitle><span role="img" aria-label="mood rating">
                      {entry.moodRating}
                    </span>
                    </Card.Subtitle>
                    <Card.Text>{entry.entryText}</Card.Text>
                    <Button variant="primary">Check Entry</Button>
                  </Card.Body>
                </div>
              ))}

            </div>
            <div className="single-entry">
              <div className="single-entry-card">
                <Card.Header className="entry-card-header">
                  Had a good day with the fam
                </Card.Header>
                <hr></hr>
                <Card.Body>
                  <Card.Title className="entry-card-title">
                    😁
                    <br></br>
                    <span className="weak-text">3:35 on Jan 7 2022</span>
                  </Card.Title>
                  <hr></hr>
                  <Card.Text id="single-entry-card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JournalEntries;

import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QUERY_ENTRIES, QUERY_ENTRY } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ENTRY } from "../../utils/mutations";
import Auth from "../../utils/auth";

const JournalEntries = () => {

  const [deleteEntry, {error}] = useMutation(DELETE_ENTRY);

  const handleDelete = async function(event) {
    event.preventDefault();
    const id = event.target.parentNode.id
    console.log(id);
    // console.log(Auth.getProfile().data);
    if (Auth.loggedIn()) {
      try {
        const {data} = await deleteEntry({
          variables: { id }
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('not logged it');
      window.location.assign('/Login');
    }

    window.location.reload();

  }

  let email = '';

  try {
    email = Auth.getProfile().data.email;
  } catch (e) {
    console.log("Not logged");
  }
  const { loading, data } = useQuery(QUERY_ENTRIES, {
    variables: { email },
  });

  if (loading) return "Loading...";

  const entries = data.entries;

  let entrySelect = '';

  const handleCheck = async function(event) {
    event.preventDefault();
    const entrySelect = event.target.parentNode.id
  }



  // if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign("/Login");
    return;
  }

  return (
    <div>
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
                      <Card.Title className="journal-card-title">
                        {entry.title}
                      </Card.Title>
                      <Card.Subtitle>
                        <span role="img" aria-label="mood rating">
                          {entry.moodRating}
                        </span>
                      </Card.Subtitle>
                      <Card.Text>{entry.createdAt}</Card.Text>
                      <div className="journal-btn-group"  id={entry._id}>
                        <Button onClick={handleCheck} variant="primary" className="check-entry">
                          Check Entry
                        </Button>
                        <Button variant="primary" className="edit">
                          Edit
                        </Button>
                        <Button onClick={handleDelete} variant="primary" className="delete">
                          Delete
                        </Button>
                      </div>
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <div className="single-entry-btn-group">
                      <Button variant="primary" className="edit">Edit</Button>
                      <Button variant="primary" className="delete">Delete</Button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
};

export default JournalEntries;

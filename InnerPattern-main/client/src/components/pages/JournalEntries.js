import React from "react";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JournalEntries = () => {
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
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
              <div className="full-width">
                <Card.Body>
                  <Card.Title>😁</Card.Title>
                  <Card.Text>Had a good day with the fam</Card.Text>
                  <Button variant="primary">Check Entry</Button>
                </Card.Body>
              </div>
            </div>
            <div className="single-entry">
              <div
                className="single-entry-card"
              >
                <Card.Header className="entry-card-header">Had a good day with the fam</Card.Header>
                <hr></hr>
                <Card.Body>
                  <Card.Title className="entry-card-title">
                    😁
                    <br></br>
                    <span className="weak-text">3:35 on Jan 7 2022</span>
                  </Card.Title>
                  <hr></hr>
                  <Card.Text>
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

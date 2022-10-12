import React, { useState, useEffect } from "react";
import { Modal, Tab } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QUERY_ENTRIES } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ENTRY, EDIT_ENTRY } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";

const JournalEntries = () => {

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ entryText: "" });
  const { entryText } = formState;
  const [editingId, setEditingId] = useState("");

  const [deleteEntry, { error }] = useMutation(DELETE_ENTRY);
  const [editEntry] = useMutation(EDIT_ENTRY);

  const handleDelete = async function (event) {
    event.preventDefault();
    const id = event.target.parentNode.id
    console.log(id);
    // console.log(Auth.getProfile().data);
    if (Auth.loggedIn()) {
      try {
        const { data } = await deleteEntry({
          variables: { id }
        });
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('not logged it');
      window.location.assign('/Login');
    }

    

  }

  const handleChange = function(e) {
    // console.dir(e.target);
    if(!e.target.value.length) {
      setErrorMessage(`${e.target.name} cannot be empty.`)
    } else {
      setErrorMessage('');
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
    console.log(formState);
  }
  // handle submit for edited post
  const handleSubmit = async function(event) {
    event.preventDefault();
    console.log(editingId);
    // console.log(Auth.getProfile().data);
    if (Auth.loggedIn()) {
      try {
        const {data} = await editEntry({
          variables: {...formState, email: Auth.getProfile().data.email, id: editingId}
        });
        setEditingId("");
        window.location.assign('/JournalEntries');
      } catch (e) {
        console.log(e);
        alert(e);
      }
    } else {
      console.log('not logged it');
      window.location.assign('/Login');
    }

  }

  // handleEdit event function
  const handleEdit = async function (index) {
    // console.log(index);
    // console.log(entries[index]);
    setEditingId(entries[index]._id);
    setShowModal(true);
    setFormState({...formState, ["entryText"]: entries[index].entryText})
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
                {entries.map((entry, index) => (
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
                      <div className="journal-btn-group" id={entry._id}>
                        <Button variant="primary" className="check-entry">
                          Check Entry
                        </Button>
                        <Button onClick={() => handleEdit(index)} variant="primary" className="edit">
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
        <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='editEntry-modal'>
          {/* tab container to do either signup or login component */}
          <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
              <Modal.Title id='Edit Entry'>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
              <main>
                  <div className="journal-form">
                    <form
                      onSubmit={handleSubmit}
                    >
                      <div className="inputBox">
                        <h4>edit entry</h4>
                        <input
                          name="entryText"
                          type="text"
                          required="required"
                          className="inputBoxMessage"
                          defaultValue={entryText}
                          onBlur={handleChange}
                        />
                        <span>Body:</span>
                      </div>
                      <div className="inputBoxBtnContainer">
                        <button
                          type="submit"
                          className="inputBoxBtn"
                          value="save"
                          id="submitBtn"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </main>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
        <Footer />
      </>
    </div>
  );
};

export default JournalEntries;

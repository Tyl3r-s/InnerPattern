import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";

const CreateJournalEntry = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    title: "",
    entryText: "",
    moodRating: "",
  });
  const { title, entryText, moodRating } = formState;

  const [addEntry, { error }] = useMutation(ADD_ENTRY);

  const handleChange = function (e) {
    // console.dir(e.target);
    if (e.target.ariaLabel === "mood emoji") {
      console.log(e.target.textContent);
      setFormState({ ...formState, ["moodRating"]: e.target.textContent });
      return;
    }
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} cannot be empty.`);
    } else {
      setErrorMessage("");
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log(formState);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    console.log(Auth.getProfile().data);
    if (Auth.loggedIn()) {
      try {
        const { data } = await addEntry({
          variables: { ...formState, email: Auth.getProfile().data.email },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("not logged it");
      window.location.assign("/Login");
    }

    window.location.assign("/JournalEntries");
  };
  // if not loggedIn, redirect
  if (!Auth.loggedIn()) {
    window.location.assign("/Login");
    return;
  }

  return (
    <div>
      <main>
        <div className="journal-form">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <h4 className="journal-header" id="journal-header">
                give your entry a descriptive title
              </h4>
              <input
                type="text"
                name="title"
                required="required"
                className="input1"
                defaultValue={title}
                onBlur={handleChange}
              />
              <span>Title:</span>
            </div>
            <div className="inputBox">
              <h4>create your journal entry</h4>
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
            <div className="inputBoxBottom">
              <h4>select your mood</h4>
              <ul className="moods" id="moodRating" onClick={handleChange}>
                <li className="mood" id="mood-1">
                  <span role="img" aria-label="mood emoji">
                    😔
                  </span>
                </li>
                <li className="mood" id="mood-2">
                  <span role="img" aria-label="mood emoji">
                    🙁
                  </span>
                </li>
                <li className="mood" id="mood-3">
                  <span role="img" aria-label="mood emoji">
                    😐
                  </span>
                </li>
                <li className="mood" id="mood-4">
                  <span role="img" aria-label="mood emoji">
                    🙂
                  </span>
                </li>
                <li className="mood" id="mood-5">
                  <span role="img" aria-label="mood emoji">
                    😊
                  </span>
                </li>
              </ul>
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
    </div>
  );
};

export default CreateJournalEntry;

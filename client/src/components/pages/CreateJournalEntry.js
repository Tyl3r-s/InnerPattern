import React from "react";
import Navigation from "../pages/Navigation";

const CreateJournalEntry = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="journal-form">
          <form>
            <div className="inputBox">
              <h4 className="journal-header" id="journal-header">
                Create An Entry
              </h4>
              <input
                type="text"
                name="title"
                required="required"
                className="input1"
              />
              <span>Title:</span>
            </div>
            <div className="inputBox">
              <h4>Journal Content</h4>
              <input name="entryText" type="text" required="required" className="inputBoxMessage"/>
              <span>Body:</span>
            </div>
            <div className="inputBoxBottom">
              <h4>My Mood</h4>
              <ul className="moods">
                <li className="mood" id="mood-1">
                  <span role="img" aria-label="mood emoji">😔</span>
                </li>
                <li className="mood" id="mood-2">
                <span role="img" aria-label="mood emoji">🙁</span>
                </li>
                <li className="mood" id="mood-3">
                <span role="img" aria-label="mood emoji">😐</span>
                </li>
                <li className="mood" id="mood-4">
                <span role="img" aria-label="mood emoji">🙂</span>
                </li>
                <li className="mood" id="mood-5">
                <span role="img" aria-label="mood emoji">😊</span>
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

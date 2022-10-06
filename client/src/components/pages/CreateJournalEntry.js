import React from "react";
import Navigation from "../pages/Navigation";

const CreateJournalEntry = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="journal-form">
          <h4 className="journal-header" id="journal-header">
            Create An Entry
          </h4>
          <form>
            <div className="inputBox">
              <input
                type="text"
                name="title"
                required="required"
                className="input1"
              />
              <span>Title:</span>
            </div>
            <div className="inputBox">
              <input
                name="mood"
                type="text"
                required="required"
                className="inputBox"
              />
              <span>My Mood:</span>
            </div>
            <div className="inputBox inputBoxMessage">
              <input name="body" type="text" required="required" />
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
    </div>
  );
};

export default CreateJournalEntry;

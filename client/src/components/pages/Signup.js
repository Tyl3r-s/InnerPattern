import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";

function Signup(props) {

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {      
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      alert('Email address already in database! Use a different email address.')
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // if not loggedIn, redirect
  if (Auth.loggedIn()) {
    window.location.assign('/Profile');
    return;
  }

  return (
    <div>
      <Navigation />
      <main>
        <div className="signup-form">
          <h4 className="signup-header">Sign Up</h4>
          <form onSubmit={handleFormSubmit} id="signup-flex">
            <div className="inputBox twenty-wide five-margin">
              <input
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
              <span>First:</span>
            </div>
            <div className="inputBox twenty-wide five-margin">
              <input
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
              <span>Last:</span>
            </div>
            <div className="inputBox twenty-wide five-margin">
              <input
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <span>Email:</span>
            </div>
            <div className="inputBox twenty-wide five-margin">
              <input
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
              <span>Password:</span>
            </div>
            <div className="inputBoxBtnContainer">
              <button type="submit" className="inputBoxBtn">
                Sign Up
              </button>
            </div>
            <p>Already Have An Account? <a href="/Login">Login</a></p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Signup;

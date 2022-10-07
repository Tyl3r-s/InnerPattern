import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="login-form">
          <h4 className="login-header">Login</h4>
          <form onSubmit={handleFormSubmit} id="signup-flex">
            <div className="inputBox twenty-wide five-margin">
              <input
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <span>Email address:</span>
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
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="inputBoxBtnContainer">
              <button type="submit" className="inputBoxBtn">
                Submit
              </button>
            </div>
            <p>
              Don't Have An Account? <a href="/SignUp">Sign Up</a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;

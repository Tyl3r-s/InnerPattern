import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../pages/Navigation';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navigation />
    <ul className="flex-row">
      <li className="mx-1">
        <Link to="/Signup">
          Signup
        </Link>
      </li>
      <li className="mx-1">
        <Link to="/Login">
          Login
        </Link>
      </li>
    </ul>
        <Footer />
    </div>
  );
};

export default Home;
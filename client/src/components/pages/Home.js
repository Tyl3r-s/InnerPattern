import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <li className="mx-1">
        <Link to="/JoinUs">
          Start!
        </Link>
      </li>
  );
};

export default Home;

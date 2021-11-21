import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__link">
        Take me to the home
      </Link>
    </div>
  );
}
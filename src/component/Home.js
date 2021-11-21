import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link to="nasaphoto" className="home__link">
        See into the stars
      </Link>
      <Link to="random-nasaphoto" className="home__link">
        See random 4 posts
      </Link>
      <Link to="nasa-photos-choise" className="home__link">
        See post of choisen dates
      </Link>
    </div>
  );
}
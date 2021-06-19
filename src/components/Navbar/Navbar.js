import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  const [query, setQuery] = useState("");

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <span className="navbar-brand mb-0 h1">Toofan-Xpress</span>
        <span onClick={() => setQuery("")}>
          <Link style={{ color: "white", textDecoration: "None" }} to="/">
            Home
          </Link>
        </span>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <Link to={`/${query}`}>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;

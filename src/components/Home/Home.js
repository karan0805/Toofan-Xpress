import React from 'react'
import { useState } from "react";
import NewsCards from '../NewsCards/NewsCards';

const Home = () => {
     const [showBusiness, setShowBusiness] = useState(true);
     const [showSports, setShowSports] = useState(true);
     const [showTechnology, setShowTechnology] = useState(false);
     const [showScience, setShowScience] = useState(false);
     const [showHealth, setShowHealth] = useState(false);
     const [showEntertainment, setShowEntertainment] = useState(false);
    return (
      <div className="wrapper">
        <div className="sidebar">
          <button
            className="mybutton"
            onClick={() => setShowBusiness((prevVal) => !prevVal)}
          >
            Business
          </button>
          <button
            className="mybutton"
            onClick={() => setShowSports((prevVal) => !prevVal)}
          >
            Sports
          </button>
          <button
            className="mybutton"
            onClick={() => setShowTechnology((prevVal) => !prevVal)}
          >
            Technology
          </button>
          <button
            className="mybutton"
            onClick={() => setShowScience((prevVal) => !prevVal)}
          >
            Science
          </button>
          <button
            className="mybutton"
            onClick={() => setShowHealth((prevVal) => !prevVal)}
          >
            Health
          </button>
          <button
            className="mybutton"
            onClick={() => setShowEntertainment((prevVal) => !prevVal)}
          >
            Entertainment
          </button>
        </div>
        <div className="main">
          <div className="mycontainer">
            {showBusiness && <NewsCards cat={"business"} />}
          </div>
          <div className="mycontainer">
            {showSports && <NewsCards cat={"sports"} />}
          </div>
          <div className="mycontainer">
            {showTechnology && <NewsCards cat={"technology"} />}
          </div>
          <div className="mycontainer">
            {showScience && <NewsCards cat={"science"} />}
          </div>
          <div className="mycontainer">
            {showHealth && <NewsCards cat={"health"} />}
          </div>
          <div className="mycontainer">
            {showEntertainment && <NewsCards cat={"entertainment"} />}
          </div>
        </div>
      </div>
    );
}

export default Home

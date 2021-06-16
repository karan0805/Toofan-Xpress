import React from "react";
import "./style.css";

const NewsCard = (props) => {
  let date = new Date(props.content.publishedAt).toLocaleString("en-us", {
    month: "short",
  });
  return (
    <div>
      <figure className="mycard">
        <img src={props.content.urlToImage} alt="image123" />
        <div className="date">
          <span className="day">{props.content.publishedAt.substr(8, 2)}</span>
          <span className="month">{date}</span>
        </div>
        <i className="ion-headphone"> </i>
        <figcaption>
          <h3>{props.content.title}</h3>
          <p>{props.content.description}</p>
          <button>Read More</button>
        </figcaption>
        <a href={props.content.url} target="_blank" rel="noreferrer">
          card
        </a>
      </figure>
    </div>
  );
};

export default NewsCard;

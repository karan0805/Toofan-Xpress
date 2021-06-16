import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import "./styles.css";

const SearchQuery = ({ match }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://toofan-xpress-backend.herokuapp.com/search?q=${match.params.query}`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);

  return (
    <div className="wrapper2">
      {articles.map((article) => (
        <div key={article.title}>
          <Zoom>
            <NewsCard content={article} />
          </Zoom>
        </div>
      ))}
    </div>
  );
};

export default SearchQuery;

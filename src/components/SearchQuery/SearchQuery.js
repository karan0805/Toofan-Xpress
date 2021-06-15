import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import './styles.css'

const SearchQuery = ({ match }) => {

  // const [cat]= useState(match.params.query); 
  const [articles, setArticles] = useState([]);
  // const key = "06a6f6c07d1e459ba2eaaaa3598ed490";

  useEffect(() => {
    axios
      // .get(
      //   `https://newsapi.org/v2/everything?q=${match.params.query}&apiKey=${key}`
      // )
      .get(
        `https://toofan-xpress-backend.herokuapp.com/search?q=${match.params.query}`
      )
      .then((res) => {
        console.log(res);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);

  return (
    <div className="wrapper2">
      {/* <div style={{ padding: "100px" }}>
          {console.log(match.params.query)}
          {match.params.query}
        </div> */}

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

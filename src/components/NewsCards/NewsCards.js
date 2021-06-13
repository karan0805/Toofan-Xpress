import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from "react-reveal/Zoom";
import { Spinner } from "reactstrap";

const NewsCards = ({ cat }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  //API key
  const key = "4a661efa37524973abe7fc64be74807f";

  const getArticles = async (cat) => {
    try {
      const data = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?language=en&category=${cat}&apiKey=${key}`
        )
        .then((res) => {
          console.log(res);
          setArticles(res.data.articles);
        });
      setLoading(false);
      return data;
    } catch (e) {
      console.log(e);
    }
    
  };

  useEffect(() => {
    getArticles(cat);
  }, [cat]);

  return (
    <>
      <Zoom>
        <h1
          style={{
            color: "white",
            paddingLeft: "60px",
            textTransform: "uppercase",
          }}
        >
          {cat}
        </h1>
      </Zoom>

      <Carousel
        swipeable={true}
        draggable={true}
        additionalTransfrom={50}
        responsive={responsive}
        containerClass="carousel-container"
      >
        {loading ? (
          <Zoom>
            <div style={{ display: "flex" }}>
              <h4 style={{ color: "white", paddingRight: "10px" }}>Loading </h4>
              <Spinner color="primary" />
            </div>
          </Zoom>
        ) : (
          articles.map((article) => (
            <div key={article.title}>
              <Zoom>
                <NewsCard content={article} key={article.title} />
              </Zoom>
            </div>
          ))
        )}
        {/* {articles.map((article) => (
          <Zoom>
            <NewsCard content={article} />
          </Zoom>
        ))} */}
      </Carousel>
    </>
  );
};

export default NewsCards;

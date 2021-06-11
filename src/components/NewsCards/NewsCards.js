import React,{ useState,useEffect } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from "react-reveal/Zoom";

const NewsCards = ({cat}) => {
  const [articles, setArticles] = useState([])

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
  const key = "06a6f6c07d1e459ba2eaaaa3598ed490"

  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/top-headlines?language=en&category=${cat}&apiKey=${key}`)
    .then(res => {
      console.log(res)
      setArticles(res.data.articles)
    })
    .catch(err => {
      console.log(err)
    })
  },[cat])

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

        <Carousel
          swipeable={true}
          draggable={true}
          additionalTransfrom={50}
          responsive={responsive}
          containerClass="carousel-container"
        >
          {articles.map((article) => (
            <NewsCard content={article} />
          ))}
        </Carousel>
      </Zoom>
    </>
  );
}

export default NewsCards

import React,{ useState,useEffect } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import axios from 'axios'

const NewsCards = ({cat}) => {
  const [articles, setArticles] = useState([])

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
  },[])

  return (
    <>
      <h1>{cat}</h1>
      <hr />
      {
        articles.map(article => (
          <NewsCard content={article}/>
        ))
      }
    </>
  )
}

export default NewsCards

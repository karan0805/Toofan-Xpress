import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsCards = ({articles}) => {
  return (
    <>
      {
        articles.map(article => (
          <NewsCard content={article}/>
        ))
      }
    </>
  )
}

export default NewsCards

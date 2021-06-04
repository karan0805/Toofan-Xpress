import React from 'react'

const Article = ({articles}) => {
  return (
    <>
      {articles.map( (article) => (<h1>{article.title}</h1>))}
    </>
  )
}

export default Article

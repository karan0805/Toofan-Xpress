import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Article from './components/Article';

function App() {

  //API key
  const key = "06a6f6c07d1e459ba2eaaaa3598ed490"

  const [businessArticles, setBusinessArticles] = useState([])
  const [showBusiness, setShowBusiness] = useState(false)

  // const [sportsArticles, setSportsArticles] = useState([])
  // const [showSports, setShowSports] = useState(false)

  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${key}`)
    .then(res => {
      console.log(res)
      setBusinessArticles(res.data.articles)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <button onClick={() => setShowBusiness(!showBusiness)} >Business</button>
      {showBusiness && <ul>
      {
        businessArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))
      }
      </ul>
      } 
    </div>
  );
}

export default App;

import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'
import NewsCards from './components/NewsCards/NewsCards';


function App() {

  //API key
  const key = "06a6f6c07d1e459ba2eaaaa3598ed490"

  const [businessArticles, setBusinessArticles] = useState([])
  const [showBusiness, setShowBusiness] = useState(false)

  // const [sportsArticles, setSportsArticles] = useState([])
  // const [showSports, setShowSports] = useState(false)

  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=${key}`)
    .then(res => {
      console.log(res)
      setBusinessArticles(res.data.articles)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div>
      <button onClick={() => setShowBusiness(!showBusiness)} >Business</button><hr></hr>
      <div className="container">
      {showBusiness && <NewsCards articles={businessArticles}/>
      } 
      </div>
    </div>
  );
}

export default App;

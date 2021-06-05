import './App.css';
import { useState } from 'react';
import NewsCards from './components/NewsCards/NewsCards';


function App() {

  const [showBusiness, setShowBusiness] = useState(true)
  const [showSports, setShowSports] = useState(true)
  const [showTechnology, setShowTechnology] = useState(false)
  const [showScience, setShowScience] = useState(false)
  const [showHealth, setShowHealth] = useState(false)
  const [showEntertainment, setShowEntertainment] = useState(false)

  return (
    <div>
      <button onClick={() => setShowBusiness(!showBusiness)} >Business</button>
      <button onClick={() => setShowSports(!showSports)} >Sports</button>
      <button onClick={() => setShowTechnology(!showTechnology)} >Technology</button>
      <button onClick={() => setShowScience(!showScience)} >Science</button>
      <button onClick={() => setShowHealth(!showHealth)} >Health</button>
      <button onClick={() => setShowEntertainment(!showEntertainment)} >Entertainment</button>

      <hr></hr>

      <div className="container">
      {showBusiness && <NewsCards cat={"business"}/>
      }
      </div>
      <div className="container">
      {showSports && <NewsCards cat={"sports"}/>
      }
      </div>
      <div className="container">
      {showTechnology && <NewsCards cat={"technology"}/>
      }
      </div>
      <div className="container">
      {showScience && <NewsCards cat={"science"}/>
      }
      </div>
      <div className="container">
      {showHealth && <NewsCards cat={"health"}/>
      }
      </div>
      <div className="container">
      {showEntertainment && <NewsCards cat={"entertainment"}/>
      }
      </div>
    </div>
  );
}

export default App;

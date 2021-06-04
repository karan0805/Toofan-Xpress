import './App.css';
import NewsCard from './components/NewsCard/NewsCard'

function App() {

const data ={
"author": "Natasha Lomas",
"title": "In latest big tech antitrust push, Germany's FCO eyes Google News Showcase fine print",
"description": "The Bundeskartellamt, Germany’s very active competition authority, isn’t letting the grass grow under new powers it gained this year to tackle big tech: The Federal Cartel Office (FCO) has just announced a third proceeding against Google. The FCO’s latest com…",
"url": "https://techcrunch.com/2021/06/04/in-latest-big-tech-antitrust-push-germanys-fco-targets-google-news-showcases-fine-print/",
"urlToImage": "https://techcrunch.com/wp-content/uploads/2015/02/newspapers.jpg?w=600",
"publishedAt": "2021-06-04T12:03:07Z",
"content": "The Bundeskartellamt, Germany’s very active competition authority, isn’t letting the grass grow under new powers it gained this year to tackle big tech: The Federal Cartel Office (FCO) has just annou… [+9042 chars]"
}

  return (
    <div className="App">
      <NewsCard content={data}></NewsCard>
      <NewsCard content={data}></NewsCard>
      <NewsCard content={data}></NewsCard>
    </div>
  );
}

export default App;

import Requests from './Requests.js';
import './App.css';
import Row from './Row.js'
import Banner from './Banner.js';
function App() {
  return (
    <div className="App">
      
      <Banner />

      <Row title={"NETFLIX ORIGINALS"} fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Trending Now"} fetchUrl={Requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={Requests.fetchTopRated} />
    </div>
  );
}

export default App;

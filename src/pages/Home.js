import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Row from '../components/Row'
import Requests from '../lib/Requests';

const Home = () => {
  return (
    <div className="App">
      <Banner />
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Trending Now"} fetchUrl={Requests.fetchTrending} isLargeRow/>
      <Row title={"Top Rated"} fetchUrl={Requests.fetchTopRated} />
      <Footer />
    </div>
  )
}

export default Home
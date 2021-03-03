import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        tittle="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

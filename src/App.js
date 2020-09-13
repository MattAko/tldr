import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar.js'
import Header from './components/layout/Header.js'
import Search from './components/layout/Search.js'
import Trending from './components/Trending.js'
import covid19 from './assets/covid19.png'
import bobcatfire from './assets/bobcatFire.png'
import flag from './assets/flag.png'

class App extends Component {
  state ={
    trending : [
      {
        id: 1,
        title: "Covid-19",
        bg: `url(${covid19})`
      },
      {
        id: 2,
        title: "Bobcat Fires",
        bg: `url(${bobcatfire})`
      },
      {
        id: 3,
        title: "U.S Elections",
        bg: `url(${flag})`
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
        <Search/>
        <h2>Today's Top Trending</h2>
        <div className = "Row">
          <Trending trending={this.state.trending}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;

import React, {Component} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar.js'
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
        title: "U.S Election",
        bg: `url(${flag})`
      },
    ],
    keyword: { searchTerm: ""}
  }
  postToBackEnd = (keyword) => {
    this.state.keyword.searchTerm = keyword;
    console.log("Changing search term...");
    console.log(keyword);
  }

  search=(title) => {
    console.log(title);
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <div className="Row">
            <h2 style={{fontStyle: 'italic', letterSpacing: '2px'}}>trending</h2>
          </div>
          <div className="Row">
            <Trending trending={this.state.trending} search={this.search}/>
          </div>
        </div>z  
        <Search searchTerm={this.state.keyword} onSubmit={this.postToBackEnd}/>    
      </div>
    );
  }
  
}

export default App;

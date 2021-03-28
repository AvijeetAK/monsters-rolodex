import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

class App extends Component {

  constructor() {
    super(); 
    this.state = {
      
      monsters: [],
      searchfield: ''
    } ;

  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));

  }

  handleChange = e => {

    this.setState({searchfield : e.target.value});

  }

  render() {

      const { monsters, searchfield } = this.state;

      const filteredmonster = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchfield.toLowerCase())
        )

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>

       <SearchBox 
          placeholder='search monster' 
          handleChange={this.handleChange}
          
          />
        <CardList monsters = {filteredmonster} />

        
          
      </div>
    );
  }
}

export default App;

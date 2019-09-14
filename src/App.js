import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard'

class App extends React.Component{
  render(){
    return(
      <div class="App">
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
      </div>
    );
  }
}
 

export default App;

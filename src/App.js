import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard'

let message="HELLO"
class App extends React.Component{
  render(){
    return(
      <div class="App">
        {Array.from(message).map((c,i)=><CharacterCard value={c} key={i}/>)}
      </div>
    );
  }
}
 

export default App;

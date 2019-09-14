import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard'
import _ from 'lodash';


let message = "HELLO"
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
}
class App extends React.Component {

  state = prepareStateFromWord(message)

  reset=()=>{
    this.setState({ guess:[],completed: false })
    this.setState({ ans: ""})
    this.setState({ reset: ""})
   
    
  }

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]

    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ completed: true })
      }

      else {
        this.setState({ attempt: this.state.attempt + 1 })
      }
      if (guess.join('').toString() == this.state.word) {
        this.setState({ ans: "Correct"})
        this.setState({ reset: "reset"})
      }
      if (guess.join('').toString() != this.state.word) {
        this.setState({ ans: "Wrong" })
        this.setState({ reset: "reset"})
      }
    }
  }

  render() {
    return (
      <div>
        {Array.from(this.state.chars).map((item, index) => <CharacterCard value={item} key={index} activationHandler={this.activationHandler} />)}
        <div class="Righteous">Attemp {this.state.attempt}</div>
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (<CharacterCard value={item} key={index} activationHandler={this.activationHandler} />))
        }
        
        <div class="Righteous2">{this.state.ans}</div>
        <div><center><button onClick={this.reset}>{this.state.reset}</button></center></div>

      </div>
    );
  }
}


export default App;

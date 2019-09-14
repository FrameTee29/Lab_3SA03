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

  activationHandler = (value) => {
    this.setState({
      guess: [...this.state.guess, value]
    })
  }

  render() {
    return (
      <div>
        {Array.from(this.state.chars).map((item, index) => <CharacterCard value={item} key={index} activationHandler={this.activationHandler} />)}

      </div>
    );
  }
}


export default App;

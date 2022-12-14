import React, { Component } from 'react';
import Table from './Table'
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
        
      }),
    })
    alert('Your entry was successfully deleted')
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
    alert('Your entry was successfully created')
  }

   

  render() {
    const { characters } = this.state;
    return (
      <div className="Container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        < Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;

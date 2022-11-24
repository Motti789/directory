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

   

  render() {
    const { characters } = this.state;
    return (
      <div className="Container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        < Form />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
 state = {
    ninjas: [
      { name: "Angy", age: 30, belt: 'green', id: 1 },
      { name: "Bola", age: 39, belt: 'red', id: 2 },
      { name: "Temi", age: 25, belt: 'blue', id: 3 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;

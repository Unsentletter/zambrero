import React, { Component } from 'react';

import Form from './Components/Form';
import Schema from './Schema.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form schema={Schema}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Grid from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid
              subject={"lich"}
              subjectBody={"A lich often haunts the abode it favored in life, such as a lonely tower, " +
              "a haunted ruin, or an academy of black magic. Alternatively, some liches construct secret " +
              "tombs filled with powerful guardians and traps."}
          />
      </div>
    );
  }
}

export default App;

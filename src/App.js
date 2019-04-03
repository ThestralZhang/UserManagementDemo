import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>The Schuyler Sisters</h3>
        <ul>
          {["Angelica", "Eliza", "Peggy"].map(name => (
            <li>I'm {name}.</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

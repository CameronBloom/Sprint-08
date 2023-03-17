import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    console.log(`Constructor Invoked...`);
    super();
    this.state = {
      doggos: []
    };
  }
  componentDidMount() {
    console.log(`CDM Invoked...`);
    fetch("https://dog.ceo/api/breed/labrador/images")
      .then((res) => res.json())
      .then((dogs) => this.setState({ doggos: dogs.message }))
      .catch((err) => console.log("noooo"));
  }
  render() {
    console.log(`Render Invoked...`);
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.doggos.map((doggo) => (
          <img src={doggo} key={doggo} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
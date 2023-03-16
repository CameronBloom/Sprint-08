import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import RenderMessage from "./components/RenderMessage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "", // Hello from App State!!
      name: "Gilroy",
      age: "99",
      location: "New York",
    };
  }
  changeHandler = event => {
    this.setState({ message: event.target.value.slice(0,50) })
  };
  changeName = event => {
    console.log(`billy was called...`)
    // setState is async so we use a callback function before alerting the user of the current state...
    this.setState({ name: "Billy" }, () => {
      console.log(`here..`)
      alert(JSON.stringify(this.state));
    })
    
  };

  render() {
    { console.log(this.state) }
    return (
      <div>
        <div>{this.state.message || "No input message."}</div>
        <RenderMessage name={ this.state.name } age={ this.state.age } location={ this.state.location } message={this.state.message} appState={this.state} changeName={this.changeName} />
        <input onChange={ this.changeHandler }/>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

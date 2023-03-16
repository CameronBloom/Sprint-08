import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import RenderMessage from "./components/RenderMessage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from App State!!"
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <RenderMessage message={this.state.message} />
      </div>
    )

  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

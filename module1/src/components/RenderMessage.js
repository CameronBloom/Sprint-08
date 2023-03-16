import React from "react";
import RenderSubMessage from "./RenderSubMessage";

class RenderMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>RenderMessage component says, "{ this.props.message }"</div>
        <div>User is { this.props.age } years old.</div>
        <div>===</div>
        <RenderSubMessage subMessage={ this.props.message } appState={this.state} changeName={this.props.changeName} name={this.props.name} />
        <div>===</div>
      </div>

    )
  }
}

export default RenderMessage;
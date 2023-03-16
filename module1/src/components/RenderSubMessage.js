import React from "react";

class RenderSubMessage extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <div>
        <h4>Passed to SubMessage: {this.props.subMessage}</h4>
        <p>Name (via Props): {this.props.name}</p>
        <p>Message State: {this.props.age}</p>
        <p>SubMessage State: {this.props.location}</p>
        <button onClick={this.props.changeName}>Billy?</button>
      </div>

    )
  }
}

export default RenderSubMessage;
import React from "react";

class RenderMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>RenderMessage component says, "{ this.props.message }"</div>
    )
  }
}

export default RenderMessage;
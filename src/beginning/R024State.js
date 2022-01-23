import React, { Component } from "react";

export default class R024State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }
  render() {
    return (
      <div>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class R026ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { ReactString: "리액트" };
  }
  StateChange = () => {
    this.state.ReactString = "react";
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.StateChange()}>
          [state 변경하기, forceUpdate ] {this.state.ReactString}
        </button>
      </div>
    );
  }
}

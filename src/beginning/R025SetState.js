import React, { Component } from "react";

export default class R025SetState extends Component {
  constructor(props) {
    super(props);
    this.state = { StateString: "react" };
  }

  StateChange = (flag) => {
    if (flag === "direct") {
      this.state.StateString = "리액트";
    }

    if (flag === "setState") this.setState({ StateString: "리액트" });
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.StateChange("direct")}>
          [state직접변경]
        </button>
        <button onClick={(e) => this.StateChange("setState")}>
          [setState로변경]
        </button>
        <div>[state 변경하기] StateString : {this.state.StateString}</div>
      </div>
    );
  }
}

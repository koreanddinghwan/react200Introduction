import React, { Component } from "react";

export default class R005Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1, constructor Call");
  }
  render() {
    console.log("3. render Call");
    return (
      <div>
        <h2>[This is constructor functionR005]</h2>
      </div>
    );
  }
}

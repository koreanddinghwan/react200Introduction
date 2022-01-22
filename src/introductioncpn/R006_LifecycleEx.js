import React, { Component } from "react";

export default class R006_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps Call : ` + props.prop_value);
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor call");
  }

  render() {
    console.log("3.render call");
    return <h2>[this is constructor functionR006]</h2>;
  }
}

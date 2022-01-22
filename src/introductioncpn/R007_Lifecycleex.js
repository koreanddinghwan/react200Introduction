import React, { Component } from "react";

export default class R007Lifecycleex extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor call");
  }

  componentDidMount() {
    console.log("4. componenetDidMount Call");
    console.log("5. tmp_state:" + this.state.tmp_state);
  }

  render() {
    console.log("3.render call");
    return <h2>[THIS IS COMPONENTDIDMOUT FUNCTION R0073]</h2>;
  }
}

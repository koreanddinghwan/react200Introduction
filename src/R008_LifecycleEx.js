import React, { Component } from "react";

export default class R008Lifecycleex extends Component {
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
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log(
      "6. shouldComponentUpdate Call / tmpstate가 componentdidmount에 의해 렌더링 이후 state바뀌며 다시 렌더링됨" +
        state.tmp_state2
    );
    return state.tmp_state2; //return값이 true이면 render함수 다시 호출
  }

  render() {
    console.log("3.render call");
    return <h2>[THIS IS COMPONENTDIDMOUT FUNCTION R008]</h2>;
  }
}

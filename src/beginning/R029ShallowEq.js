import React, { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";

export default class R029ShallowEq extends Component {
  constructor(props) {
    super(props);
    this.state = { StateString: "react" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState);
    //componentdidmount에서 변경된 state에 의해 함수 발동,
    //현재 state와 nextstate를 비교하는데, 같으므로 true가된다. rendering필요 없으므로 반전시켜서 false를 리턴, 렌더링방지.
  }

  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    const Array3 = ["리액트", { react: "200" }];

    console.log(
      "shallowEqualArray(Array1, Array2 : " + shallowEqualArrays(Array1, Array2)
    ); //1과 2의 값만을 비교, object 변수는 내장 변수이므로 같은 값을 가짐.
    console.log(
      "shallowEqualArray(Array2, Array3 : " + shallowEqualArrays(Array2, Array3)
    ); //2와3의 값을 비교, object과 {}객체는 다른 참조값, false
    this.setState({ StateString: "react" });
  }

  render() {
    console.log("render");
    return <div></div>;
  }
}

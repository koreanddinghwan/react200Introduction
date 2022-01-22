import React, { Component } from "react";

export default class R013ArrowFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: "React200",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 3);
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ".Arrow Function : " + this.state.arrowFunc);
  };

  Function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ".Es5 callback function nobind : ");
      console.log(this.state.arrowFunc); //에러, 콜백함수내부에서 호출하는 this는 윈도우객체임
      console.log(this);
    }, 100);
  }

  Function4() {
    setTimeout(
      function () {
        console.log("4. Es5 Callbak function bind : " + this.state.arrowFunc);
      }.bind(this), //this를 다른 변수에 할당하지말고 콜백함수 내부에서 직접쓰려면 콜백함수에 직접 bind(this)
      100
    );
  }

  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFunc);
    }, 100);
  };

  render() {
    return <div></div>;
  }
}

import React, { PureComponent } from "react";

export default class R028Purecompo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react", //변수값비교
      StateArrayObj: ["react", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" }); //변수값비교, 동일 ->렌더링x
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] }); //객체는 참조값(메모리값비교, 다른메모리로 인식해 렌더링발생)
    }
  };

  render() {
    console.log("rendered");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>
          [문자열 변경]
        </button>
        <button onClick={(e) => this.buttonClick("Arrobj")}>
          [객체배열 변경]
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class R009Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var jsString1 = "자바스크립트";
    var jsString2 = "입니다\n다음 줄입니다.";
    console.log(jsString1 + ` 문자열` + jsString2 + `~`);
    var Es6String1 = "ES6";
    var Es6String2 = "입니다.";
    console.log(`${Es6String1} 문자열${Es6String2}!!\n다음줄입니다`);

    var LongString = "ES6에 추가된 string 함수들";
    console.log(`starts with :` + LongString.startsWith("ES6에 추가된"));
    console.log(`ends with :` + LongString.endsWith("함수들 입니다."));
    console.log(`includes :` + LongString.includes("추가된 string"));
  }

  render() {
    return <h2>[This IS ES6 STRING]</h2>;
  }
}

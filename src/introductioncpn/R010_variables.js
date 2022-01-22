import React, { Component } from "react";

export default class R010_variables extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200";
    console.log("varName 2 : " + varName);

    let letName = "react";
    console.log("letName1 : " + letName);
    //let letName = "200"; 오류
    letName = "200";
    console.log("letName2 :" + letName);

    const constName = "react";
    console.log("constName : " + constName);
    // const constName = "200"; 오류
    // constName = "200"; 오류
  }

  render() {
    return <div></div>;
  }
}

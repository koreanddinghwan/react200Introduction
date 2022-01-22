import React, { Component } from "react";

export default class R011SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //jsArray
    var varArray1 = ["num1", "num2"];
    var varArray2 = ["num3", "num4"];
    // var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    var sumVarArr = [].concat(varArray1, varArray2);
    console.log("1. sumVarArr :" + sumVarArr);
    //ES6 arr
    let sumLetArr = [...varArray1, ...varArray2];
    console.log("2. sumLetArr : " + sumLetArr);
    const [sum1, sum2, ...remain] = sumLetArr;
    console.log(sum1 + "  " + sum2 + " " + remain);

    //object
    var varobj1 = { key1: "val1", key2: "var2" };
    var varobj2 = { key2: "new2", key3: "var3" };
    //jsobject
    var sumVarobj = Object.assign({}, varobj1, varobj2);
    console.log("4. sumvarobj : " + JSON.stringify(sumVarobj));
    //ES6 obj

    var sumLetObj = { ...varobj1, ...varobj2 };
    console.log("5. sumLetObj" + JSON.stringify(sumLetObj));
    var { key1, key3, ...others } = sumLetObj;
    console.log(
      "6. key1 : " + key1,
      "key3 :" + key3,
      "others" + JSON.stringify(others)
    );
  }

  render() {
    return <div></div>;
  }
}

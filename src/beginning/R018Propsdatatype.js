import React, { Component } from "react";
import datatype from "prop-types";

export default class R018Propsdatatype extends Component {
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps : {String}</p>
        <p>NumberProps : {Number}</p>
        <p>BooleanProps : {Boolean.toString()}</p>
        <p>ArrayProps : {Array.toString()}</p>
        <p>ObjectProps : {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps : {Function}</p>
      </div>
    );
  }
}
R018Propsdatatype.propTypes = {
  String: datatype.number, //오류발생=
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

import React, { Component } from "react";
import $ from "jquery";

export default class R016jquery extends Component {
  input_alert = (e) => {
    var input_val = $(`#inputId`).val();
    alert(input_val);
  };
  render() {
    return (
      <div>
        <h2>[this is jquery component]</h2>
        <input id="inputId" name="inputName"></input>
        <button id="buttonId" onClick={(e) => this.input_alert(e)}>
          jquery button
        </button>
      </div>
    );
  }
}

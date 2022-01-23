import React, { Component } from "react";

export default class R022PropsDefault extends Component {
  render() {
    let { ReactNumber, ReactString } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

R022PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400,
};

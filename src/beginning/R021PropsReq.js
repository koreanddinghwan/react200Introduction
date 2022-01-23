import React, { Component } from "react";
import datatype from "prop-types";

class R021PropsReq extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

R021PropsReq.propTypes = {
  ReactString: datatype.any.isRequired,
  //datatype.any.isRequired로 모든 종류의 데이터에 대해 필요성 부여가능
};

export default R021PropsReq;

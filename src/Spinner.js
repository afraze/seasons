import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
//Eeger user mesaage propsu eklemezse, biz override yapiyoruz:
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;

import React, { Fragment, useState } from "react";
import Time from "./Time";

const Clock = (props) => {
  return (
    <Fragment>
      <div className="clock-container">
        <h2>CLOCK</h2>
        <Time setdate={props.data} />
      </div>
    </Fragment>
  );
};
export default Clock;

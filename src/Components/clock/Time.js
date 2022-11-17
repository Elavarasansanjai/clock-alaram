import React, { Fragment } from "react";
const Time = (props) => {
  return (
    <Fragment>
      <p>
        Time = {`${props.setdate.hour}`.padStart(2, "0")} :
        {` ${props.setdate.minute}`.padStart(2, "0")} :
        {` ${props.setdate.second}`.padStart(2, "0")}
      </p>
      <label>
        Date = {`${props.setdate.year}`}/
        {`${props.setdate.month + 1}`.padStart(2, "0")}/
        {`${props.setdate.date}`.padStart(2, "0")}
      </label>
    </Fragment>
  );
};
export default Time;

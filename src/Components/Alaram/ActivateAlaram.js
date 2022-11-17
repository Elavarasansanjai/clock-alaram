import React from "react";

import clases from "./ActivateAlaram.module.css";
const ActivateAlaram = (props) => {
  return (
    <div>
      <div className={clases.backdrop} onClick={props.onConfirm} />
      <div className={clases.modal}>
        <header className={clases.header}>
          <h2>tit</h2>
        </header>
        <div className={clases.content}>
          <p>message</p>
        </div>
        <footer className={clases.actions}>
          <button>Okay</button>
        </footer>
      </div>
    </div>
  );
};
export default ActivateAlaram;

import "./Button.scss";

import React, { useState } from "react";

function Button(props) {
  const [btnState, setBtnState] = useState("");

  const changeBtnStateHandler = (evenType) => {
    if (props.state !== "interactive") return;

    if (evenType === "mouseenter") {
      setBtnState("Ховер");
    }
    if (evenType === "mouseleave" || evenType === "mouseup") {
      setBtnState("");
    }

    if (evenType === "mousedown") {
      setBtnState("Нажатие");
    }
  };

  return (
    <div
      className={`button-section__btn-wrapper ${
        props.disabled ? "button-section__btn-wrapper--disabled" : ""
      }`}
    >
      {props.state && (
        <div className="button-section__btn-state font-smaller">
          {props.state === "interactive" ? btnState : props.state}
        </div>
      )}
      <button
        className={`btn ${props.className ? props.className : ""}`}
        disabled={props.disabled}
        onMouseEnter={(e) => {
          changeBtnStateHandler(e.type);
        }}
        onMouseLeave={(e) => {
          changeBtnStateHandler(e.type);
        }}
        onMouseDown={(e) => {
          changeBtnStateHandler(e.type);
        }}
        onMouseUp={(e) => {
          changeBtnStateHandler(e.type);
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;

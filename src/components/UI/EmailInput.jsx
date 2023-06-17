import "./EmailInput.scss";

import React, { useState } from "react";

function EmailInput(props) {
  const [emailInput, setEmailInput] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputState, setInputState] = useState(null);

  const emailInputChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const checkInputValidityHandler = () => {
    // Just some pseudo validation. In real world it would have been more complex.

    if (
      (!emailInput.includes("@") ||
        emailInput.charAt(0) === "@" ||
        emailInput.charAt(emailInput.length - 1) === "@" ||
        emailInput.length < 3) &&
      emailInput.length !== 0
    ) {
      setInputIsValid(false);
      setInputState("Ошибка");
      return;
    }

    setInputIsValid(true);
    setInputState("");
  };

  const changeInputStateHandler = (eventType) => {
    if (!inputIsValid) {
      return;
    }

    if (eventType === "focus") {
      setInputState("Ввод");
    }
    if (eventType === "mouseenter" && inputState !== "Ввод") {
      setInputState("Ховер");
    }
    if (eventType === "mouseleave" && inputState !== "Ввод") {
      setInputState("");
    }
  };

  return (
    <div className="input-container">
      {props.state && (
        <div className="text-input__input-state font-smaller">
          {props.state === "interactive" ? inputState : props.state}
        </div>
      )}
      <label
        className={`input ${props.className ? props.className : ""} ${
          !inputIsValid ? "error-state" : ""
        }`}
        onMouseEnter={(e) => {
          changeInputStateHandler(e.type);
        }}
        onMouseLeave={(e) => {
          changeInputStateHandler(e.type);
        }}
      >
        <input
          className="input__input"
          type="email"
          placeholder="email@example.com"
          value={
            props.state === "Ввод" || props.state === "Ошибка"
              ? "office@make.st"
              : emailInput
          }
          onChange={emailInputChangeHandler}
          onBlur={checkInputValidityHandler}
          onMouseEnter={(e) => {
            changeInputStateHandler(e.type);
          }}
          onFocus={(e) => {
            changeInputStateHandler(e.type);
          }}
          disabled={props.state !== "interactive" ? true : false}
        ></input>
        <span className="input__label">E-mail</span>
        <div
          className="input__highlight"
          onMouseEnter={(e) => {
            changeInputStateHandler(e.type);
          }}
        ></div>
      </label>
      {(!inputIsValid || props.state === "Ошибка") && (
        <span className="text-input__error-text error-text-animation font-smaller">
          Текст ошибки
        </span>
      )}
    </div>
  );
}

export default EmailInput;

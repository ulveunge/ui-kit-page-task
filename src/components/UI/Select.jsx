import "./Select.scss";

import React, { useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function Select(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsEl = useRef(null);

  const toggleFocusHandler = () => {
    if (props.state !== "interactive") return;

    setIsFocused(!isFocused);
  };

  const selectOptionHandler = (e) => {
    if (props.state !== "interactive") return;

    if (!optionsEl) return;

    [...optionsEl.current.children].forEach((option) => {
      option.classList.remove("selected");
    });

    if (!e.target.classList.contains("select__option")) return;

    if (!e.target.dataset.value) {
      setSelectedOption(null);
      setIsFocused(false);
      return;
    }

    setSelectedOption(e.target.dataset.value);
    setIsFocused(false);

    e.target.classList.add("selected");
  };

  return (
    <div className="select-container">
      <div
        className={`select ${props.className ? props.className : ""} ${
          isFocused || props.state === "focus" ? "select--is-focused" : ""
        } ${props.state ? props.state : ""}`}
      >
        <div className="select__select" onClick={toggleFocusHandler}>
          <div
            className={`select__label ${
              selectedOption ? "select__label--is-selected" : ""
            }`}
          >
            Выберите что-нибудь
          </div>
          {selectedOption && (
            <div className="select__selected">{selectedOption}</div>
          )}
          {props.state === "focus" && (
            <div className="select__selected">Выбранный пункт</div>
          )}
          {isFocused || props.state === "focus" ? (
            <RiArrowUpSLine
              className="select__arrow"
              color="#3e29e3"
              size="20"
            />
          ) : (
            <RiArrowDownSLine
              className="select__arrow"
              color="#3e29e3"
              size="20"
            />
          )}
          <div className="select__highlight"></div>
        </div>
        <div
          className="select__options"
          onClick={selectOptionHandler}
          ref={optionsEl}
        >
          {props.options.map((option, i) => (
            <div key={i} className="select__option" data-value={option}>
              {option}
            </div>
          ))}

          {props.state === "focus" && (
            <div
              className="select__option selected"
              data-value="Выбранный пункт"
            >
              Выбранный пункт
            </div>
          )}
          <div className="select__option"></div>
        </div>
      </div>
    </div>
  );
}

export default Select;

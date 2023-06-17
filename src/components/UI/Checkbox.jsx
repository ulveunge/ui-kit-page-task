import "./Checkbox.scss";

import { AiOutlineCheck } from "react-icons/ai";
import React from "react";

function Checkbox(props) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        value={props.label}
        disabled={props.disabled}
        defaultChecked={props.checked}
      />
      <AiOutlineCheck color="#fff" size="15" className="checkbox__icon" />
      <span>{props.label}</span>
    </label>
  );
}

export default Checkbox;

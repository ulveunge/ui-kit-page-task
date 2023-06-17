import "./Radio.scss";

import React from "react";

function Radio(props) {
  return (
    <label className="radio">
      <input type="radio" name={props.name} disabled={props.disabled} />
      <span>{props.label}</span>
    </label>
  );
}

export default Radio;

import "./Accordion.scss";

import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function Accordion(props) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleAccordionHandler = () => {
    if (props.state !== "interactive") return;

    setIsOpened(!isOpened);
  };

  return (
    <div
      className={`accordion ${
        isOpened || props.state === "open" ? "accordion--open" : ""
      } ${props.state === "disabled" ? "accordion--disabled" : ""}`}
    >
      <button className="accordion__btn" onClick={toggleAccordionHandler}>
        Аккордеон
        {isOpened || props.state === "open" ? (
          <RiArrowUpSLine color="#3e29e3" size="20" />
        ) : (
          <RiArrowDownSLine color="#3e29e3" size="20" />
        )}
      </button>
      <div className="accordion__panel">
        <p>
          Гоpдость полными вагонами золотыми погонами
          <br />
          С юга дyют молодые вет…
          <br />
          Pазpывая в клочья облака не забыли шлют из далека
          <br />
          С дома мама И непоследняя любовь
          <br />
          А по небy бегyт видишь чьи-то следы
          <br />
          Это может быть ты это может быть я
          <br />
          Это может наш дрyг Это может нам поют свои
        </p>
      </div>
    </div>
  );
}

export default Accordion;

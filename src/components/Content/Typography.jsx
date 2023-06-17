import "./Typography.scss";

import React, { useEffect, useState } from "react";

import TypographyContent from "./TypographyContent";

function Typography() {
  const [activeTab, setActiveTab] = useState("desktop");
  const [tabHasBeenOpened, setTabHasBeenOpened] = useState(false);

  useEffect(() => {
    setTabHasBeenOpened(true);

    const timer = setTimeout(() => {
      setTabHasBeenOpened(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [activeTab]);

  return (
    <section className="typography section-padding" id="typography">
      <h2 className="typography__title font-h2">Типографика</h2>
      <div className="typography__text">
        <p>
          Используется шрифт Graphik. На телефонах стили типографики
          <br />
          переопределяются
        </p>
      </div>
      <ul className="typography__tabs">
        <li
          className={`typography__tab ${
            activeTab === "desktop" ? "active" : ""
          }`}
        >
          <button
            onClick={() => {
              setActiveTab("desktop");
              setTabHasBeenOpened(false);
            }}
          >
            Десктоп
          </button>
        </li>
        <li
          className={`typography__tab ${
            activeTab === "mobile" ? "active" : ""
          }`}
        >
          <button
            onClick={() => {
              setActiveTab("mobile");
              setTabHasBeenOpened(false);
            }}
          >
            Телефон
          </button>
        </li>
      </ul>
      <TypographyContent tab={activeTab} tabHasBeenOpened={tabHasBeenOpened} />
    </section>
  );
}

export default Typography;

import "./TypographyContent.scss";

import React from "react";
import { typography } from "../../data";

function TypographyContent(props) {
  return (
    <ul
      className={`typography__content typography-list ${
        props.tabHasBeenOpened ? "fade-in-fwd" : ""
      }`}
    >
      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Заголовок H1, {typography[props.tab].h1.fontSize}/
          {typography[props.tab].h1.lineHeight},{" "}
          {typography[props.tab].h1.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].h1.fontSize + "px",
            lineHeight: typography[props.tab].h1.lineHeight + "px",
            fontWeight: typography[props.tab].h1.fontWeight[1],
          }}
        >
          Текст заголовка
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Заголовок H2, {typography[props.tab].h2.fontSize}/
          {typography[props.tab].h2.lineHeight},{" "}
          {typography[props.tab].h2.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].h2.fontSize + "px",
            lineHeight: typography[props.tab].h2.lineHeight + "px",
            fontWeight: typography[props.tab].h2.fontWeight[1],
          }}
        >
          Текст заголовка
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Заголовок H3, {typography[props.tab].h3.fontSize}/
          {typography[props.tab].h3.lineHeight},{" "}
          {typography[props.tab].h3.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].h3.fontSize + "px",
            lineHeight: typography[props.tab].h3.lineHeight + "px",
            fontWeight: typography[props.tab].h3.fontWeight[1],
          }}
        >
          Текст заголовка
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Заголовок H4, {typography[props.tab].h4.fontSize}/
          {typography[props.tab].h4.lineHeight},{" "}
          {typography[props.tab].h4.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].h4.fontSize + "px",
            lineHeight: typography[props.tab].h4.lineHeight + "px",
            fontWeight: typography[props.tab].h4.fontWeight[1],
          }}
        >
          Текст заголовка
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Заголовок P_Lead, {typography[props.tab].lead.fontSize}/
          {typography[props.tab].lead.lineHeight},{" "}
          {typography[props.tab].lead.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].lead.fontSize + "px",
            lineHeight: typography[props.tab].lead.lineHeight + "px",
            fontWeight: typography[props.tab].lead.fontWeight[1],
          }}
        >
          Текст лида
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Крупный текст P_{typography[props.tab].bigger.fontSize},{" "}
          {typography[props.tab].bigger.fontSize}/
          {typography[props.tab].bigger.lineHeight},{" "}
          {typography[props.tab].bigger.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].bigger.fontSize + "px",
            lineHeight: typography[props.tab].bigger.lineHeight + "px",
            fontWeight: typography[props.tab].bigger.fontWeight[1],
          }}
        >
          Крупный текст
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Основной текст P_{typography[props.tab].main.fontSize},{" "}
          {typography[props.tab].main.fontSize}/
          {typography[props.tab].main.lineHeight},{" "}
          {typography[props.tab].main.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].main.fontSize + "px",
            lineHeight: typography[props.tab].main.lineHeight + "px",
            fontWeight: typography[props.tab].main.fontWeight[1],
          }}
        >
          Основной текст
        </span>
      </li>

      <li className="typography-list__item">
        <span className="typography-list__name font-smaller">
          Впомогательный текст P_{typography[props.tab].smaller.fontSize},{" "}
          {typography[props.tab].smaller.fontSize}/
          {typography[props.tab].smaller.lineHeight},{" "}
          {typography[props.tab].smaller.fontWeight[0]}
        </span>
        <span
          className="typography-list__value"
          style={{
            fontSize: typography[props.tab].smaller.fontSize + "px",
            lineHeight: typography[props.tab].smaller.lineHeight + "px",
            fontWeight: typography[props.tab].smaller.fontWeight[1],
          }}
        >
          Вспомогательный текст
        </span>
      </li>
    </ul>
  );
}

export default TypographyContent;

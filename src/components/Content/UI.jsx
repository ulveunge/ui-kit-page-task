import "./UI.scss";

import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import EmailInput from "../UI/EmailInput";
import Radio from "../UI/Radio";
import React from "react";
import Select from "../UI/Select";

function UI() {
  return (
    <section className="ui section-padding" id="ui">
      <h2 className="ui__title font-h2">UI</h2>
      <div className="ui__section ui__text-input text-input">
        <h3 className="text-input__title font-h3">Текстовое поле</h3>
        <div className="text-input__wrapper">
          <EmailInput
            className="text-input__input interactive"
            state="interactive"
          />
          <EmailInput className="text-input__input hover" state="Ховер" />
          <EmailInput className="text-input__input focus" state="Ввод" />
          <EmailInput className="text-input__input error" state="Ошибка" />
        </div>
      </div>
      <div className="ui__section ui__dropdown-select dropdown-select">
        <h3 className="dropdown-select__title font-h3">Выпадающее меню</h3>
        <div className="dropdown-select__text content-text">
          <p>Компонент состоит из текстового поля и выпадающей подсказки</p>
        </div>
        <div className="dropdown-select__wrapper">
          <Select
            className="dropdown__select"
            state="interactive"
            options={["Первый стул", "Второй стул", "Теорема Эскобара"]}
          />
          <Select
            className="dropdown__select"
            state="hover"
            options={["Первый стул", "Второй стул", "Теорема Эскобара"]}
          />
          <Select
            className="dropdown__select"
            state="focus"
            options={["Первый стул", "Второй стул", "Теорема Эскобара"]}
          />
        </div>
      </div>
      <div className="ui__section ui__button-section button-section">
        <h3 className="button-section__title font-h3">Кнопка</h3>
        <div className="button-section__wrapper">
          <Button
            className="button-section__btn interactive"
            text="Отправить"
            state="interactive"
          />
          <Button
            className="button-section__btn hover"
            text="Отправить"
            state="Ховер"
          />
          <Button
            className="button-section__btn active"
            text="Отправить"
            state="Нажатие"
          />
          <Button
            className="button-section-btn disabled"
            text="Отправить"
            disabled={true}
            state="Неактивна"
          />
        </div>
      </div>
      <div className="ui__section ui__checkbox-radiobutton-section checkbox-radiobutton-section">
        <h3 className="checkbox-radiobutton-section__title font-h3">
          Чекбокс, радиобаттон
        </h3>
        <div className="checkbox-radiobutton-section__wrapper">
          <div className="checkbox-radiobutton-section__checkbox-wrapper">
            <Checkbox label="Выбери меня" disabled={true} />
            <Checkbox label="Выбери меня" />
            <Checkbox label="Птица счастья завтрашнего дня" checked={true} />
          </div>
          <div className="checkbox-radiobutton-section__radiobutton-wrapper">
            <Radio
              label="Пластмассовый мир победил"
              name="radio"
              disabled={true}
            />
            <Radio label="Макет оказался сильней" name="radio" />
            <Radio label="Последний кораблик остыл" name="radio" />
          </div>
        </div>
      </div>
      <div className="ui__accordion-section accordion-section">
        <h3 className="accordion-section__title font-h3">Аккордеон</h3>
        <div className="accordion-section__wrapper">
          <Accordion state="disabled" />
          <Accordion state="interactive" />
          <Accordion state="open" />
        </div>
      </div>
    </section>
  );
}

export default UI;

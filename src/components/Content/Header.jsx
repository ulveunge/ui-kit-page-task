import "./Header.scss";

import React from "react";

function Header() {
  return (
    <header className="header section-padding" id="home">
      <h1 className="header__title font-h1">Тестовое задание</h1>
      <div className="header__text content-text">
        <p className="header__lead-text font-lead">Уровень: junior</p>
        <p>
          Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную
          страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее.
          В менюхе под иконкой бургером мы хотели бы также видеть твои данные.
          Ну что, поехали?
        </p>
      </div>
    </header>
  );
}

export default Header;

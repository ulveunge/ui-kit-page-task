import "./Grid.scss";

import React from "react";
import desktopImg from "../../assets/pic_desctop.png";
import mobileImg from "../../assets/pic_mob.png";
import tabletImg from "../../assets/pic_tab.png";

function Grid() {
  return (
    <section className="grid section-padding" id="grid">
      <h2 className="grid__title font-h2">Сетка</h2>
      <div className="grid__text content-text">
        <p>
          Задание предполагает адаптивную вёрстку. Используется 3 состояния
          в зависимости от устройства. Сетка «резиновая» — переменной ширины.
        </p>
      </div>
      <ul className="grid__grid-list grid-list">
        <li className="grid-list__item">
          <h3 className="grid-list__title font-h3">Десктоп (1200+)</h3>
          <ul className="grid-list__info-list">
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Контент</span>
              <span className="grid-list__info-value font-lead">1072–1312</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Колонок</span>
              <span className="grid-list__info-value font-lead">12</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Ширина колонки
              </span>
              <span className="grid-list__info-value font-lead">60-80</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Межколонник
              </span>
              <span className="grid-list__info-value font-lead">32</span>
            </li>
          </ul>
          <div className="grid__image">
            <img
              src={desktopImg}
              width="904"
              height="480"
              alt="desktop grid"
            ></img>
          </div>
        </li>
        <li className="grid-list__item">
          <h3 className="grid-list__title font-h3">Планшет (736+)</h3>
          <ul className="grid-list__info-list">
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Контент</span>
              <span className="grid-list__info-value font-lead">672–928</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Колонок</span>
              <span className="grid-list__info-value font-lead">8</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Ширина колонки
              </span>
              <span className="grid-list__info-value font-lead">56-88</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Межколонник
              </span>
              <span className="grid-list__info-value font-lead">32</span>
            </li>
          </ul>
          <div className="grid__image">
            <img
              src={tabletImg}
              width="904"
              height="480"
              alt="tablet grid"
            ></img>
          </div>
        </li>
        <li className="grid-list__item">
          <h3 className="grid-list__title font-h3">Телефон (320+)</h3>
          <ul className="grid-list__info-list">
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Контент</span>
              <span className="grid-list__info-value font-lead">296–424</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">Колонок</span>
              <span className="grid-list__info-value font-lead">4</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Ширина колонки
              </span>
              <span className="grid-list__info-value font-lead">56-88</span>
            </li>
            <li className="grid-list__info-item">
              <span className="grid-list__info-name font-smaller">
                Межколонник
              </span>
              <span className="grid-list__info-value font-lead">24</span>
            </li>
          </ul>
          <div className="grid__image">
            <img
              src={mobileImg}
              width="904"
              height="480"
              alt="mobile grid"
            ></img>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Grid;

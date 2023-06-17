import "./Topbar.scss";

import React, { useState } from "react";

import Container from "./Container";
import Logo from "../UI/Logo";
import ReactDOM from "react-dom";
import { TfiClose } from "react-icons/tfi";
import menuBg from "../../assets/bg.jpg";
import menuIcon from "../../assets/ico_menu.svg";
import socialLinkIcon from "../../assets/social_link_icon.png";

const MenuContainer = (props) => {
  const bgStyles = {
    background: `url(${menuBg}) no-repeat center`,
    backgroundSize: "cover",
  };

  const backdrop = <div className="backdrop"></div>;

  const menuContainerMarkup = (
    <div
      className={`menu__container slide-in-right ${props.toggleMenuAnimation}`}
      style={bgStyles}
    >
      <div className="menu__overlay"></div>
      <div className="menu__content">
        <div className="menu__row menu__row--1">
          <Logo />
          <span className="font-smaller">Задание выполнил</span>
        </div>
        <div className="menu__row menu__row--2">
          <h2 className="menu__name font-h2">
            Исаев
            <br />
            Эмин Ахметович
          </h2>
          <div className="menu__description">
            <p>
              Frontend-разработчик. Занимаюсь созданием интерактивных
              пользовательских интерфейсов.
            </p>
          </div>
          <a className="menu__phone-number font-bigger" href="tel:+79133399653">
            +7 (913) 339 96 53
          </a>
          <a className="menu__social-link social-link" href="#0">
            <span className="social-link__icon">
              <img
                src={socialLinkIcon}
                width="14"
                height="14"
                alt="social link icon"
              ></img>
            </span>
            <span>Ссылка на соцсеть/мессенджер</span>
          </a>
        </div>
      </div>
      <button className="menu__close-btn" onClick={props.onClose}>
        <TfiClose color="#fff" size="24" />
      </button>
    </div>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(backdrop, document.getElementById("root"))}
      {ReactDOM.createPortal(
        menuContainerMarkup,
        document.getElementById("root")
      )}
    </React.Fragment>
  );
};

function Topbar() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [toggleMenuAnimation, setToggleMenuAnimation] = useState("");

  const openMenuHandler = () => {
    setMenuIsOpened(true);
    setToggleMenuAnimation("");
  };

  const closeMenuHandler = async (ms) => {
    setToggleMenuAnimation("reverse");

    await new Promise((r) => setTimeout(r, ms));

    setMenuIsOpened(false);
  };

  return (
    <React.Fragment>
      <nav className="nav">
        <Container>
          <div className="nav__body">
            <div className="nav__info">
              <Logo />
              <div className="nav__fullname fullname font-smaller">
                <span className="fullname__surname">Исаев</span>
                <span>Эмин Ахметович</span>
              </div>
            </div>
            <button className="nav__menu menu" onClick={openMenuHandler}>
              <img src={menuIcon} alt="menu" width="32" height="10"></img>
            </button>
          </div>
        </Container>
      </nav>
      {menuIsOpened && (
        <MenuContainer
          onClose={() => {
            closeMenuHandler(450);
          }}
          toggleMenuAnimation={toggleMenuAnimation}
        />
      )}
    </React.Fragment>
  );
}

export default Topbar;

import "./SideNav.scss";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

import ScrollIntoView from "react-scroll-into-view";

function SideNav() {
  const [currentlySelected, setCurrentlySelected] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const ref = useRef();

  const toggleMobileNavHandler = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.classList.add("selected");

    return () => {};
  }, [currentlySelected]);

  const anchorLinkHandler = (e) => {
    e.preventDefault();

    ref.current?.classList.remove("selected");
    ref.current = e.target;

    setCurrentlySelected(e.target.getAttribute("href"));
  };

  return (
    <nav className="side-nav">
      <button
        className={`side-nav__mobile-btn ${isMobileNavOpen ? "open" : ""}`}
        onClick={toggleMobileNavHandler}
      >
        Навигация{" "}
        {isMobileNavOpen ? (
          <MdNavigateBefore size="15" />
        ) : (
          <MdNavigateNext size="15" />
        )}
      </button>
      <ul className="side-nav__list">
        <li className="side-nav__item font-smaller">
          <ScrollIntoView selector="#home">
            <a
              className="side-nav__link"
              href="#home"
              onClick={anchorLinkHandler}
            >
              Напутственное слово
            </a>
          </ScrollIntoView>
        </li>
        <li className="side-nav__item font-smaller">
          <ScrollIntoView selector="#grid">
            <a
              className="side-nav__link"
              href="#grid"
              onClick={anchorLinkHandler}
            >
              Сетка
            </a>
          </ScrollIntoView>
        </li>
        <li className="side-nav__item font-smaller">
          <ScrollIntoView selector="#typography">
            <a
              className="side-nav__link"
              href="#typography"
              onClick={anchorLinkHandler}
            >
              Типографика
            </a>
          </ScrollIntoView>
        </li>
        <li className="side-nav__item font-smaller">
          <ScrollIntoView selector="#ui">
            <a
              className="side-nav__link"
              href="#ui"
              onClick={anchorLinkHandler}
            >
              UI
            </a>
          </ScrollIntoView>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;

import { NavLink } from "react-router-dom";
import ukraine from "../../helpers/ukraine.svg";
import logIn from "../../helpers/logIn.svg";
import css from "./Header.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.container_logo}>
          <NavLink to="/" className={css.logo}>
            <span>
              <img src={ukraine} alt="" width="28" height="28" />
            </span>
            LearnLingo
          </NavLink>
          <button
            type="button"
            className={css.button_burger}
            onClick={onHandleOpenMenu}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <nav>
          <div className={css.containerLinks}>
            <NavLink to="/" className={css.linkNav}>
              Home
            </NavLink>
            <NavLink to="/teachers" className={css.linkNav}>
              Teachers
            </NavLink>
          </div>
        </nav>
        <div className={css.containerButtons}>
          <button type="button" className={css.buttonLog}>
            <span>
              <img src={logIn} alt="login" />
            </span>
            Log in
          </button>
          <button type="button" className={css.buttonReg}>
            Registration
          </button>
        </div>
      </header>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";
import logIn from "../../helpers/logIn.svg";

import { IoCloseOutline } from "react-icons/io5";

const MobileMenu = ({ setIsOpen }) => {
  const onHandleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/" className={css.linkNav}>
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/teachers" className={css.linkNav}>
              Teachers
            </NavLink>
          </li>
          <li className={css.item}>
            <button type="button" className={css.buttonLog}>
              <span>
                <img src={logIn} alt="" />
              </span>
              Log in
            </button>
          </li>
          <li className={css.item}>
            <button type="button" className={css.buttonReg}>
              Registration
            </button>
          </li>
        </ul>
        <button
          type="button"
          className={css.buttonClose}
          onClick={onHandleCloseMenu}
        >
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

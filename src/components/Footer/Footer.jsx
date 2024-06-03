import css from './Footer.module.css';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className={css.containerSocial}>
      <h3 className={css.titleFollow}>Follow Us:</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <FaInstagram />
          </a>
        </li>
        <li className={css.item}>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <FaFacebook />
          </a>
        </li>
        <li className={css.item}>
          <a
            href="http://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

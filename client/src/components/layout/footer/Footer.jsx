import { Link } from "react-router-dom";

import { HOME_ROUTE } from "../../../utils/consts";

import logo from "../../../assets/images/logo/logo.svg";
import instagram from "../../../assets/images/social/instagram.svg";
import facebook from "../../../assets/images/social/facebook.svg";
import youtude from "../../../assets/images/social/youtude.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top">
            <Link className="logo" to={HOME_ROUTE}>
              <img className="logo__img" src={logo} alt="Логотип компании" />
            </Link>

            <div className="social">
              <p className="social-text">Мы в социальных сетях:</p>

              <ul className="social-list">
                <li className="social-item">
                  <Link className="social-item__link" to={HOME_ROUTE}>
                    <img src={instagram} alt="Ссылка на инстаграм" />
                  </Link>
                </li>
                <li className="social-item">
                  <Link className="social-item__link" to={HOME_ROUTE}>
                    <img src={facebook} alt="Ссылка на фейсбук" />
                  </Link>
                </li>
                <li className="social-item">
                  <Link className="social-item__link" to={HOME_ROUTE}>
                    <img src={youtude} alt="Ссылка на ютуб" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="communications">
              <a className="communications-tel" href="tel:+375441478965">
                +375 (44) 14-78-965
              </a>
              <a className="communications-tel" href="tel:+375291478978">
                +375 (29) 14-78-978
              </a>
            </div>

            <a className="email" href="mailto:electrotovarBy@gmail.com">
              electrotovarBy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

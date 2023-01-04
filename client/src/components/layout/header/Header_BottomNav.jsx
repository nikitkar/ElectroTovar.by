import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Context } from "../../../index";

import catalogIcon from "../../../assets/images/icon/catalogIcon.svg";
import search from "../../../assets/images/icon/search.svg";

const HeaderBottomNav = observer(() => {
  const { isActiveHeader } = useContext(Context);

  return (
    <nav className="nav">
      <div className="nav-left">
        <button
          className="catalog  btn-icon"
          type="button"
          onClick={() => isActiveHeader.setActiveHeader(true)}>
          <span className="catalog-icon  btn-icon_icon">
            <img
              className="catalog-icon_img  btn-icon_icon-img"
              src={catalogIcon}
              alt="Каталог"
            />
          </span>
          <span className="catalog-text  btn-icon-text">Каталог</span>
        </button>

        <button className="search">
          <span className="search-icon">
            <img className="search-icon_img" src={search} alt="Поиск" />
          </span>

          <div className="search-block">
            <h2>Поиск по сайту</h2>
          </div>
        </button>
      </div>

      <ul className="nav-menu  menu">
        <li className="nav-menu__item  menu-item">
          <Link className="nav-menu__item-link menu-item__link" to="/">
            Бренды
          </Link>
        </li>
        <li className="nav-menu__item  menu-item">
          <Link className="nav-menu__item-link menu-item__link" to="/">
            Помощь
          </Link>
        </li>
        <li className="nav-menu__item  menu-item">
          <Link className="nav-menu__item-link menu-item__link" to="/">
            О компании
          </Link>
        </li>
        <li className="nav-menu__item  menu-item">
          <Link className="nav-menu__item-link menu-item__link" to="/">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default HeaderBottomNav;

import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  CART_ROUTER,
} from "../../../utils/consts";

import HeaderBottomNav from "./Header_BottomNav";
import HeaderCatalogShow from "./headerCatalog/Header_CatalogShow";

import logoIcon from "../../../assets/images/logo/logo.svg";
import userAvatar from "../../../assets/images/icon/userAvatar.svg";
import basketIcon from "../../../assets/images/icon/basket.svg";

const Header = observer(() => {
  const { user, basket } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    basket.setQuantityProducts();
  }, [basket]);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setRole("USER");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-top">
            <Link className="logo" to={HOME_ROUTE}>
              <img
                className="logo__img"
                src={logoIcon}
                alt="Логотип компании"
              />
            </Link>

            <div className="header-top_right">
              <div className="communications">
                <a className="communications-tel" href="tel:+375441478965">
                  +375 (44) 14-78-965
                </a>
                <a className="communications-tel" href="tel:+375291478978">
                  +375 (29) 14-78-978
                </a>
              </div>

              {user.role === "ADMIN" ? (
                <div className="admin">
                  <button
                    className="admin-link"
                    type="button"
                    onClick={() => navigate(ADMIN_ROUTE)}>
                    Админ панель
                  </button>
                </div>
              ) : null}

              <button
                className="profile"
                onClick={() =>
                  user.isAuth ? logOut() : navigate(LOGIN_ROUTE)
                }>
                <span className="profile-text">
                  {user.isAuth ? "выйти" : "войти"}
                </span>
                <span className="profile-icon">
                  <img
                    className="profile-icon_img"
                    src={userAvatar}
                    alt="Аккаунт"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="header-bottom">
            <HeaderBottomNav />

            <div className="header-nav_bar">
              <div
                className="header-nav_bar-item  basketIcon"
                onClick={() => navigate(CART_ROUTER)}>
                <img
                  className="basketIcon-img"
                  src={basketIcon}
                  alt="Корзина"
                />
                {basket.quantityProducts === 0 ? null : (
                  <span className="header-nav_bar-item__count">
                    {basket.quantityProducts}
                  </span>
                )}
              </div>
            </div>
          </div>

          <HeaderCatalogShow />
        </div>
      </div>
    </header>
  );
});

export default Header;

import { Link } from "react-router-dom";

import { REGISTRATION_ROUTE } from "../../../../utils/consts";

const Auth = () => {
  return (
    <div className="auth-modal">
      <div className="auth-modal__wrapper">
        <span className="auth-modal__close"></span>

        <h4 className="auth-modal__title">Вход в личный кабинет</h4>
        <div className="auth-modal__form">
          <input
            className="auth-modal__input  auth-modal__input-text"
            type="text"
            placeholder="Ваша почта"
          />
          <input
            className="auth-modal__input  auth-modal__input-pass"
            type="password"
            placeholder="Пароль"
          />
        </div>

        <div className="auth-modal__bottom">
          <button className="auth-modal__button  btn-modal" type="button">
            Войти
          </button>

          <Link className="auth-modal__auth" to={REGISTRATION_ROUTE}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;

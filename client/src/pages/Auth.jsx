import { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { observer } from "mobx-react-lite";

import { REGISTRATION_ROUTE, LOGIN_ROUTE, HOME_ROUTE } from "../utils/consts";
import { login, registration } from "../http/UserAPI";
import { Context } from "../index";
import InputPass from "../components/input/InputPass";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === REGISTRATION_ROUTE;

  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [typeInputLogin, setTypeInputLogin] = useState("password");
  const [typeInputRerig, setTypeInputRerig] = useState("password");
  const [typeInputRerigRepeat, setTypeInputRepeat] = useState("password");

  const [iconInputLogin, setIconInputLogin] = useState("auth-modal__input-eye");
  const [iconInputRerig, setIconInputRerig] = useState("auth-modal__input-eye");

  const togglePassInput = (e) => {
    const placeholderInput = e.target.offsetParent.childNodes[0].placeholder;

    if (isLogin) {
      if (placeholderInput === "Пароль") {
        setTypeInputRerig(typeInputRerig === "password" ? "text" : "password");
        setIconInputRerig(
          typeInputRerig === "password"
            ? "auth-modal__input-eye  auth-modal__input-see"
            : "auth-modal__input-eye"
        );
      } else {
        setTypeInputRepeat(
          typeInputRerigRepeat === "password" ? "text" : "password"
        );
      }
    } else {
      setTypeInputLogin(typeInputLogin === "password" ? "text" : "password");
      setIconInputLogin(
        typeInputLogin === "password"
          ? "auth-modal__input-eye  auth-modal__input-see"
          : "auth-modal__input-eye"
      );
    }
  };

  const check = async () => {
    try {
      let data;

      if (isLogin) {
        data = await registration(loginInput, passwordInput);
      } else {
        data = await login(loginInput, passwordInput);
      }

      user.setUser(data);
      user.setIsAuth(true);
      user.setRole(data.role);

      navigate(HOME_ROUTE);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal__wrapper">
        {isLogin ? (
          <h4 className="auth-modal__title">Регистрация</h4>
        ) : (
          <h4 className="auth-modal__title">Вход в личный кабинет</h4>
        )}

        <div className="auth-modal__form">
          {isLogin ? (
            <>
              <input
                className="auth-modal__input  auth-modal__input-text"
                type="text"
                placeholder="Ваша почта"
                maxLength={35}
                value={loginInput}
                onChange={(e) => setLoginInput()}
              />
              <InputPass
                type={typeInputRerig}
                placeholder="Пароль"
                Length={20}
                onClick={togglePassInput}
                class={iconInputRerig}
                value={passwordInput}
                onChenge={(e) => setPasswordInput(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                className="auth-modal__input  auth-modal__input-text"
                type="text"
                placeholder="Ваша почта"
                maxLength={35}
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
              />
              <InputPass
                type={typeInputLogin}
                placeholder="Пароль"
                Length={20}
                onClick={togglePassInput}
                class={iconInputLogin}
                value={passwordInput}
                onChenge={(e) => setPasswordInput(e.target.value)}
              />
            </>
          )}
        </div>

        <div className="auth-modal__bottom">
          {isLogin ? (
            <>
              <button
                className="auth-modal__button  btn-modal"
                type="button"
                onClick={check}>
                Зарегистрироваться
              </button>

              <Link className="auth-modal__auth" to={LOGIN_ROUTE}>
                Войти
              </Link>
            </>
          ) : (
            <>
              <button
                className="auth-modal__button  btn-modal"
                type="button"
                onClick={check}>
                Войти
              </button>

              <Link className="auth-modal__auth" to={REGISTRATION_ROUTE}>
                Зарегистрироваться
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Auth;

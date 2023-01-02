import { useNavigate } from "react-router-dom";

import basket from "../../../assets/images/icon/basket.svg";

import { DEVICE_ROUTE } from "../../../utils/consts";

const CardProduct = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hits-item__img-block"
        onClick={() => navigate(DEVICE_ROUTE + "/" + props.id)}>
        <img
          className="hits-item__img-block_img"
          src={process.env.REACT_APP_API_URL + props.path_img}
          alt="Изображение товара"
        />
      </div>
      <div className="hits-item__content">
        <h3
          className="hits-item__title"
          onClick={() => navigate(DEVICE_ROUTE + "/" + props.id)}>
          {props.title}
        </h3>

        <div className="hits-item__footer">
          <div className="hits-item__cost">
            <p className="hits-item__price">{props.price} ₽</p>
            <p className="hits-item__discount">{props.discount} ₽</p>
          </div>

          <button className="hits-item__btn  btn-icon">
            <span className="hits-item__btn-icon  btn-icon_icon">
              <img
                className="hits-item__btn-icon_img  btn-icon_icon-img"
                src={basket}
                alt="Каталог"
              />
            </span>
            <span className="hits-item__btn-text  btn-icon-text">Купить</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;

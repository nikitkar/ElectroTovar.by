import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { Context } from "../../index";
import { CHECKOUT_ROUTER } from "../../utils/consts";

const BasketAside = observer(() => {
  const { basket, listPromotionsUsers } = useContext(Context);

  return (
    <div className="basket-aside">
      <h3 className="basket-aside-title">Ваш заказ</h3>
      <div className="basket-aside-wrap">
        <p className="basket-aside-text">Стоимость товаров</p>
        <span className="basket-aside-price">
          {Number(basket.totalCost).toFixed(2)}
        </span>
      </div>
      <div className="basket-aside-wrap">
        <p className="basket-aside-text">Персональная скидка</p>
        <span className="basket-aside-price">
          {listPromotionsUsers.percentPromotionsUsers}%
        </span>
      </div>

      <div className="basket-aside-total basket-aside-wrap">
        <p className="basket-aside-total__text">Итого</p>
        <span className="basket-aside-total__price">
          {Number(
            basket.totalCost -
              basket.totalCost *
                (listPromotionsUsers.percentPromotionsUsers / 100)
          ).toFixed(2)}
        </span>
      </div>

      <Link className="basket-aside-button btn-text" to={CHECKOUT_ROUTER}>
        Перейти к оформлению
      </Link>
    </div>
  );
});

export default BasketAside;

import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

const BasketAside = observer((props) => {
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

      <button className="basket-aside-button btn-text">
        Перейти к оформлению
      </button>
    </div>
  );
});

export default BasketAside;

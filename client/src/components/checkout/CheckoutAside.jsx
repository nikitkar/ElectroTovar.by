import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

const CheckoutAside = observer((props) => {
  const { basket, productsAll, listPromotionsUsers } = useContext(Context);

  useEffect(() => {
    basket.setTotalCost(0);

    basket.listBasket.map((basketItem, indexBasket) =>
      productsAll.allProducts.map((product, indexProduct) =>
        Number(basketItem.id) === product.idProduct
          ? basket.setTotalCost(
              basket.totalCost + basketItem.count * product.priceProduct
            )
          : null
      )
    );
  }, [basket, productsAll.allProducts]);

  return (
    <div className="checkout-aside">
      <h4 className="checkout-aside-title">Ваш заказ</h4>

      <div className="checkout-aside-list">
        {basket.listBasket.map((basketItem, indexBasket) =>
          productsAll.allProducts.map((product, indexProduct) =>
            Number(basketItem.id) === product.idProduct ? (
              <div className="checkout-aside-item" key={indexBasket}>
                <img
                  className="checkout-aside-item__img"
                  width="80"
                  height="80"
                  src={process.env.REACT_APP_API_URL + "/" + product.imgProduct}
                  alt={product.nameProduct}
                />
                <h5 className="checkout-aside-item__title">
                  {product.nameProduct}
                </h5>
                <p className="checkout-aside-item__price">
                  {product.priceProduct} <br />{" "}
                  <span>x {basketItem.count}шт.</span>
                </p>
              </div>
            ) : null
          )
        )}
      </div>

      <div className="checkout-order">
        <div className="checkout-order-item">
          <p className="checkout-order__title">Стоимость товаров</p>
          <p className="checkout-order__price">
            {Number(basket.totalCost).toFixed(2)}
          </p>
        </div>
        <div className="checkout-order-item">
          <p className="checkout-order__title">
            Стоимость товаров с учетом скидки
          </p>
          <p className="checkout-order-price">
            {listPromotionsUsers.percentPromotionsUsers}%
          </p>
        </div>
        <div className="checkout-order-item">
          <p className="checkout-order__title">Итого к оплате</p>
          <p className="checkout-order__price">
            {Number(
              basket.totalCost -
                basket.totalCost *
                  (listPromotionsUsers.percentPromotionsUsers / 100)
            ).toFixed(2)}
          </p>
        </div>
        <button
          className="checkout-order-button btn-text"
          onClick={() => props.click()}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
});

export default CheckoutAside;

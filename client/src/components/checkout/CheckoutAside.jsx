const CheckoutAside = () => {
  return (
    <div className="checkout-aside">
      <h4 className="checkout-aside-title">Ваш заказ</h4>

      <div className="checkout-aside-list">
        <div className="checkout-aside-item">
          <img
            className="checkout-aside-item__img"
            width="80"
            height="80"
            src=""
            alt=""
          />
          <h5 className="checkout-aside-item__title">
            Смартфон Xiaomi POCO M5 6GB/128GB (черный) EU
          </h5>
          <p className="checkout-aside-item__price">
            599.00 <br /> <span>x 1шт.</span>
          </p>
        </div>
      </div>

      <div className="checkout-order">
        <div className="checkout-order-item">
          <p className="checkout-order__title">Стоимость товаров</p>
          <p className="checkout-order__price">857.00</p>
        </div>
        <div className="checkout-order-item">
          <p className="checkout-order__title">
            Стоимость товаров с учетом скидки
          </p>
          <p className="checkout-order-price">45%</p>
        </div>
        <div className="checkout-order-item">
          <p className="checkout-order__title">Итого к оплате</p>
          <p className="checkout-order__price">857.00</p>
        </div>
        <button className="checkout-order-button btn-text">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default CheckoutAside;

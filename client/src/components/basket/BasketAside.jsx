const BasketAside = (props) => {
  return (
    <div className="basket-aside">
      <h3 className="basket-aside-title">Ваш заказ</h3>
      <div className="basket-aside-wrap">
        <p className="basket-aside-text">Стоимость товаров</p>
        <span className="basket-aside-price">3 887.00</span>
      </div>
      <div className="basket-aside-wrap">
        <p className="basket-aside-text">Персональная скидка</p>
        <span className="basket-aside-price">4%</span>
      </div>

      <div className="basket-aside-total basket-aside-wrap">
        <p className="basket-aside-total__text">Итого</p>
        <span className="basket-aside-total__price">3887.00</span>
      </div>

      <button className="basket-aside-button btn-text">
        Перейти к оформлению
      </button>
    </div>
  );
};

export default BasketAside;

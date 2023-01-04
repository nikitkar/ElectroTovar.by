import CheckoutAside from "../components/checkout/CheckoutAside";

const Checkout = () => {
  return (
    <section className="checkout">
      <div className="container">
        <div className="checkout-wrapper">
          <h3 className="checkout-title">Оформление заказа</h3>

          <div className="checkout-body">
            <div className="checkout-left">
              <div className="personal-info">
                <h3 className="checkout-heading-title">
                  Введите данные получателя заказа
                </h3>

                <div className="personal-info-wrap">
                  <p className="personal-info-text">Имя*</p>
                  <input
                    className="personal-info-input"
                    type="text"
                    placeholder="Имя"
                    required
                  />
                </div>
              </div>

              <div className="receiving">
                <h3 className="checkout-heading-title">
                  Где хотите получить заказ?
                </h3>

                <div className="receiving-list">
                  <div className="receiving-item">
                    <input
                      className="receiving-item__input"
                      type="radio"
                      id="receiving1"
                    />
                    <label
                      className="receiving-item__label"
                      htmlFor="receiving1">
                      ул. Денисовская, 8 (ТЦ «Корона-Сити», 1 этаж)
                    </label>
                  </div>
                  <div className="receiving-item">
                    <input
                      className="receiving-item__input"
                      type="radio"
                      id="receiving1"
                    />
                    <label
                      className="receiving-item__label"
                      htmlFor="receiving1">
                      ул. Корженевского, 26 (ТЦ "Корона", 1 этаж)
                    </label>
                  </div>
                  <div className="receiving-item">
                    <input
                      className="receiving-item__input"
                      type="radio"
                      id="receiving1"
                    />
                    <label
                      className="receiving-item__label"
                      htmlFor="receiving1">
                      пр. Победителей 65/1 (ТЦ "Замок", 4 этаж)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-right">
              <CheckoutAside />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

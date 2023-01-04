import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import ProductCardBasket from "../components/basket/ProductCardBasket";
import BasketAside from "../components/basket/BasketAside";

const Basket = observer(() => {
  const { products } = useContext(Context);

  return (
    <section className="basket">
      <div className="container">
        <div className="basket-wrapper">
          <h3 className="basket-title">Моя корзина</h3>

          <div className="basket-body">
            <div className="basket-list">
              {products.products.map((product, index) => (
                <ProductCardBasket
                  key={index}
                  title={product.nameProduct}
                  img={product.imgProduct}
                  price={product.priceProduct}
                />
              ))}
            </div>

            <BasketAside />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Basket;

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import { LOGIN_ROUTE } from "../utils/consts";
import ProductCardBasket from "../components/basket/ProductCardBasket";
import BasketAside from "../components/basket/BasketAside";

const Basket = observer(() => {
  const { user, productsAll, basket } = useContext(Context);

  useEffect(() => {
    basket.setTotalCost(0);

    basket.listBasket.map((basketItem, indexBasket) =>
      productsAll.allProducts.map((product, indexProduct) =>
        basketItem.id === product.idProduct
          ? basket.setTotalCost(
              basket.totalCost + basketItem.count * product.priceProduct
            )
          : null
      )
    );
  }, [basket, productsAll.allProducts]);

  return (
    <section className="basket">
      <div className="container">
        <div className="basket-wrapper">
          <h3 className="basket-title">Моя корзина</h3>
          <div className="basket-body">
            {user.isAuth ? (
              basket.quantityProducts === 0 ? (
                <p className="basket-body-message">Ваша корзина пуста</p>
              ) : (
                <>
                  <div className="basket-list">
                    {basket.listBasket.map((basketItem, indexBasket) =>
                      productsAll.allProducts.map((product, indexProduct) =>
                        basketItem.id === product.idProduct ? (
                          <ProductCardBasket
                            key={indexProduct}
                            id={basketItem.id}
                            title={product.nameProduct}
                            img={product.imgProduct}
                            price={product.priceProduct}
                            count={basketItem.count}
                          />
                        ) : null
                      )
                    )}
                  </div>

                  <BasketAside />
                </>
              )
            ) : (
              <>
                <p className="basket-error">
                  Необходимо{" "}
                  <Link to={LOGIN_ROUTE} className="basket-error-link">
                    авторизироваться
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Basket;

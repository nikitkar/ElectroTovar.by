import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import basket from "../assets/images/icon/basket.svg";
import { fetchOneProduct } from "../http/ProductAPI";

const DevicePage = () => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchOneProduct(id).then((data) => setProducts(data));
  }, [id]);

  return (
    <section className="product">
      <div className="container">
        <div className="product-wrapper">
          <h2 className="product-title">{products?.product[0]?.nameProduct}</h2>

          <div className="product-body">
            <div className="product-img-wrap">
              <img
                className="product-img"
                src={
                  process.env.REACT_APP_API_URL +
                  "/" +
                  products?.product[0]?.imgProduct
                }
                alt="Изображение товара"
                width="560"
                height="477"
              />
            </div>

            <div className="product-info">
              <ul className="product-params__list">
                {products?.info.map((description, index) => (
                  <li className="product-params__item" key={index}>
                    <h4 className="product-params__item-title">
                      {description.titleProduct}:
                    </h4>
                    <p className="product-params__item-value">
                      {description.descriptionProduct}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="product-payment">
                <div className="product-payment__coast">
                  <p className="product-payment__price">
                    {products?.product[0]?.priceProduct} ₽
                  </p>
                  <p className="product-payment__status">В наличии</p>
                </div>
                <div className="product-payment__controls">
                  <button className="product-payment__controls-button  btn-icon">
                    <span className="product-payment__controls_btn-icon  btn-icon_icon">
                      <img
                        className="product-payment__controls_btn-icon_img  btn-icon_icon-img"
                        src={basket}
                        alt="В корзину"
                      />
                    </span>
                    <span className="product-payment__controls_btn-text  btn-icon-text">
                      В корзину
                    </span>
                  </button>
                </div>
                <div className="product-payment__bonus">
                  <p className="product-payment__bonus-persent">
                    {products?.product[0]?.priceProduct - 500} ₽ - цена со
                    скидкой
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicePage;

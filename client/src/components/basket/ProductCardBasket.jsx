import { useContext } from "react";
import { Context } from "../../index";

const ProductCardBasket = (props) => {
  const { basket, productsAll } = useContext(Context);

  const addItem = (id) => {
    basket.addItem(id);
    basket.setTotalCost(0);

    basket.listBasket.map((basketItem) =>
      productsAll.allProducts.map((product) =>
        Number(basketItem.id) === product.idProduct
          ? basket.setTotalCost(
              basket.totalCost + basketItem.count * product.priceProduct
            )
          : null
      )
    );
  };

  const deleteItem = (id) => {
    basket.removeItem(id);
    basket.setTotalCost(0);

    basket.listBasket.map((basketItem) =>
      productsAll.allProducts.map((product) =>
        Number(basketItem.id) === product.idProduct
          ? basket.setTotalCost(
              basket.totalCost + basketItem.count * product.priceProduct
            )
          : null
      )
    );
  };

  return (
    <div className="basket-item">
      <div className="basket-item__img-wrap">
        <img
          className="basket-item__img"
          src={process.env.REACT_APP_API_URL + "/" + props.img}
          width="160"
          height="160"
          alt={"Изображение " + props.title}
        />
      </div>
      <div className="basket-item-content">
        <h3 className="basket-item-title">{props.title}</h3>

        <div className="basket-item-button">
          <button
            className="basket-item-button_delete"
            type="button"
            onClick={() => deleteItem(props.id)}>
            -
          </button>
          <button className="basket-item-button_total">{props.count}</button>
          <button
            className="basket-item-button_add"
            type="button"
            onClick={() => addItem(props.id)}>
            +
          </button>
        </div>

        <div className="basket-item-cost">
          <p className="basket-item-price">
            {Number(props.count * props.price).toFixed(2)} ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBasket;

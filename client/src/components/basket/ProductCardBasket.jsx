import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../index";

const ProductCardBasket = (props) => {
  const { basket, productsAll } = useContext(Context);

  const deleteItem = () => {
    basket.removeItem(props.id);

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

        <button
          className="basket-item-button_delete  btn-text"
          type="button"
          onClick={() => deleteItem()}>
          Удалить
        </button>

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

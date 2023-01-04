const ProductCardBasket = (props) => {
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

        <div className="basket-item-cost">
          <p className="basket-item-price">{props.price} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBasket;

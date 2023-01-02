import { Link } from "react-router-dom";

const CardCategory = (props) => {
  return (
    <Link className="popular-category__item-box" to="/">
      <div className="popular-category__item-img__block">
        <img
          src={process.env.REACT_APP_API_URL + props.path_img}
          alt="Изображение категрии"
          className="popular-category__item-img__block_img"
        />
      </div>
      <h3 className="popular-category__item-title">{props.title}</h3>
    </Link>
  );
};

export default CardCategory;

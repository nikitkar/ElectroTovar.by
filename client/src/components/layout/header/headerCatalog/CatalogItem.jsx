import { Link } from "react-router-dom";

const CatalogItem = (props) => {
  return (
    <Link to="/" className="catalog-navigation__item" id={props.id}>
      <div className="catalog-navigation__item-img">
        <img
          width="56"
          height="56"
          src={"/" + props.imgCategory}
          alt={props.nameCategory}
        />
      </div>
      <p className="catalog-navigation__item-name">{props.nameCategory}</p>
    </Link>
  );
};

export default CatalogItem;

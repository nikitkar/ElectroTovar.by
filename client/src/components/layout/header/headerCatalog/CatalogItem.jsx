import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../../../index";
import { CATEGORY_PRODUCTS_ROUTE } from "../../../../utils/consts";

const CatalogItem = (props) => {
  const { isActiveHeader } = useContext(Context);

  return (
    <Link
      to={CATEGORY_PRODUCTS_ROUTE + "/" + props.id}
      className="catalog-navigation__item"
      id={props.id}
      onClick={() => isActiveHeader.setActiveHeader(false)}>
      <div className="catalog-navigation__item-img">
        <img
          width="56"
          height="56"
          src={process.env.REACT_APP_API_URL + "/" + props.imgCategory}
          alt={props.nameCategory}
        />
      </div>
      <p className="catalog-navigation__item-name">{props.nameCategory}</p>
    </Link>
  );
};

export default CatalogItem;

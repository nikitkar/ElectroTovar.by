import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../../../index";
import { fetchProduct } from "../../../../http/ProductAPI";

const ProductItem = observer((props) => {
  const { products } = useContext(Context);

  useEffect(() => {
    fetchProduct().then((data) => products.setProduct(data));
  }, [products]);

  return (
    <div className="catalog-navigation-drop" id={props.id}>
      <ul className="catalog-navigation-drop__list">
        {products.products.map((product, index) =>
          props.id === product.idCategory ? (
            <li key={index} className="catalog-navigation-drop__item">
              <Link className="catalog-navigation-drop__item-name" to="/">
                {product.nameProduct}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
});

export default ProductItem;

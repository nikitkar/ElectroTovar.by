import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../../../index";

import CatalogItem from "./CatalogItem";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { fetchCategory } from "../../../../http/CategoryAPI";

const HeaderCatalogShow = observer(() => {
  const { categories } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => categories.setCategory(data));
  }, [categories]);

  return (
    <div className="catalog">
      <div className="catalog-overlap"></div>
      <div className="catalog-main">
        <div className="container">
          <div className="catalog-navigation">
            <div className="catalog-navigation-list-wrap">
              <ul className="catalog-navigation-list">
                {categories.categories.map((category, index) => (
                  <CatalogItem
                    key={index}
                    id={category.idCategory}
                    nameCategory={category.nameCategory}
                    imgCategory={"/" + category.imgCategory}
                  />
                ))}
              </ul>
            </div>
            <div className="catalog-navigation-drop-wrap">
              {categories.categories.map((category, index) => (
                <ProductItem key={index} id={category.idCategory} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeaderCatalogShow;

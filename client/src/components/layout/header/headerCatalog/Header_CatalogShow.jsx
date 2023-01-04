import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../../../index";
import { fetchCategory } from "../../../../http/CategoryAPI";
import CatalogItem from "./CatalogItem";
import ProductItem from "./ProductItem";

const HeaderCatalogShow = observer(() => {
  const { categories, isActiveHeader } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => categories.setCategory(data));
  }, [categories]);

  return (
    <div className="catalog">
      <div
        className={
          isActiveHeader.activeHeader
            ? "catalog-overlap is_active"
            : "catalog-overlap"
        }
        onClick={() => isActiveHeader.setActiveHeader(false)}></div>
      <div
        className={
          isActiveHeader.activeHeader
            ? "catalog-main is_active"
            : "catalog-main"
        }>
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

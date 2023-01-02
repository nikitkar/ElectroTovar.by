import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";

import { fetchBrand } from "../../http/BrandAPI";
import { Context } from "../../index";

const DropDownMenu = observer(({ title, store }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { categories, brands } = useContext(Context);

  useEffect(() => {
    fetchBrand().then((data) => brands.setBrand(data));
  }, [brands]);

  return (
    <div className="drop-down-wrap">
      <div
        className="drop-down  btn-text"
        onClick={() => setShowMenu(!showMenu)}>
        <p className="drop-down-title">{title}</p>

        <ul
          className={showMenu ? "drop-down-list  is_active" : "drop-down-list"}>
          {store === "categories"
            ? categories.categories.map((category, index) => (
                <li
                  className="drop-down-item"
                  key={index}
                  onClick={() => categories.setSelectedCategories(category)}>
                  <p className="drop-down-item__title">
                    {category.nameCategory}
                  </p>
                </li>
              ))
            : store === "brands"
            ? brands.brands.map((brand, index) => (
                <li
                  className="drop-down-item"
                  key={index}
                  onClick={() => brands.setSelectedBrand(brand)}>
                  <p className="drop-down-item__title">{brand.nameBrand}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
      <p className="drop-donw-selected">
        {/* {store === "categories"
          ? `${categories.selectedCategory}`
          : `${brands.selectedBrand}`} */}
      </p>
    </div>
  );
});

export default DropDownMenu;

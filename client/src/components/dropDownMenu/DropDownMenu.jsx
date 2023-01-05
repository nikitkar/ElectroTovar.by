import { observer } from "mobx-react-lite";
import { useState, useContext } from "react";

import { Context } from "../../index";

const DropDownMenu = observer(({ title, store }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { categories } = useContext(Context);

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

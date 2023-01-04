import { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { Context } from "../index";

import CardProduct from "../components/layout/card/CardProductMain";

const CategoryPage = observer(() => {
  const { id } = useParams();
  const { products, categories, categoriesByProducts } = useContext(Context);

  const [sortedActiveClass, setSortedActiveClass] = useState("popularity");

  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="categories-wrapper">
            <h3 className="categories-title">
              {categories.categories.map((category) =>
                category.idCategory === Number(id)
                  ? category.nameCategory
                  : null
              )}
            </h3>

            <div className="categories-body">
              <div className="sorted-list">
                <div
                  className={
                    sortedActiveClass === "popularity"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => setSortedActiveClass("popularity")}>
                  <p className="sorted-item__title">По популярности</p>
                </div>
                <div
                  className={
                    sortedActiveClass === "novelty"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => setSortedActiveClass("novelty")}>
                  <p className="sorted-item__title">По новизне</p>
                </div>
                <div
                  className={
                    sortedActiveClass === "price"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => setSortedActiveClass("price")}>
                  <p className="sorted-item__title">По цене</p>
                </div>
                <div
                  className={
                    sortedActiveClass === "rating"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => setSortedActiveClass("rating")}>
                  <p className="sorted-item__title">По рейтингу</p>
                </div>
              </div>

              <div className="categories-list">
                {products.products.map((product, index) =>
                  product.idCategory === Number(id) ? (
                    <div className="hits-item" key={index}>
                      <CardProduct
                        path_img={"/" + product.imgProduct}
                        title={product.nameProduct}
                        price={product.priceProduct}
                        id={product.idProduct}
                        discount={product.priceProduct}
                      />
                    </div>
                  ) : null
                )}
              </div>

              <div className="navigation">
                <div className="navigation-item is_active">1</div>
                <div className="navigation-item">2</div>
                <div className="navigation-item">3</div>
                <div className="navigation-item">4</div>
                <div className="navigation-item">5</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default CategoryPage;

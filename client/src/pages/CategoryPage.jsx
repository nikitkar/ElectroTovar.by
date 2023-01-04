import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { Context } from "../index";

import CardProduct from "../components/layout/card/CardProductMain";
import { fetchProduct } from "../http/ProductAPI";

const CategoryPage = observer(() => {
  const { id } = useParams();
  const { categories, categoriesByProducts } = useContext(Context);

  const pageCount = Math.ceil(
    categoriesByProducts.totalCount / categoriesByProducts.limit
  );
  const pages = [];

  useEffect(() => {
    fetchProduct(categoriesByProducts.selectedCategory).then((data) => {
      categoriesByProducts.setTotalCount(data.length);
    });
    fetchProduct(
      categoriesByProducts.selectedCategory,
      categoriesByProducts.page,
      categoriesByProducts.limit
    ).then((data) => {
      categoriesByProducts.setPages(data);
    });
  }, [
    categoriesByProducts.selectedCategory,
    categoriesByProducts.page,
    categoriesByProducts.limit,
    categoriesByProducts,
  ]);

  for (let i = 0; i < pageCount; i++) pages.push(i + 1);

  useEffect(() => {
    categoriesByProducts.setSelectedCategory(id);
  }, [categoriesByProducts, id]);

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
                    categoriesByProducts.filter === "popularity"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => {
                    categoriesByProducts.setFilter("popularity");
                    categoriesByProducts.filterEvent();
                  }}>
                  <p className="sorted-item__title">По популярности</p>
                </div>
                <div
                  className={
                    categoriesByProducts.filter === "novelty"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => {
                    categoriesByProducts.setFilter("novelty");
                    categoriesByProducts.filterEvent();
                  }}>
                  <p className="sorted-item__title">По новизне</p>
                </div>
                <div
                  className={
                    categoriesByProducts.filter === "priceCheap"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => {
                    categoriesByProducts.setFilter("priceCheap");
                    categoriesByProducts.filterEvent();
                  }}>
                  <p className="sorted-item__title">
                    По цене (сначала дешевый)
                  </p>
                </div>
                <div
                  className={
                    categoriesByProducts.filter === "priceExpensive"
                      ? "sorted-item is_active"
                      : "sorted-item"
                  }
                  onClick={() => {
                    categoriesByProducts.setFilter("priceExpensive");
                    categoriesByProducts.filterEvent();
                  }}>
                  <p className="sorted-item__title">
                    По цене (сначала дорогой)
                  </p>
                </div>
              </div>

              <div className="categories-list">
                {categoriesByProducts.pages.map((product, index) =>
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
                {pages.map((page, index) => (
                  <div
                    className={
                      categoriesByProducts.page === page
                        ? "navigation-item is_active"
                        : "navigation-item"
                    }
                    key={index}
                    onClick={() => categoriesByProducts.setPage(page)}>
                    {page}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default CategoryPage;

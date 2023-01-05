import { useState } from "react";
import CreateCategory from "../components/modals/CreateCategory";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  return (
    <section className="admins">
      <div className="container">
        <div className="admins-wrapper">
          <div className="admins-add">
            <button
              className="add-products__product  btn-text"
              onClick={() => setProductVisible(true)}>
              Добавить товар
            </button>
            <button
              className="add-products__category  btn-text"
              onClick={() => setCategoryVisible(true)}>
              Добавить категорию
            </button>
          </div>

          <CreateCategory
            stateModal={categoryVisible}
            onClick={() => setCategoryVisible(false)}
          />
          <CreateProduct
            stateModal={productVisible}
            onClick={() => setProductVisible(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Admin;

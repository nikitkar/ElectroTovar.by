import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";

import TablesPage from "./TablesPage";

import { getAll } from "../http/UserAPI";

const Admin = observer(() => {
  const { user, dataTables } = useContext(Context);
  const [value, setValue] = useState("");

  useEffect(() => {
    getAll().then((data) => user.setAllUser(data));
  }, [user]);

  const setValueChange = (nametables) => {
    setValue(nametables);

    dataTables.setSelectedInputs([]);
  };

  return (
    <section className="admins">
      <div className="container">
        <div className="admins-wrapper">
          <div className="admins-add">
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("CLIENT_DATABASE")}>
              Клиенты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SALE_DATABASE")}>
              Продажи
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SALES_ARCHIVE_DATABASE")}>
              Архив продаж
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PRODUCT_DATABASE")}>
              Продукты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("CATEGORY_DATABASE")}>
              Категории
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("POINTISSUE_DATABASE")}>
              Пункты доставки
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SUPPLIERS_DATABASE")}>
              Поставщики
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("INVOICE_DATABASE")}>
              Накладная
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PRODUCTWAYBILL_DATABASE")}>
              Товарная накладная
            </button>
          </div>

          <div className="admins-body">
            <TablesPage nameTable={value} />
          </div>

          {/* <div className="admins-add">
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
          </div> */}

          {/* <CreateCategory
            stateModal={categoryVisible}
            onClick={() => setCategoryVisible(false)}
          />
          <CreateProduct
            stateModal={productVisible}
            onClick={() => setProductVisible(false)}
          /> */}
        </div>
      </div>
    </section>
  );
});

export default Admin;

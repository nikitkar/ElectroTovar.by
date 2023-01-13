import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";

import TablesPage from "./TablesPage";

import { getAll } from "../http/UserAPI";

const Admin = observer(() => {
  const { user } = useContext(Context);
  const [value, setValue] = useState("");

  useEffect(() => {
    getAll().then((data) => user.setAllUser(data));
  }, [user]);

  return (
    <section className="admins">
      <div className="container">
        <div className="admins-wrapper">
          <div className="admins-add">
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("CLIENT_DATABASE")}>
              Клиенты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("SALE_DATABASE")}>
              Продажи
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("SALES_ARCHIVE_DATABASE")}>
              Архив продаж
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("PRODUCT_DATABASE")}>
              Продукты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("CATEGORY_DATABASE")}>
              Категории
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("POINT_ISSUE_DATABASE")}>
              Пункты доставки
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("SUPPLIERS_DATABASE")}>
              Поставщики
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("INVOICE_DATABASE")}>
              Накладная
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValue("PRODUCT_WAYBILL_DATABASE")}>
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

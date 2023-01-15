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
              onClick={() => setValueChange("CLIENT_NAMECOLUMNE")}>
              Клиенты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("CREDENTIALS_NAMECOLUMNE")}>
              Личнве данные клиентов
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SALE_NAMECOLUMNE")}>
              Продажи
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SALESARCHIVE_NAMECOLUMNE")}>
              Архив продаж
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PRODUCT_NAMECOLUMNE")}>
              Продукты
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PRODUCTINFO_NAMECOLUMNE")}>
                Характеристика продуктов
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("CATEGORY_NAMECOLUMNE")}>
              Категории
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("POINTISSUE_NAMECOLUMNE")}>
              Пункты доставки
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("SUPPLIERS_NAMECOLUMNE")}>
              Поставщики
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("INVOICE_NAMECOLUMNE")}>
              Накладная
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PRODUCTWAYBILL_NAMECOLUMNE")}>
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

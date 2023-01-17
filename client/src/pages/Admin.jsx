import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";

import TablesPage from "./TablesPage";

import { getAll } from "../http/UserAPI";

const Admin = observer(() => {
  const { user, dataTables } = useContext(Context);
  const [value, setValue] = useState("");
  const [nameTable, setNameTable] = useState("");

  useEffect(() => {
    getAll().then((data) => user.setAllUser(data));
  }, [user]);

  const setValueChange = (nametables) => {
    setValue(nametables);
    setNameTable(nametables);

    dataTables.setSelectedInputs([]);
    dataTables.setSelectOption("");
    dataTables.setValueSearchData("");
    dataTables.setSortMethod("ASC");
    dataTables.setSortColumnIndex(0);

    switch (nametables) {
      case "CLIENT_NAMECOLUMNE":
        setNameTable("клиенты");
        break;
      case "CREDENTIALS_NAMECOLUMNE":
        setNameTable("личные данные клиентов");
        break;
      case "SALE_NAMECOLUMNE":
        setNameTable("продажи");
        break;
      case "SALESARCHIVE_NAMECOLUMNE":
        setNameTable("архив продаж");
        break;
      case "PRODUCT_NAMECOLUMNE":
        setNameTable("продукты");
        break;
      case "PRODUCTINFO_NAMECOLUMNE":
        setNameTable("характеристика продуктов");
        break;
      case "CATEGORY_NAMECOLUMNE":
        setNameTable("категории");
        break;
      case "POINTISSUE_NAMECOLUMNE":
        setNameTable("пункты доставки");
        break;
      case "SUPPLIERS_NAMECOLUMNE":
        setNameTable("поставщики");
        break;
      case "INVOICE_NAMECOLUMNE":
        setNameTable("накладная");
        break;
      case "PRODUCTWAYBILL_NAMECOLUMNE":
        setNameTable("товарная-накладная");
        break;
      case "Histogram":
        setNameTable("столбчатая диаграмма");
        break;
      case "PieChart":
        setNameTable("круговая диаграмма");
        break;

      default:
        setNameTable("");
        break;
    }
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
              Личные данные клиентов
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

            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("Histogram")}>
              Столбчатая диаграмма
            </button>
            <button
              className="admins-add__button  btn-text"
              onClick={() => setValueChange("PieChart")}>
              Круговая диаграмма
            </button>
          </div>

          <p>
            {value === "Histogram" || value === "PieChart"
              ? "Вы находитесь на диаграмме - " + nameTable
              : value === ""
              ? null
              : "Вы находитесь на таблице - " + nameTable}
          </p>

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

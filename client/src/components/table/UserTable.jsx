import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import { CLIENT_NAMECOLUMNR } from "../../utils/consts_nameColumnR";
import { CLIENT_NAMECOLUMNE } from "../../utils/consts_nameColumnE";

import {
  getClient_discount_search,
  getDataUser_discount,
} from "../../http/GetDataTableAPI";

import BodyTable from "./bodyUserTable/TBodyUserTable";

const UserTable = observer(() => {
  const { dataTables } = useContext(Context);

  const refresh = () => {
    //если строка поиска пуста, то выводим всю таблицу, иначе выводим с поиском и сортировкой
    if (dataTables.valueSearchData === "" || dataTables.selectOption === "") {
      CLIENT_NAMECOLUMNE.map((item, index) =>
        dataTables.sortColumnIndex === index
          ? getDataUser_discount(item, dataTables.sortMethod).then((data) => {
              if (data.err || data.sqlMessage)
                return alert(data.err || data.sqlMessage);
              else dataTables.setDataUser(data);
            })
          : null
      );
    } else {
      CLIENT_NAMECOLUMNE.map((item, index) =>
        dataTables.sortColumnIndex === index
          ? getClient_discount_search(
              dataTables.selectOption,
              dataTables.valueSearchData,
              item,
              dataTables.sortMethod
            ).then((data) => {
              if (data.err || data.sqlMessage)
                return alert(data.err || data.sqlMessage);
              else dataTables.setDataUser(data);
            })
          : null
      );
    }
  };

  const nameSortColumn = (index) => {
    dataTables.setSortMethod(dataTables.sortMethod === "ASC" ? "DESC" : "ASC");
    if (dataTables.sortColumnIndex !== index) dataTables.setSortMethod("ASC");

    dataTables.setSortColumnIndex(index);

    refresh();
  };

  const checkedInputAll = () => {
    if (dataTables.selectedInputs.length === dataTables.dataUser.length)
      return dataTables.dataUser.map((nameColumn, index) =>
        dataTables.deleteSelectedInputs(index + 1)
      );

    if (dataTables.selectedInputs.length === 0)
      return dataTables.dataUser.map((nameColumn, index) =>
        dataTables.setSelectedInputs(index + 1)
      );

    dataTables.dataUser.map((nameColumn, index) =>
      dataTables.deleteSelectedInputs(index + 1)
    );
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <thead className="datagrid-thead">
        <tr className="datagrid-thead-row">
          <th className="datagrid-thead-cell">
            <span
              className="datagrid-thead-input-wrap"
              onClick={() => checkedInputAll()}>
              <input className="datagrid-thead-input" type="checkbox" />

              {dataTables.dataUser.length === 0 ? (
                <svg
                  className={
                    "datagrid-thead-input-icon  datagrid-thead-input-icon_checked"
                  }
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CheckBoxOutlineBlankIcon">
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              ) : dataTables.dataUser.length ===
                dataTables.selectedInputs.length ? (
                <svg
                  className={
                    "datagrid-thead-input-icon  datagrid-thead-input-icon_checked"
                  }
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CheckBoxOutlineBlankIcon">
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              ) : (
                <svg
                  className="datagrid-thead-input-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CheckBoxIcon">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
              )}
              <span className="datagrid-thead-input-root"></span>
            </span>
          </th>
          {CLIENT_NAMECOLUMNR.map((nameColumn, index) => (
            <th className="datagrid-thead-cell" key={index}>
              <span
                className="datagrid-thead-cell-label"
                onClick={() => nameSortColumn(index)}>
                {nameColumn}
                <span
                  className={
                    dataTables.sortColumnIndex === index
                      ? dataTables.sortMethod === "ASC"
                        ? "datagrid-thead-cell_icon  transform"
                        : "datagrid-thead-cell_icon"
                      : "datagrid-thead-cell_icon  transform"
                  }>
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ArrowDownwardIcon">
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                  </svg>
                </span>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <BodyTable />
    </>
  );
});

export default UserTable;

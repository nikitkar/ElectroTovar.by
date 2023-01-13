import { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import { CLIENT_NAMECOLUMN } from "../../utils/consts_nameColumn";

import { getDataUser_discount } from "../../http/GetDataTableAPI";

const UserTable = observer(() => {
  const { dataTables } = useContext(Context);

  const [sortColumnIndex, setSortColumnIndex] = useState(-1);
  const [sortMethod, setSortMethod] = useState("ASC");

  useEffect(() => {
    getDataUser_discount().then((data) => dataTables.setDataUser(data));
  }, [dataTables]);

  const nameSortColumn = (index) => {
      if (sortColumnIndex !== index) setSortMethod("DESC");
      
    setSortColumnIndex(index);
    setSortMethod((prev) => (prev === "ASC" ? "DESC" : "ASC"));
  };

  return (
    <>
      <thead className="datagrid-thead">
        <tr className="datagrid-thead-row">
          {CLIENT_NAMECOLUMN.map((nameColumn, index) => (
            <th
              className="datagrid-thead-cell"
              key={index}
              onClick={() => nameSortColumn(index)}>
              <span className="datagrid-thead-cell-label">
                {nameColumn}
                <span
                  className={
                    sortColumnIndex === index
                      ? sortMethod === "ASC"
                        ? "datagrid-thead-cell_icon"
                        : "datagrid-thead-cell_icon  transform"
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
      <tbody className="datagrid-tbody">
        {dataTables.dataUser.map((client, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            <td className="datagrid-tbody-cell">{client.idClient}</td>
            <td className="datagrid-tbody-cell">{client.nameClient}</td>
            <td className="datagrid-tbody-cell">{client.emailClient}</td>
            <td className="datagrid-tbody-cell">{client.telephoneClient}</td>
            <td className="datagrid-tbody-cell">{client.addressClient}</td>
            <td className="datagrid-tbody-cell">
              {client.percentPromotionsUsers}%
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
});

export default UserTable;

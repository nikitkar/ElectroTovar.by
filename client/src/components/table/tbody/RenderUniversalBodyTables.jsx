import { useContext } from "react";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

const RenderUniversalBodyTables = observer(({ nameTable }) => {
  const { dataTables } = useContext(Context);

  const renderTd = (name, nameColumn) => {
    switch (nameColumn) {
      case "CREDENTIALS_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idCredentials)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idCredentials) ? (
                  <svg
                    className="datagrid-thead-input-icon  datagrid-thead-input-icon_checked"
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
                    data-testid="CheckBoxOutlineBlankIcon">
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                  </svg>
                )}
                <span className="datagrid-thead-input-root"></span>
              </span>
            </td>
            <td className="datagrid-tbody-cell">{name.idCredentials}</td>
            <td className="datagrid-tbody-cell">{name.idClient}</td>
            <td className="datagrid-tbody-cell">{name.loginClient}</td>
            <td className="datagrid-tbody-cell">{name.passwordClient}</td>
            <td className="datagrid-tbody-cell">{name.roleClient}</td>
          </>
        );
      }

      default:
        return null;
    }
  };

  const renderTr = () => {
    switch (nameTable) {
      case "CREDENTIALS_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("CREDENTIALS_NAMECOLUMNE"));

        return dataTables.dataCredentials.map((nameColumn, index) => {
          return (
            <tr className="datagrid-tbody-row" key={index}>
              {renderTd(nameColumn, nameTable)}
            </tr>
          );
        });
      }

      //   case "SALE_NAMECOLUMNE":
      //     return dataTables.dataSale.map((nameColumn, index) => (

      //     ));
      //   case "SALESARCHIVE_NAMECOLUMNE":
      //     return dataTables.dataSalesArchive.map((nameColumn, index) => (

      //     ));
      //   case "PRODUCT_NAMECOLUMNE":
      //     return dataTables.dataProduct.map((nameColumn, index) => (

      //     ));
      //   case "PRODUCTINFO_NAMECOLUMNE":
      //     return dataTables.dataProductInfo.map((nameColumn, index) => (

      //     ));
      //   case "CATEGORY_NAMECOLUMNE":
      //     return dataTables.dataCategory.map((nameColumn, index) => (

      //     ));
      //   case "POINTISSUE_NAMECOLUMNE":
      //     return dataTables.dataPointIssue.map((nameColumn, index) => (

      //     ));
      //   case "SUPPLIERS_NAMECOLUMNE":
      //     return dataTables.dataSuppliers.map((nameColumn, index) => (

      //     ));
      //   case "INVOICE_NAMECOLUMNE":
      //     return dataTables.dataInvoice.map((nameColumn, index) => (

      //     ));
      //   case "PRODUCTWAYBILL_NAMECOLUMNE":
      //     return dataTables.dataProductWaybill.map((nameColumn, index) => (

      //     ));

      default:
        return null;
    }
  };

  return <tbody>{renderTr()}</tbody>;
});

export default RenderUniversalBodyTables;

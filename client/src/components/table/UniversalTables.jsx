import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import RenderUniversalHeadTables from "./thead/RenderUniversalHeadTables";
import RenderUniversalBodyTables from "./tbody/RenderUniversalBodyTables";
import { getDataTable } from "../../http/GetDataTableAPI";
import CheckedAll from "./thead/CheckedAll";

const UniversalTables = observer(({ nameTable }) => {
  const { dataTables } = useContext(Context);

  const name = nameTable.split("_")[0].toLowerCase();

  useEffect(() => {
    switch (nameTable) {
      case "CREDENTIALS_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataCredentials(data);
        });
        break;
      case "SALE_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataSale(data);
        });
        break;
      case "SALESARCHIVE_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataSalesArchive(data);
        });
        break;
      case "PRODUCT_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataProduct(data);
        });
        break;
      case "PRODUCTINFO_NAMECOLUMNE":
        getDataTable("product_info").then((data) => {
            console.log(data);
          dataTables.setDataProductInfo(data);
        });
        break;
      case "CATEGORY_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataCategory(data);
        });
        break;
      case "POINTISSUE_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataPointIssue(data);
        });
        break;
      case "SUPPLIERS_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataSuppliers(data);
        });
        break;
      case "INVOICE_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataInvoice(data);
        });
        break;
      case "PRODUCTWAYBILL_NAMECOLUMNE":
        getDataTable(name).then((data) => {
          dataTables.setDataProductWaybill(data);
        });
        break;

      default:
        break;
    }
  }, [dataTables, name, nameTable]);

  return (
    <>
      <thead className="datagrid-thead">
        <tr className="datagrid-thead-row">
          <th className="datagrid-thead-cell">
            <span
              className="datagrid-thead-input-wrap"
              onClick={() => dataTables.checkedInputAll()}>
              <input className="datagrid-thead-input" type="checkbox" />
              <CheckedAll nameTable={nameTable} />
              <span className="datagrid-thead-input-root"></span>
            </span>
          </th>
          <RenderUniversalHeadTables nameTable={nameTable} />
        </tr>
      </thead>
      <RenderUniversalBodyTables nameTable={nameTable} />
    </>
  );
});

export default UniversalTables;

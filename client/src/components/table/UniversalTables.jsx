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
        return getDataTable(name).then((data) => {
          dataTables.setDataCredentials(data);
        });
      case "SALE_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataSale(data);
        });
      case "SALESARCHIVE_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataSalesArchive(data);
        });
      case "PRODUCT_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataProduct(data);
        });
      case "PRODUCTINFO_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataProductInfo(data);
        });
      case "CATEGORY_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataCategory(data);
        });
      case "POINTISSUE_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataPointIssue(data);
        });
      case "SUPPLIERS_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataSuppliers(data);
        });
      case "INVOICE_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataInvoice(data);
        });
      case "PRODUCTWAYBILL_NAMECOLUMNE":
        return getDataTable(name).then((data) => {
          dataTables.setDataProductWaybill(data);
        });

      default:
        return null;
    }
  });

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

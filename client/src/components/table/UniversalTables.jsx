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
    getDataTable(name).then((data) => {
      dataTables.setDataCredentials(data);
    });
  });

  // dataTables.setDataSale(data)
  // dataTables.setDataSalesArchive(data)
  // dataTables.setDataProduct(data)
  // dataTables.setDataProductInfo(data)
  // dataTables.setDataCategory(data)
  // dataTables.setDataPointIssue(data)
  // dataTables.setDataSuppliers(data)
  // dataTables.setDataInvoice(data)
  // dataTables.setDataProductWaybill(data)

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

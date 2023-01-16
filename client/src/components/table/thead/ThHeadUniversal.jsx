import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

const Th = observer(({ index, name }) => {
  const { dataTables } = useContext(Context);

  return (
    <th className="datagrid-thead-cell" key={index}>
      <span
        className="datagrid-thead-cell-label"
        onClick={() => dataTables.nameSortColumn(index)}>
        {name}
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
  );
});

export default Th;

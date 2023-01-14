import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

const BodyTable = observer(() => {
  const { dataTables } = useContext(Context);

  const [checkedInputClass, setCheckedInputsClass] = useState(0);

  const checkedInputOne = (id) => {
    if (dataTables.selectedInputs.length === 0)
      return dataTables.setSelectedInputs(id);

    const repeatedValue = dataTables.selectedInputs.filter(
      (elem) => elem === id
    );

    if (repeatedValue.length > 0) {
      return dataTables.deleteSelectedInputs(repeatedValue[0]);
    }
    dataTables.setSelectedInputs(id);
  };

  const returnIconInput = (id) => {
    if (dataTables.selectedInputs.length === 0)
      return (
        <svg
          className="datagrid-thead-input-icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckBoxOutlineBlankIcon">
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
        </svg>
      );

    dataTables.selectedInputs.filter((item) => {
      if (item === id) {
        return (
          <svg
            className="datagrid-thead-input-icon  datagrid-thead-input-icon_checked"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckBoxOutlineBlankIcon">
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        );
      }

      return (
        <svg
          className="datagrid-thead-input-icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckBoxOutlineBlankIcon">
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
        </svg>
      );
    });
  };

  return (
    <tbody className="datagrid-tbody">
      {dataTables.dataUser.map((client, index) => (
        <tr className="datagrid-tbody-row" key={index}>
          <td className="datagrid-tbody-cell">
            <span
              className="datagrid-thead-input-wrap"
              onClick={() => checkedInputOne(client.idClient)}>
              <input className="datagrid-thead-input" type="checkbox" />
              {returnIconInput(client.idClient)}
              <span className="datagrid-thead-input-root"></span>
            </span>
          </td>
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
  );
});

export default BodyTable;

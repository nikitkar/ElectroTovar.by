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
      case "SALE_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idSale)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idSale) ? (
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
            <td className="datagrid-tbody-cell">{name.idSale}</td>
            <td className="datagrid-tbody-cell">{name.idClient}</td>
            <td className="datagrid-tbody-cell">{name.idProduct}</td>
            <td className="datagrid-tbody-cell">{name.dataSale}</td>
            <td className="datagrid-tbody-cell">{name.countSale}</td>
            <td className="datagrid-tbody-cell">{name.priceSale}</td>
            <td className="datagrid-tbody-cell">{name.numberSale}</td>
          </>
        );
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idSalesArchive)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idSalesArchive) ? (
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
            <td className="datagrid-tbody-cell">{name.idSalesArchive}</td>
            <td className="datagrid-tbody-cell">{name.idSale}</td>
            <td className="datagrid-tbody-cell">{name.statusSalesArchive}</td>
          </>
        );
      }
      case "PRODUCT_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idProduct)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idProduct) ? (
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
            <td className="datagrid-tbody-cell">{name.idProduct}</td>
            <td className="datagrid-tbody-cell">{name.idCategory}</td>
            <td className="datagrid-tbody-cell">{name.nameProduct}</td>
            <td className="datagrid-tbody-cell">{name.priceProduct}</td>
            <td className="datagrid-tbody-cell">{name.countProduct}</td>
            <td className="datagrid-tbody-cell">{name.imgProduct}</td>
          </>
        );
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idProductInfo)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idProductInfo) ? (
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
            <td className="datagrid-tbody-cell">{name.idProductInfo}</td>
            <td className="datagrid-tbody-cell">{name.idProduct}</td>
            <td className="datagrid-tbody-cell">{name.titleProduct}</td>
            <td className="datagrid-tbody-cell">{name.descriptionProduct}</td>
          </>
        );
      }
      case "CATEGORY_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idCategory)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idCategory) ? (
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
            <td className="datagrid-tbody-cell">{name.idCategory}</td>
            <td className="datagrid-tbody-cell">{name.nameCategory}</td>
            <td className="datagrid-tbody-cell">{name.imgCategory}</td>
          </>
        );
      }
      case "POINTISSUE_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idPointIssue)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idPointIssue) ? (
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
            <td className="datagrid-tbody-cell">{name.idPointIssue}</td>
            <td className="datagrid-tbody-cell">{name.addressPointIssue}</td>
            <td className="datagrid-tbody-cell">{name.workingHousePointIssue}</td>
          </>
        );
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idSuppliers)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idSuppliers) ? (
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
            <td className="datagrid-tbody-cell">{name.idSuppliers}</td>
            <td className="datagrid-tbody-cell">{name.nameSuppliers}</td>
          </>
        );
      }
      case "INVOICE_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idInvoice)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idInvoice) ? (
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
            <td className="datagrid-tbody-cell">{name.idInvoice}</td>
            <td className="datagrid-tbody-cell">{name.idSuppliers}</td>
            <td className="datagrid-tbody-cell">{name.idPointIssue}</td>
            <td className="datagrid-tbody-cell">{name.dateDeliveryInvoice}</td>
            <td className="datagrid-tbody-cell">{name.countInvoice}</td>
            <td className="datagrid-tbody-cell">{name.priceInvoice}</td>
          </>
        );
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        return (
          <>
            <td className="datagrid-tbody-cell">
              <span
                className="datagrid-thead-input-wrap"
                onClick={() => dataTables.checkedInputOne(name.idProductWaybill)}>
                <input className="datagrid-thead-input" type="checkbox" />
                {dataTables.selectedInputs.includes(name.idProductWaybill) ? (
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
            <td className="datagrid-tbody-cell">{name.idProductWaybill}</td>
            <td className="datagrid-tbody-cell">{name.idInvoice}</td>
            <td className="datagrid-tbody-cell">{name.idProduct}</td>
            <td className="datagrid-tbody-cell">{name.countProduct_waybill}</td>
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

        return dataTables.dataCredentials.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }

      case "SALE_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("SALE_NAMECOLUMNE"));

        return dataTables.dataSale.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        runInAction(() =>
          dataTables.setActiveTable("SALESARCHIVE_NAMECOLUMNE")
        );

        return dataTables.dataSalesArchive.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "PRODUCT_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("PRODUCT_NAMECOLUMNE"));

        return dataTables.dataProduct.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("PRODUCTINFO_NAMECOLUMNE"));

        return dataTables.dataProductInfo.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "CATEGORY_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("CATEGORY_NAMECOLUMNE"));

        return dataTables.dataCategory.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "POINTISSUE_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("POINTISSUE_NAMECOLUMNE"));

        return dataTables.dataPointIssue.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("SUPPLIERS_NAMECOLUMNE"));

        return dataTables.dataSuppliers.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "INVOICE_NAMECOLUMNE": {
        runInAction(() => dataTables.setActiveTable("INVOICE_NAMECOLUMNE"));

        return dataTables.dataInvoice.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        runInAction(() =>
          dataTables.setActiveTable("PRODUCTWAYBILL_NAMECOLUMNE")
        );

        return dataTables.dataProductWaybill.map((nameColumn, index) => (
          <tr className="datagrid-tbody-row" key={index}>
            {renderTd(nameColumn, nameTable)}
          </tr>
        ));
      }

      default:
        return null;
    }
  };

  return <tbody>{renderTr()}</tbody>;
});

export default RenderUniversalBodyTables;

import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

const CheckedAll = observer(({ nameTable }) => {
  const { dataTables } = useContext(Context);

  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE": {
      return (
        <>
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
        </>
      );
    }
    case "CREDENTIALS_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataCredentials.length === 0 ? (
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
          ) : dataTables.dataCredentials.length ===
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
        </>
      );
    }
    case "SALE_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataSale.length === 0 ? (
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
          ) : dataTables.dataSale.length ===
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
        </>
      );
    }
    case "SALESARCHIVE_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataSalesArchive.length === 0 ? (
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
          ) : dataTables.dataSalesArchive.length ===
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
        </>
      );
    }
    case "PRODUCT_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataProduct.length === 0 ? (
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
          ) : dataTables.dataProduct.length ===
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
        </>
      );
    }
    case "PRODUCTINFO_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataProductInfo.length === 0 ? (
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
          ) : dataTables.dataProductInfo.length ===
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
        </>
      );
    }
    case "CATEGORY_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataCategory.length === 0 ? (
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
          ) : dataTables.dataCategory.length ===
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
        </>
      );
    }
    case "POINTISSUE_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataPointIssue.length === 0 ? (
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
          ) : dataTables.dataPointIssue.length ===
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
        </>
      );
    }
    case "SUPPLIERS_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataSuppliers.length === 0 ? (
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
          ) : dataTables.dataSuppliers.length ===
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
        </>
      );
    }
    case "INVOICE_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataInvoice.length === 0 ? (
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
          ) : dataTables.dataInvoice.length ===
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
        </>
      );
    }
    case "PRODUCTWAYBILL_NAMECOLUMNE": {
      return (
        <>
          {dataTables.dataProductWaybill.length === 0 ? (
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
          ) : dataTables.dataProductWaybill.length ===
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
        </>
      );
    }

    default:
      return null;
  }
});

export default CheckedAll;

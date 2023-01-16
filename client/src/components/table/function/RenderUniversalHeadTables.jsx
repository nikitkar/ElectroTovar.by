import { observer } from "mobx-react-lite";

import ThHeadUniversal from "../ThHeadUniversal";

import {
  CLIENT_NAMECOLUMNR,
  CREDENTIALS_NAMECOLUMNR,
  SALE_NAMECOLUMNR,
  SALESARCHIVE_NAMECOLUMNR,
  PRODUCT_NAMECOLUMNR,
  PRODUCTINFO_NAMECOLUMNR,
  CATEGORY_NAMECOLUMNR,
  POINTISSUE_NAMECOLUMNR,
  SUPPLIERS_NAMECOLUMNR,
  INVOICE_NAMECOLUMNR,
  PRODUCTWAYBILL_NAMECOLUMNR,
} from "../../../utils/consts_nameColumnR";

const RenderUniversalTables = observer(({ nameTable }) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE":
      return CLIENT_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "CREDENTIALS_NAMECOLUMNE":
      return CREDENTIALS_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "SALE_NAMECOLUMNE":
      return SALE_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "SALESARCHIVE_NAMECOLUMNE":
      return SALESARCHIVE_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "PRODUCT_NAMECOLUMNE":
      return PRODUCT_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "PRODUCTINFO_NAMECOLUMNE":
      return PRODUCTINFO_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "CATEGORY_NAMECOLUMNE":
      return CATEGORY_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "POINTISSUE_NAMECOLUMNE":
      return POINTISSUE_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "SUPPLIERS_NAMECOLUMNE":
      return SUPPLIERS_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "INVOICE_NAMECOLUMNE":
      return INVOICE_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));
    case "PRODUCTWAYBILL_NAMECOLUMNE":
      return PRODUCTWAYBILL_NAMECOLUMNR.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));

    default:
      return null;
  }
});

export default RenderUniversalTables;

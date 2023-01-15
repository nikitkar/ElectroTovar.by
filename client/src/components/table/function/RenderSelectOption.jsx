import {
  CLIENT_NAMECOLUMNE,
  CREDENTIALS_NAMECOLUMNE,
  SALE_NAMECOLUMNE,
  SALESARCHIVE_NAMECOLUMNE,
  PRODUCT_NAMECOLUMNE,
  PRODUCTINFO_NAMECOLUMNE,
  CATEGORY_NAMECOLUMNE,
  POINTISSUE_NAMECOLUMNE,
  SUPPLIERS_NAMECOLUMNE,
  INVOICE_NAMECOLUMNE,
  PRODUCTWAYBILL_NAMECOLUMNE,
} from "../../../utils/consts_nameColumnE";

const RenderSelectOption = ({ nameTable }) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE":
      return CLIENT_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "CREDENTIALS_NAMECOLUMNE":
      return CREDENTIALS_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "SALE_NAMECOLUMNE":
      return SALE_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "SALESARCHIVE_NAMECOLUMNE":
      return SALESARCHIVE_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "PRODUCT_NAMECOLUMNE":
      return PRODUCT_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "PRODUCTINFO_NAMECOLUMNE":
      return PRODUCTINFO_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "CATEGORY_NAMECOLUMNE":
      return CATEGORY_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "POINTISSUE_NAMECOLUMNE":
      return POINTISSUE_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "SUPPLIERS_NAMECOLUMNE":
      return SUPPLIERS_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "INVOICE_NAMECOLUMNE":
      return INVOICE_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));
    case "PRODUCTWAYBILL_NAMECOLUMNE":
      return PRODUCTWAYBILL_NAMECOLUMNE.map((item, index) => (
        <option key={index} className="mui-toolbar-search-option" value={item}>
          {item}
        </option>
      ));

    default:
      return null;
  }
};

export default RenderSelectOption;

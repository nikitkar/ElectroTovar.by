export const CLIENT_NAMECOLUMNE = [
  "idClient",
  "nameClient",
  "emailClient",
  "telephoneClient",
  "addressClient",
  "percentPromotionsUsers",
];

export const CREDENTIALS_NAMECOLUMNE = [
  "idCredentials",
  "idClient",
  "loginClient",
  "passwordClient",
  "roleClient",
];
export const SALE_NAMECOLUMNE = [
  "idSale",
  "idClient",
  "idProduct",
  "dataSale",
  "countSale",
  "priceSale",
  "numberSale",
];
export const SALES_ARCHIVE_NAMECOLUMNE = [
  "idSalesArchive",
  "idSale",
  "statusSalesArchive",
];
export const PRODUCT_NAMECOLUMNE = [
  "idProduct",
  "idCategory",
  "nameProduct",
  "priceProduct",
  "countProduct",
  "imgProduct",
];
export const PRODUCT_INFO_NAMECOLUMNE = [
  "idProductInfo",
  "idProduct",
  "titleProduct",
  "descriptionProduct",
];
export const CATEGORY_NAMECOLUMNE = [
  "idCategory",
  "nameCategory",
  "imgCategory",
];
export const POINT_ISSUE_NAMECOLUMNE = [
  "idPointIssue",
  "addressPointIssue",
  "workingHousePointIssue",
];
export const SUPPLIERS_NAMECOLUMNE = ["idSuppliers", "nameSuppliers"];
export const INVOICE_NAMECOLUMNE = [
  "idInvoice",
  "idSuppliers",
  "idPointIssue",
  "dateDeliveryInvoice",
  "countInvoice",
  "priceInvoice",
];
export const PRODUCT_WAYBILL_NAMECOLUMNE = [
  "idProductWaybill",
  "idInvoice",
  "idProduct",
  "countProduct_waybill",
];

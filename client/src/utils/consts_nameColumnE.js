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
export const SALESARCHIVE_NAMECOLUMNE = [
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
export const PRODUCTINFO_NAMECOLUMNE = [
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
export const POINTISSUE_NAMECOLUMNE = [
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
export const PRODUCTWAYBILL_NAMECOLUMNE = [
  "idProductWaybill",
  "idInvoice",
  "idProduct",
  "countProduct_waybill",
];

export const ALL_NAMECOLIMNE = [
  "CLIENT_NAMECOLUMNE",
  "CREDENTIALS_NAMECOLUMNE",
  "SALE_NAMECOLUMNE",
  "SALESARCHIVE_NAMECOLUMNE",
  "PRODUCT_NAMECOLUMNE",
  "PRODUCTINFO_NAMECOLUMNE",
  "CATEGORY_NAMECOLUMNE",
  "POINTISSUE_NAMECOLUMNE",
  "SUPPLIERS_NAMECOLUMNE",
  "INVOICE_NAMECOLUMNE",
  "PRODUCTWAYBILL_NAMECOLUMNE",
];

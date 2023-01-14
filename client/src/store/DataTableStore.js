import { makeAutoObservable } from "mobx";

export default class User {
  constructor() {
    this._dataUser = [];
    this._dataCredentials = [];
    this._dataSale = [];
    this._dataSalesArchive = [];
    this._dataProduct = [];
    this._dataProductInfo = [];
    this._dataCategory = [];
    this._dataPointIssue = [];
    this._dataSuppliers = [];
    this._dataInvoice = [];
    this._dataProductWaybill = [];

    this._selectedInputs = [1];

    makeAutoObservable(this);
  }

  setDataUser(data) {
    this._dataUser = data;
  }

  setDataCredentials(data) {
    this._dataCredentials = data;
  }

  setDataSale(data) {
    this._dataSale = data;
  }

  setDataSalesArchive(data) {
    this._dataSalesArchive = data;
  }

  setDataProduct(data) {
    this._dataProduct = data;
  }

  setDataProductInfo(data) {
    this._dataProductInfo = data;
  }

  setDataCategory(data) {
    this._dataCategory = data;
  }

  setDataPointIssue(data) {
    this._dataPointIssue = data;
  }

  setDataSuppliers(data) {
    this._dataSuppliers = data;
  }

  setDataInvoice(data) {
    this._dataInvoice = data;
  }

  setDataProductWaybill(data) {
    this._dataProductWaybill = data;
  }

  setSelectedInputs(id) {
    this._selectedInputs.push(id);

    console.log(this._selectedInputs);
  }

  deleteSelectedInputs(id) {
    this._selectedInputs.map((selectedInput, index) =>
      selectedInput === id ? this._selectedInputs.splice(index, 1) : null
    );
  }

  get dataUser() {
    return this._dataUser;
  }

  get dataCredentials() {
    return this._dataCredentials;
  }

  get dataSale() {
    return this._dataSale;
  }

  get dataSalesArchive() {
    return this._dataSalesArchive;
  }

  get dataProduct() {
    return this._dataProduct;
  }

  get dataProductInfo() {
    return this._dataProductInfo;
  }

  get dataCategory() {
    return this._dataCategory;
  }

  get dataPointIssue() {
    return this._dataPointIssue;
  }

  get dataSuppliers() {
    return this._dataSuppliers;
  }

  get dataInvoice() {
    return this._dataInvoice;
  }

  get dataProductWaybill() {
    return this._dataProductWaybill;
  }

  get selectedInputs() {
    return this._selectedInputs;
  }
}

//   client.idClient ? (
//     <svg
//       className="datagrid-thead-input-icon  datagrid-thead-input-icon_checked"
//       focusable="false"
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       data-testid="CheckBoxOutlineBlankIcon">
//       <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
//     </svg>
//   ) : (
//     <svg
//       className="datagrid-thead-input-icon"
//       focusable="false"
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       data-testid="CheckBoxOutlineBlankIcon">
//       <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
//     </svg>
//   )

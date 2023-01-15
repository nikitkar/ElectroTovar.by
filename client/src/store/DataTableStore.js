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

    this._selectedInputs = [];

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
    if (typeof id == "object") return (this._selectedInputs = []);
    else this._selectedInputs.push(id);
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

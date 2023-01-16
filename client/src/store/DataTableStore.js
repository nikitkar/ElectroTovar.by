import { makeAutoObservable } from "mobx";

import {
  getClient_discount_search,
  getDataUser_discount,
} from "../http/GetDataTableAPI";

import { CLIENT_NAMECOLUMNE } from "../utils/consts_nameColumnE";

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

    //delete
    this._selectedInputs = [];

    //search
    this._selectOption = "";
    this._valueSearchData = "";

    //sort
    this._sortColumnIndex = 0;
    this._sortMethod = "ASC";

    makeAutoObservable(this);
  }

  refresh() {
    if (this._valueSearchData === "" || this._selectOption === "") {
      CLIENT_NAMECOLUMNE.map((item, index) =>
        this._sortColumnIndex === index
          ? getDataUser_discount(item, this._sortMethod).then((data) => {
              if (data.err || data.sqlMessage)
                return alert(data.err || data.sqlMessage);
              else this.setDataUser(data);
            })
          : null
      );
    } else {
      CLIENT_NAMECOLUMNE.map((item, index) =>
        this._sortColumnIndex === index
          ? getClient_discount_search(
              this._selectOption,
              this._valueSearchData,
              item,
              this._sortMethod
            ).then((data) => {
              if (data.err || data.sqlMessage)
                return alert(data.err || data.sqlMessage);
              else this.setDataUser(data);
            })
          : null
      );
    }
  }

  nameSortColumn(index) {
    this.setSortMethod(this._sortMethod === "ASC" ? "DESC" : "ASC");
    if (this._sortColumnIndex !== index) this.setSortMethod("ASC");

    this.setSortColumnIndex(index);

    this.refresh();
  }

  checkedInputAll() {
    if (this._selectedInputs.length === this._dataUser.length)
      return this._dataUser.map((nameColumn, index) =>
        this.deleteSelectedInputs(nameColumn.idClient)
      );

    if (this._selectedInputs.length === 0)
      return this._dataUser.map((nameColumn, index) =>
        this.setSelectedInputs(nameColumn.idClient)
      );

    this._dataUser.map((nameColumn, index) =>
      this.deleteSelectedInputs(nameColumn.idClient)
    );
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

  setSelectOption(selectOption) {
    this._selectOption = selectOption;
  }

  setValueSearchData(value) {
    this._valueSearchData = value;
  }

  setSortColumnIndex(index) {
    this._sortColumnIndex = index;
  }

  setSortMethod(method) {
    this._sortMethod = method;
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

  get selectOption() {
    return this._selectOption;
  }

  get valueSearchData() {
    return this._valueSearchData;
  }

  get sortColumnIndex() {
    return this._sortColumnIndex;
  }

  get sortMethod() {
    return this._sortMethod;
  }
}

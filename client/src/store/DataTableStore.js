import { makeAutoObservable } from "mobx";

import {
  getClient_discount_search,
  getDataTable,
  getDataUser_discount,
  searchData,
  sortData_search,
} from "../http/GetDataTableAPI";

import {
  CLIENT_NAMECOLUMNE,
  CREDENTIALS_NAMECOLUMNE,
} from "../utils/consts_nameColumnE";

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

    //на какой таблице пользовать находится
    this._activeTable = "";

    makeAutoObservable(this);
  }

  // обновляет таблицы
  refresh() {
    switch (this._activeTable) {
      case "CLIENT_NAMECOLUMNE": {
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

        return null;
      }
      case "CREDENTIALS_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          console.log("ref");
          getDataTable("credentials").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataCredentials(data);
          });
        } else {
          CREDENTIALS_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "credentials",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataCredentials(data);
                })
              : null
          );
        }

        return null;
      }

      default:
        return null;
    }
  }

  //указывает метод сортировки
  nameSortColumn(index) {
    this.setSortMethod(this._sortMethod === "ASC" ? "DESC" : "ASC");
    if (this._sortColumnIndex !== index) this.setSortMethod("ASC");

    this.setSortColumnIndex(index);

    this.refresh();
  }

  // выбрать одну строку
  checkedInputOne(id) {
    if (this._selectedInputs.length === 0) return this.setSelectedInputs(id);

    const repeatedValue = this._selectedInputs.filter((elem) => elem === id);

    if (repeatedValue.length > 0) {
      return this.deleteSelectedInputs(repeatedValue[0]);
    }
    this.setSelectedInputs(id);
  }

  // выбрать все строки
  checkedInputAll() {
    switch (this._activeTable) {
      case "CLIENT_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataUser.length)
          return this._dataUser.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idClient)
          );

        if (this._selectedInputs.length === 0)
          return this._dataUser.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idClient)
          );

        this._dataUser.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idClient)
        );

        return null;
      }

      case "CREDENTIALS_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataCredentials.length)
          return this._dataCredentials.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idCredentials)
          );

        if (this._selectedInputs.length === 0)
          return this._dataCredentials.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idCredentials)
          );

        this._dataCredentials.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idCredentials)
        );

        return null;
      }

      default:
        return null;
    }
  }

  // поиск по таблице
  searchData_change(values) {
    switch (this._activeTable) {
      case "CLIENT_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          CLIENT_NAMECOLUMNE.map((item, index) =>
            getClient_discount_search(
              this._selectOption,
              this._valueSearchData,
              this._sortColumnIndex === index ? item : "idClient",
              this.sortMethod
            ).then((data) => {
              if (data.err) {
                getDataUser_discount("idClient", "ASC").then((data) =>
                  this.setDataUser(data)
                );
                this.setSelectedInputs([]);

                return;
              }

              this.setDataUser(data);
              this.setSelectedInputs([]);
            })
          );
        }, 600);

        return null;
      }
      case "CREDENTIALS_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          searchData(
            "credentials",
            this._selectOption,
            this._valueSearchData
          ).then((data) => {
            if (data.err) {
              searchData("credentials", "idCredentials", "").then((data) => {
                this.setDataCredentials(data);
                console.log(data);
              });
              this.setSelectedInputs([]);

              return;
            }

            this.setDataCredentials(data);
            this.setSelectedInputs([]);
          });
        }, 600);

        return null;
      }

      default:
        return;
    }
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

  setActiveTable(table) {
    this._activeTable = table;
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

  get activeTable() {
    return this._activeTable;
  }
}

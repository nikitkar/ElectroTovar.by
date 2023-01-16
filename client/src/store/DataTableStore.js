import { makeAutoObservable } from "mobx";

import {
  getClient_discount_search,
  getDataTable,
  getDataUser_discount,
  searchData,
  sortData_search,
} from "../http/GetDataTableAPI";

import {
  CATEGORY_NAMECOLUMNE,
  CLIENT_NAMECOLUMNE,
  CREDENTIALS_NAMECOLUMNE,
  INVOICE_NAMECOLUMNE,
  POINTISSUE_NAMECOLUMNE,
  PRODUCTINFO_NAMECOLUMNE,
  PRODUCTWAYBILL_NAMECOLUMNE,
  PRODUCT_NAMECOLUMNE,
  SALESARCHIVE_NAMECOLUMNE,
  SALE_NAMECOLUMNE,
  SUPPLIERS_NAMECOLUMNE,
} from "../utils/consts_nameColumnE";

export default class DataTableStore {
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
      case "SALE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("sale").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataSale(data);
          });
        } else {
          SALE_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "sale",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataSale(data);
                })
              : null
          );
        }

        return null;
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("salearchive").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataSalesArchive(data);
          });
        } else {
          SALESARCHIVE_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "salearchive",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataSalesArchive(data);
                })
              : null
          );
        }

        return null;
      }
      case "PRODUCT_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("product").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataProduct(data);
          });
        } else {
          PRODUCT_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "product",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataProduct(data);
                })
              : null
          );
        }

        return null;
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("product_info").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataProductInfo(data);
          });
        } else {
          PRODUCTINFO_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "product_info",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataProductInfo(data);
                })
              : null
          );
        }

        return null;
      }
      case "CATEGORY_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("category").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataCategory(data);
          });
        } else {
          CATEGORY_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "category",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataCategory(data);
                })
              : null
          );
        }

        return null;
      }
      case "POINTISSUE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("pointIssue").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataPointIssue(data);
          });
        } else {
          POINTISSUE_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "pointIssue",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataPointIssue(data);
                })
              : null
          );
        }

        return null;
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("suppliers").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataSuppliers(data);
          });
        } else {
          SUPPLIERS_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "suppliers",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataSuppliers(data);
                })
              : null
          );
        }

        return null;
      }
      case "INVOICE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("invoice").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataInvoice(data);
          });
        } else {
          INVOICE_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "invoice",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataInvoice(data);
                })
              : null
          );
        }

        return null;
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "") {
          getDataTable("productWaybill").then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else this.setDataProductWaybill(data);
          });
        } else {
          PRODUCTWAYBILL_NAMECOLUMNE.map((item, index) =>
            this._sortColumnIndex === index
              ? sortData_search(
                  "productWaybill",
                  this._selectOption,
                  this._valueSearchData,
                  item,
                  this._sortMethod
                ).then((data) => {
                  if (data.err || data.sqlMessage)
                    return alert(data.err || data.sqlMessage);
                  else this.setDataProductWaybill(data);
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
      case "SALE_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataSale.length)
          return this._dataCredentials.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idSale)
          );

        if (this._selectedInputs.length === 0)
          return this._dataSale.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idSale)
          );

        this._dataSale.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idSale)
        );

        return null;
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataSalesArchive.length)
          return this._dataSalesArchive.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idSalesArchive)
          );

        if (this._selectedInputs.length === 0)
          return this._dataSalesArchive.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idSalesArchive)
          );

        this._dataSalesArchive.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idSalesArchive)
        );

        return null;
      }
      case "PRODUCT_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataProduct.length)
          return this._dataProduct.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idProduct)
          );

        if (this._selectedInputs.length === 0)
          return this._dataProduct.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idProduct)
          );

        this._dataProduct.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idProduct)
        );

        return null;
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataProductInfo.length)
          return this._dataProductInfo.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idProductInfo)
          );

        if (this._selectedInputs.length === 0)
          return this._dataProductInfo.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idProductInfo)
          );

        this._dataProductInfo.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idProductInfo)
        );

        return null;
      }
      case "CATEGORY_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataCategory.length)
          return this._dataCategory.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idCategory)
          );

        if (this._selectedInputs.length === 0)
          return this._dataCategory.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idCategory)
          );

        this._dataCategory.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idCategory)
        );

        return null;
      }
      case "POINTISSUE_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataPointIssue.length)
          return this._dataPointIssue.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idPointIssue)
          );

        if (this._selectedInputs.length === 0)
          return this._dataPointIssue.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idPointIssue)
          );

        this._dataPointIssue.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idPointIssue)
        );

        return null;
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataSuppliers.length)
          return this._dataSuppliers.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idSuppliers)
          );

        if (this._selectedInputs.length === 0)
          return this._dataSuppliers.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idSuppliers)
          );

        this._dataSuppliers.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idSuppliers)
        );

        return null;
      }
      case "INVOICE_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataInvoice.length)
          return this._dataInvoice.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idInvoice)
          );

        if (this._selectedInputs.length === 0)
          return this._dataInvoice.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idInvoice)
          );

        this._dataInvoice.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idInvoice)
        );

        return null;
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        if (this._selectedInputs.length === this._dataProductWaybill.length)
          return this._dataProductWaybill.map((nameColumn) =>
            this.deleteSelectedInputs(nameColumn.idProductWaybill)
          );

        if (this._selectedInputs.length === 0)
          return this._dataProductWaybill.map((nameColumn) =>
            this.setSelectedInputs(nameColumn.idProductWaybill)
          );

        this._dataProductWaybill.map((nameColumn) =>
          this.deleteSelectedInputs(nameColumn.idProductWaybill)
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

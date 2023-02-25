import { makeAutoObservable } from "mobx";

import {
  deletedRow,
  getClient_discount_search,
  getDataTable,
  getDataUser_discount,
  searchData,
  sortData,
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

  // обновление данных таблиц без параметров - дополнительная функция
  refreshDontParams(array, nameSort, saveDateResult) {
    array.map((item, index) =>
      this._sortColumnIndex === index
        ? sortData(nameSort, item, this._sortMethod).then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else saveDateResult(data);
          })
        : null
    );
  }

  // обновление данных таблиц с параметрами - дополнительная функция
  refreshWithParams(array, nameSort, saveDateResult) {
    array.map((item, index) =>
      this._sortColumnIndex === index
        ? sortData_search(
            nameSort,
            this._selectOption,
            this._valueSearchData,
            item,
            this._sortMethod
          ).then((data) => {
            if (data.err || data.sqlMessage)
              return alert(data.err || data.sqlMessage);
            else saveDateResult(data);
          })
        : null
    );
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
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            CREDENTIALS_NAMECOLUMNE,
            "credentials",
            this.setDataCredentials
          );
        else
          this.refreshWithParams(
            CREDENTIALS_NAMECOLUMNE,
            "credentials",
            this.setDataCredentials
          );

        return null;
      }
      case "SALE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(SALE_NAMECOLUMNE, "sale", this.setDataSale);
        else this.refreshWithParams(SALE_NAMECOLUMNE, "sale", this.setDataSale);

        return null;
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            SALESARCHIVE_NAMECOLUMNE,
            "salesarchive",
            this.setDataSalesArchive
          );
        else
          this.refreshWithParams(
            SALESARCHIVE_NAMECOLUMNE,
            "salesarchive",
            this.setDataSalesArchive
          );

        return null;
      }
      case "PRODUCT_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            PRODUCT_NAMECOLUMNE,
            "product",
            this.setDataProduct
          );
        else
          this.refreshWithParams(
            PRODUCT_NAMECOLUMNE,
            "product",
            this.setDataProduct
          );

        return null;
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            PRODUCTINFO_NAMECOLUMNE,
            "product_info",
            this.setDataProductInfo
          );
        else
          this.refreshWithParams(
            PRODUCTINFO_NAMECOLUMNE,
            "product_info",
            this.setDataProductInfo
          );

        return null;
      }
      case "CATEGORY_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            CATEGORY_NAMECOLUMNE,
            "category",
            this.setDataCategory
          );
        else
          this.refreshWithParams(
            CATEGORY_NAMECOLUMNE,
            "category",
            this.setDataCategory
          );

        return null;
      }
      case "POINTISSUE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            POINTISSUE_NAMECOLUMNE,
            "pointIssue",
            this.setDataPointIssue
          );
        else
          this.refreshWithParams(
            POINTISSUE_NAMECOLUMNE,
            "pointIssue",
            this.setDataPointIssue
          );

        return null;
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            SUPPLIERS_NAMECOLUMNE,
            "suppliers",
            this.setDataSuppliers
          );
        else
          this.refreshWithParams(
            SUPPLIERS_NAMECOLUMNE,
            "suppliers",
            this.setDataSuppliers
          );

        return null;
      }
      case "INVOICE_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            INVOICE_NAMECOLUMNE,
            "invoice",
            this.setDataInvoice
          );
        else
          this.refreshWithParams(
            INVOICE_NAMECOLUMNE,
            "invoice",
            this.setDataInvoice
          );

        return null;
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        if (this._valueSearchData === "" || this._selectOption === "")
          this.refreshDontParams(
            PRODUCTWAYBILL_NAMECOLUMNE,
            "productWaybill",
            this.setDataProductWaybill
          );
        else
          this.refreshWithParams(
            PRODUCTWAYBILL_NAMECOLUMNE,
            "productWaybill",
            this.setDataProductWaybill
          );

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

  // выбрать все строки - дополнительная функция
  auxiliary_checkedInputAll(dataName, dataIdName) {
    if (this._selectedInputs.length === dataName.length)
      return dataName.map((nameColumn) =>
        this.deleteSelectedInputs(nameColumn[dataIdName])
      );

    if (this._selectedInputs.length === 0)
      return dataName.map((nameColumn) =>
        this.setSelectedInputs(nameColumn[dataIdName])
      );

    dataName.map((nameColumn) =>
      this.deleteSelectedInputs(nameColumn[dataIdName])
    );
  }

  // выбрать все строки
  checkedInputAll() {
    switch (this._activeTable) {
      case "CLIENT_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataUser, "idClient");

        return null;
      }
      case "CREDENTIALS_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataCredentials, "idCredentials");

        return null;
      }
      case "SALE_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataSale, "idSale");

        return null;
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(
          this._dataSalesArchive,
          "idSalesArchive"
        );

        return null;
      }
      case "PRODUCT_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataProduct, "idProduct");

        return null;
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataProductInfo, "idProductInfo");

        return null;
      }
      case "CATEGORY_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataCategory, "idCategory");

        return null;
      }
      case "POINTISSUE_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataPointIssue, "idPointIssue");

        return null;
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataSuppliers, "idSuppliers");

        return null;
      }
      case "INVOICE_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(this._dataInvoice, "idInvoice");

        return null;
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        this.auxiliary_checkedInputAll(
          this._dataProductWaybill,
          "idProductWaybill"
        );

        return null;
      }

      default:
        return null;
    }
  }

  // поиск по таблице - дополнительная функция
  auxiliary_searchData_change(nameColumn, idNameColumn, setDataFunction) {
    searchData(nameColumn, this._selectOption, this._valueSearchData).then(
      (data) => {
        if (data.err) {
          searchData(nameColumn, idNameColumn, "").then((data) =>
            setDataFunction(data)
          );
          this.setSelectedInputs([]);

          return;
        }

        setDataFunction(data);
        this.setSelectedInputs([]);
      }
    );
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
          this.auxiliary_searchData_change(
            "credentials",
            "idCredentials",
            this.setDataCredentials
          );
        }, 600);

        return null;
      }
      case "SALE_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change("sale", "idSale", this.setDataSale);
        }, 600);

        return null;
      }
      case "SALESARCHIVE_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "salesArchive",
            "idSalesArchive",
            this.setDataSalesArchive
          );
        }, 600);

        return null;
      }
      case "PRODUCT_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "product",
            "idProduct",
            this.setDataProduct
          );
        }, 600);

        return null;
      }
      case "PRODUCTINFO_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "product_info",
            "idProductInfo",
            this.setDataProductInfo
          );
        }, 600);

        return null;
      }
      case "CATEGORY_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "category",
            "idCategory",
            this.setDataCategory
          );
        }, 600);

        return null;
      }
      case "POINTISSUE_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "pointIssue",
            "idPointIssue",
            this.setDataPointIssue
          );
        }, 600);

        return null;
      }
      case "SUPPLIERS_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "suppliers",
            "idSuppliers",
            this.setDataSuppliers
          );
        }, 600);

        return null;
      }
      case "INVOICE_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "invoice",
            "idInvoice",
            this.setDataInvoice
          );
        }, 600);

        return null;
      }
      case "PRODUCTWAYBILL_NAMECOLUMNE": {
        this.setValueSearchData(values);

        setTimeout(() => {
          this.auxiliary_searchData_change(
            "productWaybill",
            "idProductWaybill",
            this.setDataProductWaybill
          );
        }, 600);

        return null;
      }

      default:
        return;
    }
  }

  deleteRow() {
    switch (this._activeTable) {
      case "CLIENT_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "client", "idClient").then((data) =>
            alert(data)
          )
        );

        break;
      case "CREDENTIALS_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "credentials", "idCredentials").then(
            (data) => alert(data)
          )
        );

        break;
      case "SALE_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "sale", "idSale").then((data) =>
            alert(data)
          )
        );

        break;
      case "SALESARCHIVE_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "salesArchive", "idSalesArchive").then(
            (data) => alert(data)
          )
        );

        break;
      case "PRODUCT_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "product", "idProduct").then((data) => {
            console.log(data);
            alert(data.err ? data.err : "Успешно");
          })
        );

        break;
      case "PRODUCTINFO_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "product_info", "idProductInfo").then(
            (data) => alert(data)
          )
        );

        break;
      case "CATEGORY_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "category", "idCategory").then((data) =>
            alert(data)
          )
        );

        break;
      case "POINTISSUE_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "pointIssue", "idPointIssue").then((data) =>
            alert(data)
          )
        );

        break;
      case "SUPPLIERS_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "suppliers", "idSuppliers").then((data) =>
            alert(data)
          )
        );

        break;
      case "INVOICE_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "invoice", "idInvoice").then((data) =>
            alert(data)
          )
        );

        break;
      case "PRODUCTWAYBILL_NAMECOLUMNE":
        this._selectedInputs.map((selectedInput) =>
          deletedRow(selectedInput, "productWaybill", "idProductWaybill").then(
            (data) => alert(data)
          )
        );

        break;

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

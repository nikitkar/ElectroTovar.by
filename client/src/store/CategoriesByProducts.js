import { makeAutoObservable } from "mobx";

export default class CategoriesByProductsStore {
  constructor() {
    this._pages = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 12;
    this._selectedCategory = 1;
    this._filter = "popularity";
    makeAutoObservable(this);
  }

  setPages(pages) {
    this._pages = pages;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  setFilter(filter) {
    this._filter = filter;
  }

  setSelectedCategory(selectedCategory) {
    this.setPage(1);
    this._selectedCategory = selectedCategory;
  }

  filterEvent() {
    switch (this._filter) {
      case "popularity":
        this._pages.sort((a, b) => (a.idProduct > b.idProduct ? 1 : -1));
        break;
      case "novelty":
        this._pages.sort((a, b) => (a.idProduct < b.idProduct ? 1 : -1));
        break;
      case "priceCheap":
        this._pages.sort((a, b) => (a.priceProduct > b.priceProduct ? 1 : -1));
        break;
      case "priceExpensive":
        this._pages.sort((a, b) => (a.priceProduct < b.priceProduct ? 1 : -1));
        break;
      default:
        this._pages.sort((a, b) => (a.idProduct > b.idProduct ? 1 : -1));
    }
  }

  get pages() {
    return this._pages;
  }

  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
  get filter() {
    return this._filter;
  }
}

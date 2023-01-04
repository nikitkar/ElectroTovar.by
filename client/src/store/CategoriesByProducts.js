import { makeAutoObservable } from "mobx";

export default class CategoriesByProductsStore {
  constructor() {
    this._pages = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 12;
    this._selectedCategory = 1;

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

  setSelectedCategory(selectedCategory) {
    this.setPage(1);
    this._selectedCategory = selectedCategory;
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
}

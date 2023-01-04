import { makeAutoObservable } from "mobx";

export default class CategoriesByProductsStore {
  constructor() {
    this._page = 1;
    this._totalCount = 0;
    this._limit = 6;

    makeAutoObservable(this);
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

  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }
}

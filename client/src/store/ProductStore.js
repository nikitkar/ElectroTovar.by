import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._products = [];
    this._categories = [];

    this._selectedCategory = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setProduct(product) {
    this._products = product;
  }

  setCategory(category) {
    this._categories = category;
  }

  setSelectedCategories(category) {
    this._selectedCategory = category;
  }

  get products() {
    return this._products;
  }

  get categories() {
    return this._categories;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }
}

import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._products = [];
    this._categories = [];
    this._brands = [];

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

  setBrand(brand) {
    this._brands = brand;
  }

  setSelectedCategories(category) {
    this._selectedCategory = category;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get products() {
    return this._products;
  }

  get categories() {
    return this._categories;
  }

  get brands() {
    return this._brands;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}

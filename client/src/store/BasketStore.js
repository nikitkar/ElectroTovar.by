import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._listBaskets = [];
    this._quantityProducts = 0;
    this._totalCost = 0;
    //   { id: 1, count: 2 },
    //   { id: 2, count: 4 },
    //   { id: 3, count: 5 },
    //   { id: 4, count: 1 },

    makeAutoObservable(this);
  }

  setListBasket(listBasket) {
    if (listBasket === null) return;
    else this._listBaskets = listBasket;

    this.setQuantityProducts();
  }

  addItem(idItem) {
    const found = this._listBaskets.find((listBasket) =>
      listBasket.id === idItem ? listBasket.count++ : false
    );

    if (found === undefined) this._listBaskets.push({ id: idItem, count: 1 });

    this.saveLocalStorage();
    this.setQuantityProducts();
  }

  removeItem(idItem) {
    let key;
    this._listBaskets.map((listBasket, index) =>
      listBasket.id === idItem ? (key = index) : null
    );

    this._listBaskets.splice(key, 1);

    this.saveLocalStorage();
    this.setQuantityProducts();
  }

  setQuantityProducts() {
    this._quantityProducts = 0;

    if (this._listBaskets === []) return false;
    else
      this._listBaskets.map((item) => (this._quantityProducts += item.count));
  }

  setTotalCost(totalCost) {
    this._totalCost = totalCost;
  }

  saveLocalStorage() {
    localStorage.removeItem("listBaskets");

    if (this._listBaskets.length !== 0)
      localStorage.setItem("listBaskets", JSON.stringify(this._listBaskets));
  }

  get listBasket() {
    return this._listBaskets;
  }

  get localStorageListBasket() {
    return JSON.parse(localStorage.getItem("listBaskets"));
  }

  get quantityProducts() {
    return this._quantityProducts;
  }

  get totalCost() {
    return this._totalCost;
  }
}

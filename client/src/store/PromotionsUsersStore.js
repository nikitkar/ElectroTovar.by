import { makeAutoObservable } from "mobx";

export default class PromotionsUsersStore {
  constructor() {
    this._listPromotionsUsers = {};
    this._percentPromotionsUsers = -1;

    makeAutoObservable(this);
  }

  setListPromotionsUsers(listPromotionsUsers) {
    this._listPromotionsUsers = listPromotionsUsers;
  }

  setPercentPromotionsUsers(percentPromotionsUsers) {
    this._percentPromotionsUsers = percentPromotionsUsers;
  }

  get listPromotionsUsers() {
    return this._listPromotionsUsers;
  }

  get percentPromotionsUsers() {
    return this._percentPromotionsUsers;
  }
}

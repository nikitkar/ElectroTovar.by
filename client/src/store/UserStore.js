import { makeAutoObservable } from "mobx";

export default class User {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._role = "USER";
    this._id = -1;

    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setRole(role) {
    this._role = role;
  }

  setId(id) {
    this._id = id;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
  get role() {
    return this._role;
  }

  get id() {
    return this._id;
  }
}

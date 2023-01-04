import { makeAutoObservable } from "mobx";

export default class HeaderStore {
  constructor() {
    this._isActiveHeader = false;

    makeAutoObservable(this);
  }

  setActiveHeader(ActiveHeader) {
    this._isActiveHeader = ActiveHeader;
  }

  get activeHeader() {
    return this._isActiveHeader;
  }
}

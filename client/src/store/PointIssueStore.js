import { makeAutoObservable } from "mobx";

export default class PointIssueStore {
  constructor() {
    this._listPointIssue = [];

    makeAutoObservable(this);
  }

  setListPointIssue(list) {
    this._listPointIssue = list;
  }

  get listPointIssue() {
    return this._listPointIssue;
  }
}

import { action, makeAutoObservable } from 'mobx';

export default class SutanguStore {
  theme = 'lighter';

  constructor() {
    makeAutoObservable(this);
  }

  @action changeTheme = (theme: string) => {
    this.theme = theme;
  };
}

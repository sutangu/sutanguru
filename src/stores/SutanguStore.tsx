import { action, makeAutoObservable } from 'mobx';

class SutanguStore {
  theme = 'lighter';

  constructor() {
    makeAutoObservable(this);
  }

  @action changeTheme = (theme: string) => {
    this.theme = theme;
  };
}

const store = new SutanguStore();
export default store;

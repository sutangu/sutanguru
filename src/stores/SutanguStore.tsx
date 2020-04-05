import { observable, action } from 'mobx';

class SutanguStore {
  @observable theme = 'lighter';

  @action changeTheme = (theme: string) => {
    this.theme = theme;
  };
}

const store = new SutanguStore();
export default store;

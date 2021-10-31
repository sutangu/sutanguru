import SutanguStore from './SutanguStore';
import SocialNetworksStore from './SocialNetworksStore';

class RootStore {
  public sutanguStore;
  public socialNetworksStore;

  constructor() {
    this.sutanguStore = new SutanguStore();
    this.socialNetworksStore = new SocialNetworksStore();
  }
}

const rootStore = new RootStore();
export default rootStore;

import AppDispatcher from './AppDispatcher';
import BankBalanceReduceStore from './BankBalanceReduceStore';
import { ReduceStore } from 'flux/utils';
import BankConstants from './BankConstants';

class BankRewardStore extends ReduceStore {

  getInitialState(){
    return 'Basic';
  }

  reduce(state, action){
    this.getDispatcher().waitFor([
      BankBalanceReduceStore.getDispatchToken()
    ]);

    if(action.type === BankConstants.DEPOSIT_INTO_ACCOUNT ||
       action.type === BankConstants.WITHDREW_FROM_ACCOUNT ){
      let balance = BankBalanceReduceStore.getState();
      if(balance < 5000){
        return 'Basic';
      }
      else if(balance < 10000){
        return 'Silver'
      }
      else if(balance < 50000){
        return 'Gold'
      }
      else{
        return 'Platinum'
      }
    }
    return state;
  }
}

export default new BankRewardStore(AppDispatcher);
import AppDispatcher from './AppDispatcher';
import BankConstants from './BankConstants';
import { ReduceStore } from 'flux/utils';

class BankBalanceReduceStore extends ReduceStore {

  getInitialState(){
    return 0;
  }

  reduce(state, action){
    switch(action.type){
       case BankConstants.CREATE_ACCOUNT:
            return 0;
            break;
      case BankConstants.DEPOSIT_INTO_ACCOUNT:
           return state + action.ammount;
            break;
      case BankConstants.WITHDREW_FROM_ACCOUNT:
          return state - action.ammount;
          break;
      default:
        return state;
    }
  }

}

export default new BankBalanceReduceStore(AppDispatcher);
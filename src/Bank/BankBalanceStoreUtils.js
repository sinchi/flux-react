import AppDispatcher from './AppDispatcher';
import {Store} from 'flux/utils';
import BankConstants from './BankConstants';

let balance = 0;

class BankBalanceStoreUtils extends Store {
  getState(){
    return __balance;
  }

  __onDispatch(action){
     switch(action.type){
        case BankConstants.CREATE_ACCOUNT:
            balance = 0;
            this.__emitChange();
            break;
      case BankConstants.DEPOSIT_INTO_ACCOUNT:
            balance = balance + action.ammount;
            this.__emitChange();
            break;
      case BankConstants.WITHDREW_FROM_ACCOUNT:
          balance = balance - action.ammount;
          this.__emitChange();
          break;
     }
  }
}

export default new BankBalanceStoreUtils(AppDispatcher);
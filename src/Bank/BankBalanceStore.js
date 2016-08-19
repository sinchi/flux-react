import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import BankConstants from './BankConstants';

const __emitter = new EventEmitter();
let balance = 0;
let CHANGE_EVENT = 'change';

let BankBalanceStore = {

  getState(){
    return balance;
  },

  addListener(callback){
    return __emitter.addListener(CHANGE_EVENT, callback);
  }
}

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
  switch(action.type){
    case BankConstants.CREATE_ACCOUNT:
      balance = 0;
      __emitter.emit(CHANGE_EVENT);
      break;
    case BankConstants.DEPOSIT_INTO_ACCOUNT:
      balance = balance + action.ammount;
      __emitter.emit(CHANGE_EVENT);
      break;
    case BankConstants.WITHDREW_FROM_ACCOUNT:
      balance = balance - action.ammount;
      __emitter.emit(CHANGE_EVENT);
      break;
  }
});

export default BankBalanceStore;
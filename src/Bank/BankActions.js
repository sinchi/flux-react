import AppDispatcher from './AppDispatcher';
import BankConstants from './BankConstants';

let BankActions = {

  createAccount(){
    AppDispatcher.dispatch({
      type: BankConstants.CREATE_ACCOUNT,
      ammount : 0
    })
  },

  depositIntoAccount(ammount){
    AppDispatcher.dispatch({
      type: BankConstants.DEPOSIT_INTO_ACCOUNT,
      ammount: ammount
    })
  },

  withdrewFromAccount(ammount){
    AppDispatcher.dispatch({
      type: BankConstants.WITHDREW_FROM_ACCOUNT,
      ammount: ammount
    })
  }
}

export default BankActions;
import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {

  dispatch(action={}){
    console.log('action', action);
    super.dispatch(action);
  }
}

export default new AppDispatcher();
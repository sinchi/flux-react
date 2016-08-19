import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankActions from './Bank/BankActions';
import BankBalanceReduceStore from './Bank/BankBalanceReduceStore';
import { Container } from 'flux/utils';
import BankRewardStore from './Bank/BankRewardStore';

class App extends Component {

  constructor(){
    super(...arguments);
    BankActions.createAccount();
  }

  deposit(){
    BankActions.depositIntoAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = "";
  }

  withdraw(){
    BankActions.withdrewFromAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value ="";
  }


  render() {
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Your points Rewards Tier is { this.state.rewardTiers }</h2>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="ammount" />
          <br/>
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}

App.getStores = () => ([BankBalanceReduceStore, BankRewardStore]);
App.calculateState = (prevState) => ({
  balance: BankBalanceReduceStore.getState(),
  rewardTiers: BankRewardStore.getState()
});

const AppContainer = Container.create(App);
export default AppContainer;

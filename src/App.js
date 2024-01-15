import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import { delegation } from "./eip712funs/delegate";
import { upsertTokenAlias } from "./eip712funs/upsertTokenAlias";
import { createCustody } from "./eip712funs/createCustody";
import { submitEvidence } from "./eip712funs/submitEvidence";
import { registerIdentityRecords } from "./eip712funs/registerIdentityRecords";
import { requestIdentityRecordsVerify } from "./eip712funs/requestIdentityRecordsVerify";
import { setNetworkProperties } from "./eip712funs/setNetworkProperties";
import { createSpendingPool } from "./eip712funs/createSpendingPool";

var ethUtil = require('ethereumjs-util');
var sigUtil = require('eth-sig-util');

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];

      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        `0x0000000000000000000000000000000000000000`,
      );
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance});//, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
    // Update state with the result.
    this.setState({ storageValue: response });
  };

  delegate = async () => {
    const { web3, accounts, contract } = this.state;
    await delegation(web3, accounts, contract)
  }

  upsertTokenAlias = async () => {
    const { web3, accounts, contract } = this.state;
    await upsertTokenAlias(web3, accounts, contract)
  }

  createCustody = async () => {
    const { web3, accounts, contract } = this.state;
    await createCustody(web3, accounts, contract)
  }

  submitEvidence = async () => {
    const { web3, accounts, contract } = this.state;
    await submitEvidence(web3, accounts, contract)
  }

  registerIdentityRecords = async () => {
    const { web3, accounts, contract } = this.state;
    await registerIdentityRecords(web3, accounts, contract)
  }

  requestIdentityRecordsVerify = async () => {
    const { web3, accounts, contract } = this.state;
    await requestIdentityRecordsVerify(web3, accounts, contract)
  }

  setNetworkProperties = async () => {
    const { web3, accounts, contract } = this.state;
    await setNetworkProperties(web3, accounts, contract)
  }

  createSpendingPool = async () => {
    const { web3, accounts, contract } = this.state;
    await createSpendingPool(web3, accounts, contract)
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h2>EIP 712 Example</h2>
        <p>
          Try changing the value stored on <strong>line 51</strong> of App.js.
        </p>
        <div className="button-container">
          <button className="button" onClick={() => this.delegate()}> Delegate </button>
          <button className="button" onClick={() => this.upsertTokenAlias()}> UpsertTokenAlias </button>
          <button className="button" onClick={() => this.createCustody()}> CreateCustody </button>
          <button className="button" onClick={() => this.submitEvidence()}> SubmitEvidence </button>
          <button className="button" onClick={() => this.requestIdentityRecordsVerify()}> RequestIdentityRecordsVerify </button>
          <button className="button" onClick={() => this.setNetworkProperties()}> SetNetworkProperties </button>
          <button className="button" onClick={() => this.createSpendingPool()}> CreateSpendingPool </button>
        </div>
      </div>
    );
  }
}

export default App;

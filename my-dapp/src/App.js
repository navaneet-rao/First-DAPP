import Web3 from "web3";
import React, { Component } from "react";
// import SvelteComponent from 'react-svelte';
// import Header from "./components/Header.svelte";
// import Chat from "./components/Chat.svelte";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    console.log("account:", accounts[0]);
  }

  constructor(props) {
    super(props);
    this.state = { account: "" };
  }

  render() {
    return (
      <div className="containers">
        <h1>Hello World !!!</h1>
        <p>Your Account: [account from state]</p>
      </div>
    );
  }
}

// function App() {
//   async loadBlockchainData() {
//      const web3 = new Web3
//   }
//   return (
//     <div className="=container">
//       {/* <Header /> */}
//       {/* <Chat /> */}

//       <h1>Hello World!!!!!</h1>

//     </div>
//   );
// }

export default App;

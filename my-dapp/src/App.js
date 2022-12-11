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
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8535");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:", network);
  }
  render() {
    return (
      <div className="containers">
        <h1>Hello World !!!</h1>
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

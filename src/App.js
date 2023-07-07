import Web3 from "web3";
import React, { useState } from "react";
import AdjustColRatio from "./component/ColRatio.jsx";
import BlacklistAddress from "./component/BlacklistAddress.jsx";
import PauseTXs from "./component/PauseTX.jsx";
import UpdateTW from "./component/UpdateTW.jsx";
import UpdateSW from "./component/UpdateSW.jsx";
import UpdateGM from "./component/UpdateGM.jsx";
import UpdateTF from "./component/UpdateTF.jsx";
import UpdateOracle from "./component/UpdateOracle.jsx";
import AddZtoken from "./component/AddZtoken.jsx";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  const onConnect = async (e) => {
    e.preventDefault();
    let provider = window.ethereum;
    if (typeof provider !== "undefined") {
      await provider.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);
      console.log(walletAddress);
    } else {
      console.log("Non-ethereum browser detected.Please install Metamask");
    }
  };

  return (
    <div className="App">
      <h1>Baki Admin Portal</ h1>
      <button onClick={onConnect}>Connect to metamask</button>
      <p>{walletAddress}</p>
      <p></p>
      <AdjustColRatio />
      <br></br>
      <AddZtoken />
      <BlacklistAddress />
      <PauseTXs />
      <UpdateTW />
      <UpdateSW />
      <UpdateGM />
      <UpdateTF />
      <UpdateOracle />
    </div>
  );
}

export default App;

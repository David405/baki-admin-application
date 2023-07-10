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
import RemoveZtoken from "./component/RemoveZtoken.jsx";

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
    } else {
      console.log("Non-ethereum browser detected.Please install Metamask");
    }
  };

  return (
    <div className="App">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl">
        Baki Admin Portal
      </h1>
      <div className="flex flex-col float-right">
        <button
          className="grow-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onConnect}
        >
          Connect to metamask
        </button>
        <p>{walletAddress}</p>
      </div>
      <AdjustColRatio />
      <br></br>
      <AddZtoken />
      <br></br>
      <RemoveZtoken />
      <br></br>
      <BlacklistAddress />
      <br></br>
      <PauseTXs />
      <br></br>
      <UpdateTW />
      <br></br>
      <UpdateSW />
      <br></br>
      <UpdateGM />
      <br></br>
      <UpdateTF />
      <br></br>
      <UpdateOracle />
    </div>
  );
}

export default App;

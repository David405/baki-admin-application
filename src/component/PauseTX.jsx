import { useState } from "react";
import useProvider from "../hooks/useProvider";

function PauseTXs() {
  const { contract } = useProvider();

  const pauseTX = async () => {
    const tx = await contract?.pauseTransactions();
    tx.wait();
  };

  const unPauseTX = async () => {
    console.log(contract);
    const tx = await contract?.unPauseTransactions();
    tx.wait();
  };

  return (
    <div>
      <h4>Pause Transactions</h4>
      <button onClick={pauseTX}>Pause</button>
      <button onClick={unPauseTX}>Unpause</button>
    </div>
  );
}

export default PauseTXs;

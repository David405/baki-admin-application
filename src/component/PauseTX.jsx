import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function PauseTXs() {
    const [value, setValue] = useState("");
  const { contract } = useProvider();

  const pauseTX = async () => {
    const tx = await contract?.pauseTransactions();
    tx.wait();
  };

    // useEffect(() => {
    //   if (contract) {
    //     contract?.TxPaused().then((result) => {
    
    //       console.log(result);
    //     });
    //   }
    // }, [contract, contract.methods, value]);

  const unPauseTX = async () => {
    console.log(contract);
    const tx = await contract?.unPauseTransactions();
    tx.wait();
  };

  return (
    <div>
      <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
        Pause Transactions
      </h4>
      <button
        className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
        onClick={pauseTX}
      >
        Pause
      </button>
      <button
        className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
        onClick={unPauseTX}
      >
        Unpause
      </button>
    </div>
  );
}

export default PauseTXs;

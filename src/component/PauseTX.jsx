import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function PauseTXs() {
  const [value, setValue] = useState("");
  const { contract } = useProvider();

  const pauseTX = async () => {
    try {
      await contract
        ?.pauseTransactions()
        .then((tx) => {
          tx.wait();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const unPauseTX = async () => {
    try {
      await contract
        ?.unPauseTransactions()
        .then((tx) => {
          tx.wait();
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
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

import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function UpdateSW() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [value, setValue] = useState("");
  const { contract } = useProvider();

  const updateFee = async () => {
    try {
      await contract
        ?.changeSwapFee(Number(a), Number(b))
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

  useEffect(() => {
    if (contract) {
      contract
        ?.swapFee()
        .then((result) => {
          setValue(ethers.utils.formatUnits(result, 6).toString());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [contract, value]);

  return (
    <div>
      <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
        Update Swap Fee
      </h4>
      <label>Value: {value}</label>
      <div className="flex flex-row">
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number"
          value={a}
          placeholder="a"
          onChange={(e) => setA(e.target.value)}
        />
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number"
          value={b}
          placeholder="b"
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <button
        className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
        onClick={updateFee}
      >
        Update
      </button>
    </div>
  );
}

export default UpdateSW;

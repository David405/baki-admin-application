import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function UpdateGM() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const { contract } = useProvider();
  const [value, setValue] = useState("");

  const updateSplit = async () => {
    const tx = await contract?.changeGlobalMintersFee(Number(a), Number(b));
    tx.wait();
  };

    useEffect(() => {
      if (contract) {
        contract?.globalMintersPercentOfSwapFee().then((result) => {
          setValue(ethers.utils.formatUnits(result, 6).toString());
        });
      }
    }, [contract, value]);

  return (
    <div>
      <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
        Update Global Minter's Split
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
        onClick={updateSplit}
      >
        Update
      </button>
    </div>
  );
}

export default UpdateGM;

import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function AdjustColRatio() {
  const [colRatio, setColRatio] = useState("");
  const { contract } = useProvider();
  const [value, setValue] = useState("");

  const adjustRatio = async () => {
    try {
      await contract
        ?.setCollaterizationRatioThreshold(Number(colRatio))
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

  useEffect(() => {
    if (contract) {
      contract
        ?.COLLATERIZATION_RATIO_THRESHOLD()
        .then((result) => {
          setValue(ethers.utils.formatUnits(result, 0).toString());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [contract, value]);

  return (
    <div>
      <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
        Adjust Collaterization Ratio
      </h4>
      <label>Value: {value}</label>
      <input
        className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        value={colRatio}
        placeholder="number * HALF_MULTIPLIER"
        onChange={(e) => setColRatio(e.target.value)}
      />
      <button
        className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
        onClick={adjustRatio}
      >
        Adjust Ratio
      </button>
    </div>
  );
}

export default AdjustColRatio;

import { useEffect, useState } from "react";
import useProvider from "../hooks/useProvider";
import { ethers } from "ethers";

function UpdateTW() {
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");
  const { contract } = useProvider();

  const updateAddress = async () => {
    try {
      await contract
        ?.addTreasuryWallet(address)
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
        ?.treasuryWallet()
        .then((result) => {
          setValue(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [contract, value]);

  return (
    <div>
      <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
        Treasury Wallet
      </h4>
      <label>Value: {value}</label>
      <input
        className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        value={address}
        placeholder="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
        onClick={updateAddress}
      >
        Update Address
      </button>
    </div>
  );
}

export default UpdateTW;

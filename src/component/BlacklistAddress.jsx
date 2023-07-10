import { useState } from "react";
import useProvider from "../hooks/useProvider";

function BlacklistAddress() {
  const [addressS, setAddressS] = useState("");
  const [addressR, setAddressR] = useState("");
  const { contract } = useProvider();

  const blacklistAddress = async () => {
    const tx = await contract?.blacklistAddress(addressS);
    tx.wait();
  };

  const removeAddress = async () => {
    console.log(contract);
    const tx = await contract?.removeAddressFromBlacklist(addressR);
    tx.wait();
  };

  return (
    <div>
      <div>
        <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
          Add User to Blacklist
        </h4>
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={addressS}
          placeholder="address"
          onChange={(e) => setAddressS(e.target.value)}
        />
        <button
          className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
          onClick={blacklistAddress}
        >
          blacklist user
        </button>
      </div><br></br>
      <div>
        <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
          Remove User from Blacklist
        </h4>
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={addressR}
          placeholder="address"
          onChange={(e) => setAddressR(e.target.value)}
        />
        <button
          className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
          onClick={removeAddress}
        >
          remove user
        </button>
      </div>
    </div>
  );
}

export default BlacklistAddress;

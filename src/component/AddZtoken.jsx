import { useEffect, useState } from "react";
import useOracle from "../hooks/useOracle";

function AddZtoken() {
  const [address, setAddress] = useState("");
  const [nameA, setNameA] = useState("");
  const [zlist, setZlist] = useState("");
  const { contract } = useOracle();

  const addZtoken = async () => {
    const tx = await contract?.addZToken(nameA, address);
    tx.wait();
  };

  useEffect(() => {
    if (contract) {
      contract?.getZTokenList().then((result) => {
        setZlist(result);
      });
    }
  }, [contract, zlist]);

  return (
    <div>
      <div>
        <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
          Add Ztoken
        </h4>
        <label>ZToken List: {zlist.toString()}</label>

        <div className="flex flex-row">
          <input
            className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={nameA}
            placeholder="name in small caps"
            onChange={(e) => setNameA(e.target.value)}
          />
          <input
            className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
          onClick={addZtoken}
        >
          add
        </button>
      </div>
    </div>
  );
}

export default AddZtoken;

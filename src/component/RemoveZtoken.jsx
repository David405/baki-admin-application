import { useEffect, useState } from "react";
import useOracle from "../hooks/useOracle";

function RemoveZtoken() {
  const [nameR, setNameR] = useState("");
  const { contract } = useOracle();

  const removeZtoken = async () => {
    try {
      await contract
        ?.removeZToken(nameR)
        .then((tx) => {
          tx.wait();
          console.log(tx.toString());
        })
        .catch((err) => {
          console.error(err.message);
          alert(err.message)
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <h4 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl">
          Remove Ztoken
        </h4>
        <input
          className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          value={nameR}
          placeholder="name in small caps"
          onChange={(e) => setNameR(e.target.value)}
        />
        <button
          className="w-40 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 inline-flex items-center place-content-center"
          onClick={removeZtoken}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default RemoveZtoken;

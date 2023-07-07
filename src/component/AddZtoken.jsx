import { useState } from "react";
import useOracle from "../hooks/useOracle";

function AddZtoken() {
  const [address, setAddress] = useState("");
  const [nameA, setNameA] = useState("");
  const [nameR, setNameR] = useState("");
  const { contract } = useOracle();

  const addZtoken = async () => {
    const tx = await contract?.addZToken(nameA, address);
    tx.wait();
  };

  const getZtoken = async (name) => {
    const tx = await contract?.getZToken(name);
    tx.wait();

    console.log(tx.toString());
  }

  const removeZtoken = async () => {
    const tx = await contract?.removeZToken(nameR);
    tx.wait();

    console.log(tx.toString());
  };


  return (
    <div>
      <div>
        <h4>Add Ztoken</h4>
        <input
          type="text"
          value={nameA}
          placeholder="name in small caps"
          onChange={(e) => setNameA(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={addZtoken}>add</button>
      </div>
      <div>
        <h4>Remove Ztoken</h4>
        <input
          type="text"
          value={nameA}
          placeholder="name in small caps"
          onChange={(e) => setNameR(e.target.value)}
        />
        <button onClick={removeZtoken}>remove</button>
      </div>
    </div>
  );
}

export default AddZtoken;

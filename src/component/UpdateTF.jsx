import { useState } from "react";
import useProvider from "../hooks/useProvider";

function UpdateTF() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const { contract } = useProvider();

  const updateSplit = async () => {
    const tx = await contract?.changeGlobalMintersFee(Number(a), Number(b));
    tx.wait();
  };

  return (
    <div>
      <h4>Update Treasury Fee</h4>
      <input
        type="number"
        value={a}
        placeholder="a"
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        value={b}
        placeholder="b"
        onChange={(e) => setB(e.target.value)}
      />
      <button onClick={updateSplit}>Update</button>
    </div>
  );
}

export default UpdateTF;

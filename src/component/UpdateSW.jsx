import { useState } from "react";
import useProvider from "../hooks/useProvider";

function UpdateSW() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const { contract } = useProvider();

  const updateFee = async () => {
    const tx = await contract?.changeSwapFee(Number(a), Number(b));
    tx.wait();
  };

  return (
    <div>
      <h4>Update Swap Fee</h4>
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
      <button onClick={updateFee}>Update</button>
    </div>
  );
}

export default UpdateSW;

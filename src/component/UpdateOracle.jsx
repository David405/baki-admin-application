import { useState } from "react";
import useProvider from "../hooks/useProvider";

function UpdateOracle() {
  const [address, setAddress] = useState("");
  const { contract } = useProvider();

  const updateOracle = async () => {
    const tx = await contract?.setOracleAddress(address);
    tx.wait();
  };

  return (
    <div>
      <div>
        <h4>Update Oracle</h4>
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={updateOracle}>update</button>
      </div>
    </div>
  );
}

export default UpdateOracle;

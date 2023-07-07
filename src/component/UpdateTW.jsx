import { useState } from "react";
import useProvider from "../hooks/useProvider";

function UpdateTW() {
  const [address, setAddress] = useState("");
  const { contract } = useProvider();

  const updateAddress = async () => {
    const tx = await contract?.addTreasuryWallet(address);
    tx.wait();
  };

  return (
    <div>
      <h4>Treasury Wallet</h4>
      <input
        type="text"
        value={address}
        placeholder="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={updateAddress}>Update Address</button>
    </div>
  );
}

export default UpdateTW;

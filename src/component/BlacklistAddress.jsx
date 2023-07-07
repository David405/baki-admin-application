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
        <h4>Add User to Blacklist</h4>
        <input
          type="text"
          value={addressS}
          placeholder="address"
          onChange={(e) => setAddressS(e.target.value)}
        />
        <button onClick={blacklistAddress}>blacklist user</button>
      </div>
      <div>
        <h4>Remove User from Blacklist</h4>
        <input
          type="text"
          value={addressR}
          placeholder="address"
          onChange={(e) => setAddressR(e.target.value)}
        />
        <button onClick={removeAddress}>remove user</button>
      </div>
    </div>
  );
}

export default BlacklistAddress;

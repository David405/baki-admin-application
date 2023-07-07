import { useState } from "react";
import useProvider from "../hooks/useProvider";

function AdjustColRatio() {
  const [colRatio, setColRatio] = useState("");
  const { contract } = useProvider();

  const adjustRatio = async () => {
    const tx = await contract?.setCollaterizationRatioThreshold(
      Number(colRatio)
    );
    tx.wait();
  };

  return (
    <div>
      <h4>Adjust Collaterization Ratio</h4>
      <input
        type="text"
        value={colRatio}
        placeholder="number in %"
        onChange={(e) => setColRatio(e.target.value)}
      />
      <button onClick={adjustRatio}>Adjust Ratio</button>
    </div>
  );
}

export default AdjustColRatio;

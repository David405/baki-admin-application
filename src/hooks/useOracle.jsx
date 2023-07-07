import { useEffect, useState, useMemo } from "react";
import { oracle } from "../config";
import oracleAbi from "../contracts/oracle.json";
import { ethers } from "ethers";

const useProvider = () => {
  const [contract, setContract] = useState(null);

  const provider = useMemo(
    () => new ethers.providers.Web3Provider(window.ethereum),
    []
  );

  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      setContract(new ethers.Contract(oracle, oracleAbi, signer));
    }
  }, [provider]);
  return { contract };
};

export default useProvider;

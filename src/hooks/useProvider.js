import { useEffect, useState, useMemo } from "react";
import { vault } from "../config";
import vaultAbi from "../contracts/vault.json";
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
      setContract(new ethers.Contract(vault, vaultAbi, signer));
    }
  }, [provider]);
  return { contract };
};

export default useProvider;

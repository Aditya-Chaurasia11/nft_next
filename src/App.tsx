import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useWriteContract, useReadContract } from "wagmi";
import contractABI from "./relayerABI";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Nft from "./Pages/Nft";
import Transfer from "./Pages/Transfer";
import NftPage from "./Pages/NftPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const result = useReadContract({
    contractABI,
    address: "0x38C03Fac397788430462F072E6Fea539138Ef4b0",
    functionName: "getData",
  });

  useEffect(() => {
    console.log(result);
  }, []);

  return (
    <>
      {/* <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/nft/:address/:index" element={<NftPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./nftpage.css";
import abi from "../relayerABI.js";
// import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import img1 from "../assets/img2.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NftPage = () => {
  const [nftList, setNftlist] = useState({});
  const { address, index } = useParams();

  const allNFT = () => {
    const options = { method: "GET" };

    fetch(
      `https://eth-sepolia.g.alchemy.com/nft/v2/6ToPbDTF5nhiVtF7Zb1eE4fTdZ2_Wrkk/getNFTMetadata?contractAddress=${address}&tokenId=${index}&refreshCache=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNftlist(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // contract && allNFT();
    allNFT();
  }, []);

  const handleClick1 = () => {
    console.log("adadad");

    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const loadProvider = async () => {
    //   if (provider) {
    //     window.ethereum.on("chainChanged", () => {
    //       // Chain has changed, so reload the page
    //       window.location.reload();
    //     });

    //     window.ethereum.on("accountsChanged", () => {
    //       // Accounts have changed, so reload the page
    //       window.location.reload();
    //     });

    //     await provider.send("eth_requestAccounts");
    //     const signer = await provider.getSigner();
    //     const address = await signer.getAddress();

    //     // setAccount(address);
    //     let contractAddress = "0x7e311c97DCD33D10E72fFeFC094a2C0cf3Cd7525";
    //     // let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    //     const contract = new ethers.Contract(contractAddress, abi, signer);

    //     console.log(contract);

    //     if (contract)
    //       await contract.CreateCrossChainAccount(
    //         11155111,
    //         nftList?.contract.address,
    //         nftList?.id.tokenId
    //       );

    //     // setContract(contract);
    //     // setProvider(provider);
    //   } else {
    //     alert("Metamask not installed");
    //   }
    // };
    // provider && loadProvider();
  };

  const handleClick2 = () => {
    console.log("adadad");
  };

  {
    /* <img src={nftList?.metadata?.image}></img> */
  }
  {
    /* <button onClick={handleClick1}> Deploy on sepolia</button>
        <button onClick={handleClick2}> Deploy on op</button> */
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success(`Copied ${address.slice(0, 10)}...`, {
      position: "bottom-right",
    });
  };

  return (
    <>
      <div className="nftpage_container">
        <div className="nftpage_container_left">
          {nftList?.metadata?.image ? (
            <img src={nftList?.metadata?.image}></img>
          ) : (
            <img src={img1}></img>
          )}

          <div className="nftpage_container_left_detail">
            <p>{nftList?.title}</p>

            <img src="https://tokenbound.org/_next/image?url=%2Fopensea.svg&w=32&q=75"></img>
          </div>
        </div>
        <div className="nftpage_container_right">
          <div className="nftpage_container_right_header">
            <div
              className="nftpage_container_right_header_left"
              onClick={copyToClipboard}
            >
              0x8fAC...8B4fb
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4 h-4 iconify iconify--mingcute"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2zm-4 6H5v12h10zm-5 7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm9-11H9v2h6a2 2 0 0 1 2 2v8h2zm-7 7a1 1 0 0 1 .117 1.993L12 13H8a1 1 0 0 1-.117-1.993L8 11z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="nftpage_container_right_header_right">
              <button
                class="rounded-lg px-4 py-2 font-hl text-xs transition hover:scale-105 hover:hue-rotate-15 lg:text-base nftpage_container_button1"
                fdprocessedid="bjbj5g"
              >
                Depoly on optimisum
              </button>
              <button
                class="rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-xs text-white transition hover:scale-105 hover:hue-rotate-15 lg:text-base nftpage_container_button2"
                fdprocessedid="bjbj5g"
              >
                Depoly on sepolia
              </button>
            </div>
          </div>

          <div className="nftpage_container_right_body">
            <button>sepolia</button>
            <button>mumbai</button>
            <button>op-sepoila</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftPage;

import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import SloMoths from '../artifacts/contracts/SloMoths.sol/SloMoths.json';

const contractAddress = '0xe5a713e88E66E5CF3577CaD3BFeCC4C1616915B0';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, SloMoths.abi, signer);


function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <img src={isMinted ? imageURI : 'img/placeholder.png'}></img>
      <div>
        <h5>ID #{tokenId}</h5>
        {isMinted ? (
          <button onClick={mintToken}>
            Mint
          </button>
        ) : (
          <button onClick={getURI}>
            Taken! Show URI
          </button>
        )}
      </div>
        <WalletBalance />

    <h1>SloMoths NFT Collection</h1>
        {Array(totalMinted + 1)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <NFTImage tokenId={i} getCount={getCount} />
            </div>
        ))}
    </div>
  );
}

function NFTImage({ tokenId, getCount }) {
  const contentId = 'QmYVZByViSyjuCiDMamYUrui93q46UpW9i9mpMT6UjobrK';
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://ipfs.io/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  }
};

const mintToken = async () => {
  const connection = contract.connect(signer);
  const addr = connection.address;
  const result = await contract.payToMint(addr, metadataURI, {
    value: ethers.utils.parseEther('0.05'),
  });

  await result.wait();
  getMintedStatus();
};

async function getURI() {
  const uri = await contract.tokenURI(tokenId);
}
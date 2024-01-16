import ClaimNFTButton from "@/components/moleculs/ClaimNFTButton";
import ClaimedNFTList from "@/components/moleculs/ClaimedNFTList";
import ThirdWebContainer from "@/components/moleculs/ThirdWebContainer";

export default function Home() {
  const contractAddress = process.env.ERC721_CONTRACT_ADDRESS;
  const clientId = process.env.THIRDWEB_CLIENT_ID;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start">
      <div className="py-10">
        <h1 className="text-3xl font-bold">NFT Claim Sample App</h1>
      </div>
      <ThirdWebContainer clientId={clientId}>
        <div className="flex flex-col items-center w-full gap-10">
          {/* Claim */}
          <div>
            <ClaimNFTButton contractAddress={contractAddress} />
          </div>
          {/* Preview */}
          <h3>配布済みNFT</h3>
          <div>
            <ClaimedNFTList contractAddress={contractAddress} />
          </div>
        </div>
      </ThirdWebContainer>
    </div>
  );
}

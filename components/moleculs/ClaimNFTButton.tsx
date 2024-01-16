"use client";
import Input from "@/components/atom/Input";
import Loading from "@/components/atom/Loading";
import { Web3Button, useClaimNFT, useContract, useUnclaimedNFTs } from "@thirdweb-dev/react";
import { ChangeEvent, useState } from "react";

interface Props {
  contractAddress: string;
}

export default function ClaimNFTButton(props: Props): JSX.Element {
  const { contract } = useContract(props.contractAddress);
  const { mutateAsync: claimNft, isLoading } = useClaimNFT(contract);
  const { data: unclaimedNft, isLoading: unClaimLoading } = useUnclaimedNFTs(contract as any);
  const [address, setAddress] = useState<string>("");

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <Input value={address} onChange={handleOnChangeInput} placeholder="your address" />
      <Web3Button
        contractAddress={props.contractAddress}
        isDisabled={!unClaimLoading && unclaimedNft?.length === 0}
        action={() => {
          claimNft({ to: address, quantity: 1 });
        }}
      >
        {isLoading || unClaimLoading ? <Loading /> : unclaimedNft?.length === 0 ? "out of stock" : "Claim NFT"}
      </Web3Button>
    </div>
  );
}

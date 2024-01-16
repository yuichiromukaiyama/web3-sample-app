"use client";

import Loading from "@/components/atom/Loading";
import { useClaimedNFTs, useContract } from "@thirdweb-dev/react";

interface Props {
  contractAddress: string;
}

export default function ClaimedNFTList(props: Props): JSX.Element {
  const { contract } = useContract(props.contractAddress);
  const { data: claimedData, isLoading } = useClaimedNFTs(contract as any);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
      {claimedData?.map((e, i) => (
        // 暫定
        <div className="flex flex-col gap-3 items-center justify-start">
          <p>{e.metadata.name}</p>
          <img
            key={i}
            src={e.metadata.image || "/"}
            alt={e.metadata.name?.toString() || "unknown"}
            width={300}
            height={300}
            className="rounded-md focus:scale-105"
          />
          <p>owner</p>
          <p className="text-xs">{e.owner}</p>
        </div>
      ))}
    </div>
  );
}

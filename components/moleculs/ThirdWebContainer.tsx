"use client";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

interface Props {
  children: React.ReactNode;
  clientId: string;
}

/**
 * ThirdWebProvider を提供する
 * children は client side rendering
 */
export default function ThirdWebContainer(props: Props): JSX.Element {
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={props.clientId}>
      {props.children}
    </ThirdwebProvider>
  );
}

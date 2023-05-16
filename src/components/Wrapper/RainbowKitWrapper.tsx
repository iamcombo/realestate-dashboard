import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { ReactNode } from 'react';
import type { Chain } from 'viem';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const RainbowKitWrapper = ({ children }: { children: ReactNode }) => {
  const localChain: Chain = {
    id: 31337,
    name: 'Localhost',
    network: 'localhost',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: ['http://127.0.0.1:8545'],
      },
      public: {
        http: [],
        webSocket: undefined,
      },
    },
    testnet: false,
  };

  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, localChain],
    [
      publicProvider(),
      jsonRpcProvider({
        rpc: (chain) => ({ http: 'http://127.0.0.1:8545' }),
      }),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKitWrapper;

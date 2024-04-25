'use client';

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {argentWallet, ledgerWallet, trustWallet} from "@rainbow-me/rainbowkit/wallets";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: 'Peeps: The decentralized platform',
    projectId: '7f49c7e89e54528522eef8334c58506e',
    transports: {
        [mainnet.id]: http(""), // http('https://eth-mainnet.g.alchemy.com/v2/...')
        [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/jRWeU9pFpeATDtbmRTHOuSuSp5OVVAO0"), // http('https://eth-sepolia.g.alchemy.com/v2/...')
    },
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet],
        }
    ],
    chains: [
        // mainnet,
        sepolia,
        // polygon,
        // optimism,
        // arbitrum,
        base,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    ssr: true,
})

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import React from "react";
import * as AllWalletAdapters from "@solana/wallet-adapter-wallets";

import { WalletNotification } from "./wallet-notification";
import { UnifiedWalletProvider } from "@jup-ag/wallet-adapter";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { metadata, HARDCODED_WALLET_STANDARDS } from "~/config/constants";

import type { WalletName } from "@solana/wallet-adapter-base";
import type { BaseSignerWalletAdapter } from "@solana/wallet-adapter-base";
import type { WalletAdapterWithMutableSupportedTransactionVersions } from "~/config/constants";

interface WalletConnectProviderProps {
  children: React.ReactNode;
}

export function WalletConnectProvider({
  children,
}: WalletConnectProviderProps) {
  const wallets = React.useMemo(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      UnsafeBurnerWalletAdapter: _,
      WalletConnectWalletAdapter,
      ...allwalletAdapters
    } = AllWalletAdapters;

    const walletAdapters = Object.keys(allwalletAdapters)
      .filter((key) => key.includes("Adapter"))
      .map((key) => (allwalletAdapters as any)[key])
      .map((WalletAdapter: any) => new WalletAdapter()); // Intentional any, TS were being annoying

    const walletConnectWalletAdapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> | null =
      (() => {
        const adapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> =
          new WalletConnectWalletAdapter({
            network: WalletAdapterNetwork.Mainnet,
            options: {
              relayUrl: "wss://relay.walletconnect.com",
              projectId: metadata.walletConnectProjectId,
              metadata: {
                name: metadata.name,
                description: metadata.description,
                url: metadata.url,
                icons: metadata.iconUrls,
              },
            },
          });

        // While sometimes supported, it mostly isn't. Should this be dynamic in the wallet-adapter instead?
        adapter.supportedTransactionVersions = new Set(["legacy"]);
        return adapter;
      })();

    return [...walletAdapters, walletConnectWalletAdapter].filter(
      (item) => item?.name && item.icon,
    );
  }, []);

  const params: Omit<Parameters<typeof UnifiedWalletProvider>[0], "children"> =
    React.useMemo(
      () => ({
        wallets: wallets,
        config: {
          autoConnect: false,
          env: "mainnet-beta",
          metadata: {
            name: "UnifiedWallet",
            description: "UnifiedWallet",
            url: "https://jup.ag",
            iconUrls: ["https://jup.ag/favicon.ico"],
          },
          notificationCallback: WalletNotification,
          walletPrecedence: [
            "OKX Wallet" as WalletName,
            "WalletConnect" as WalletName,
          ],
          hardcodedWallets: HARDCODED_WALLET_STANDARDS,
          walletlistExplanation: {
            href: "https://station.jup.ag/docs/additional-topics/wallet-list",
          },
          theme: "dark",
        },
      }),
      [wallets],
    );

  return <UnifiedWalletProvider {...params}>{children}</UnifiedWalletProvider>;
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "~/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

import { cookies } from "next/headers";
import { cn } from "~/lib/utils";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import { Wrapper } from "~/components/layouts/wrapper";
import { SiteHeader } from "~/components/layouts/site-header";
import { WalletConnectProvider } from "~/components/wallet/wallet-connection-provider";

export const metadata = {
  title: "Renaissance",
  description: "build by Renaissance",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <html lang="en">
      <body
        className={cn(
          "dark overflow-x-hidden bg-background font-sans text-foreground antialiased outline-none",
          GeistSans.variable,
        )}
      >
        <TRPCReactProvider>
          <WalletConnectProvider>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                <SiteHeader />
                <Wrapper
                  defaultLayout={defaultLayout}
                  defaultCollapsed={defaultCollapsed}
                  navCollapsedSize={2}
                >
                  {children}
                </Wrapper>
              </div>
            </div>
            <NextTopLoader color="#404040" />
          </WalletConnectProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

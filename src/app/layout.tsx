import "~/styles/globals.css";

import { cn } from "~/lib/utils";
import { fontSans } from "~/lib/fonts";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Birch",
  description: "website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

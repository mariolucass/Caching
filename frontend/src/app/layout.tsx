import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

interface ChildrenInterface {
  children: ReactNode;
}

const RootLayout = ({ children }: ChildrenInterface) => (
  <html lang="en" suppressHydrationWarning={true}>
    <Head />

    {/* <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem={false}
    > */}
    <body className={inter.className}>
      <main className="w-full h-screen flex justify-center items-center">
        {children}
      </main>

      <Toaster />
    </body>
    {/* </ThemeProvider> */}
  </html>
);

export default RootLayout;

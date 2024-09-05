import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import { Modals } from "@/components/modals";
import { Toaster } from "@/components/ui/sonner";
import { JotaiProvider } from "@/components/jotai-provider";
import { ConvexClientProvider } from "@/components/convex-client-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mkaidev | kerja",
  description:
    "Build a Real-Time Slack Clone With Nextjs, React, Tailwind, Auth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            <JotaiProvider>
              <Modals />
              {children}
            </JotaiProvider>
            <Toaster richColors theme="light" position="bottom-center" />
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}

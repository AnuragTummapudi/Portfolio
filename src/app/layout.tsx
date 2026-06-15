import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { MainShell } from "@/components/main-shell";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Tummapudi",
  description:
    "Portfolio of Anurag Tummapudi, an AI engineer building real-time voice agents, GenAI systems, and full-stack AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background font-mono text-foreground">
        <Providers>
          <MainShell>{children}</MainShell>
        </Providers>
      </body>
    </html>
  );
}

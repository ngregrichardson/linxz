import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const comfortaa = Comfortaa({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Linxz | Short, self-destructable links",
  description: "Linxz is the secure, privacy-focused link shortener that puts you in control. Shorten links with the peace of mind that they will expire automatically after your specified date or number of clicks. Ideal for sharing sensitive info without compromising security.",
  keywords: ['link', 'share', 'private', 'secure', 'shorten', 'url', 'linxz'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          comfortaa.variable)}>{children}<Toaster position="bottom-center" /></body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/header";
import { CardProvider } from "@/hooks/useCard";
import { ModalProvider } from "@/hooks/useModal";

export const metadata: Metadata = {
  title: "Card management",
  description: "Card management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CardProvider>
          <ModalProvider>
            <Header>
              {children}
            </Header>
          </ModalProvider>
        </CardProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "RobertWeb",
  description: "Created by Robert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
      </body>
    </html>
  );
}

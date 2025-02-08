import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IAU Coders",
  description: "Frontend for IAU Coders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
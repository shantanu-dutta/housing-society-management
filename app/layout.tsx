import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamuna Square Society",
  description: "Jamuna Square society app",
  icons: "/logo.jpeg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          <div className="flex h-[calc(100vh-68px)] flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64 h-full">
              <Sidebar />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

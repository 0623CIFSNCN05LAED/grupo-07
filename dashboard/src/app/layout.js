import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MercadoArte | Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 text-white ml-[220px] ${inter.className}`}
      >
        <Aside />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

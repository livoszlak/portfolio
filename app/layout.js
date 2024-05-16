import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "BLEP, Inc.",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

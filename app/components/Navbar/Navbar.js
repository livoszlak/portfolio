import Link from "next/link";
import { Fira_Mono } from "next/font/google";

const fira = Fira_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/about" className={fira.className}>
        About
      </Link>

      <Link href="/" className={fira.className}>
        Home
      </Link>
    </nav>
  );
}

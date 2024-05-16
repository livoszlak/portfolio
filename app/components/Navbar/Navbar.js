import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/about" className={pacifico.className}>
        About
      </Link>

      <Link href="/" className={pacifico.className}>
        Home
      </Link>
    </nav>
  );
}

import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className={mono.className}>
        Home
      </Link>

      <Link href="/projects" className={mono.className}>
        Projects
      </Link>

      <Link href="/about" className={mono.className}>
        About
      </Link>
    </nav>
  );
}

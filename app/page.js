import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <title>BLEP, Inc.</title>
      <h1 className={mono.className}>BLEP, Inc.</h1>
    </main>
  );
}

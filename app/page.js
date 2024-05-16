import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="img-container">
        <Image src="/cat.jpg" alt="" fill="true" />
      </div>
    </main>
  );
}

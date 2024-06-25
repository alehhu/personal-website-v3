import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "./components/footer";
import { roboto_mono } from "./fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div className={styles.mainPart}>
        <div className={styles.textContainer}>
          <div className={styles.greeting}>
            Hi I'm Ale
          </div>
          <div className={`${styles.personalIntroduction} ${roboto_mono.className}`}>
          i'm at first year of my BSc in computer science in milan at an unknown university, but I'm planning on transferring to Polytechnic of Milan for computer engineering for the next year to do more physics, hard classes and math.
          <br/><br/>
          I love feeling desperate, being in hard mode, and just lose all my hair :)
          <br/><br/>
          jokes aside.. im quite passionate about engineering
          <br/><br/>
          long term, i hope to 😬 change the world 😬, or something like that
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
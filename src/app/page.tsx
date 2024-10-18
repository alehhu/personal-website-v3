'use client'
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
          I'm a second year computer engineering student, that transferred from computer science after my first year to do more math and physics and engineering classes. Currently I'm pursuing my BSc in Polytechnic of Milan.
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
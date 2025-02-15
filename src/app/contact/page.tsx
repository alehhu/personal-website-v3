import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Montserrat, Roboto } from "next/font/google";
import { roboto_mono } from "../fonts";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const ReadingListPage: React.FC = () => {
    return (
      <main className={styles.main}>
        <Header />
        <div className={`${styles.mainPart} ${montserrat.className}`}>
          <h1>Get in touch.</h1>
          <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
          <div className={styles.buttonContainer}>
            <a href="https://www.linkedin.com/in/alessandrohu" target="_blank" rel="noopener noreferrer" className={styles.button}>
              <FaLinkedin size={30} /> LinkedIn
            </a>
            <a href="mailto:alehhhhu@gmail.com" className={styles.button}>
              <FaEnvelope size={30} /> Email
            </a>
            <a href="https://github.com/alehhu" target="_blank" rel="noopener noreferrer" className={styles.button}>
              <FaGithub size={30} /> GitHub
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
}

export default ReadingListPage;

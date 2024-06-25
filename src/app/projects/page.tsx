import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ProjectsPage: React.FC = () => {
    return (
        <main className={styles.main}>
      <Header></Header>
      <div className={styles.mainPart}>
        <div className={styles.screenContainer}>
          
        </div>
      </div>
      <Footer></Footer>
    </main>
    );
}
export default ProjectsPage;
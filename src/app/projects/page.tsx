import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Screen from "./components/screen";
import NavBar from "./components/navBar";

const ProjectsPage: React.FC = () => {
    return (
        <main className={styles.main}>
      <Header></Header>
      <div className={styles.mainPart}>
        <Screen></Screen>
        <NavBar></NavBar>
      </div>
    </main>
    );
}
export default ProjectsPage;
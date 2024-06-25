import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ReadingListPage: React.FC = () => {
    return (
        <main className={styles.main}>
      <Header></Header>
      
      <Footer></Footer>
    </main>
    );
}
export default ReadingListPage;
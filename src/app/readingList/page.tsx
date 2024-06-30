import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { readingListCollection } from "./readingListData";

const ReadingListPage: React.FC = () => {
    return (
      <main className={styles.main}>
        <Header></Header>
        <div className={styles.mainPart}>
          <video loop autoPlay playsInline muted className={styles.video}>
            <source src="/mountainView.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <div className={styles.readingListBox}>
          <h1>Reading List</h1>
          {readingListCollection.map((book, index) => (
                    <div key={index} >
                      <h2>{book.getTitle()}</h2>
                      <p>{book.getComment()}</p>
                    </div>          
              ))}  
          </div>
        </div>
        <Footer></Footer>
    </main>
    );
}
export default ReadingListPage;
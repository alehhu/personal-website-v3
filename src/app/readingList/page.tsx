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
          <div className={styles.readingListBoxBody}>
            {readingListCollection.map((book, index) => (
                      <div key={index} className={styles.singleBookContainer}>
                        <h2>{book.getTitle()}<span> by {book.getAuthor()}</span></h2>
                        <p>{book.getComment()}</p>
                      </div>          
                ))} 
          </div>
          </div>
        </div>
    </main>
    );
}
export default ReadingListPage;
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReviewBox from "./components/reviewBox";
import { CompletedCourseReview, UncompletedCourseReview, NumericalValuation } from './components/courseReview';
import { CourseReviewsCollection } from "./courseReviewsData";

const CourseReviewPage: React.FC = () => {
  
  return (
    <main className={styles.main}>
      <div>
        <Header></Header>
      </div>
      <div className={styles.mainPart}>
        <div className={styles.reviewsContainer}>
          {CourseReviewsCollection.map((courseReviewData, index) => (
                    <ReviewBox key={index} courseReview={courseReviewData}
                    ></ReviewBox>
              ))}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default CourseReviewPage;

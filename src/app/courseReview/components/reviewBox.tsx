
import { inter, roboto_mono } from "@/app/fonts";
import Link from 'next/link';
import React from 'react';
import { CourseReview, CompletedCourseReview, UncompletedCourseReview, NumericalValuation } from '../components/courseReview';
import CSS from "csstype";
import styles from "./reviewBox.module.css";

interface CourseReviewProps {
    courseReview: CourseReview;
}

const ReviewBox: React.FC<{ courseReview : CourseReview}> = ({ courseReview }) => {

    /*const boxStyle: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
        whiteSpace: "pre-line",

        minWidth: "300px",
        minHeight: "500px",
        border: "2px solid black",
        borderRadius: "6px",
        padding: "10px",

        fontWeight: "600",
        fontSize: "16px",
    }*/
    if(courseReview instanceof CompletedCourseReview) {
        const numericalValuation = courseReview.getNumericalValuation();

        return (
            <div className={`${roboto_mono.className} ${styles.boxStyle}`} >
                {courseReview.getMetadata()}
                <br></br>
                {courseReview.getName()}  
                <br></br><br></br>
                covered material:
                <br></br>
                <ul style={{listStyleType: "disc", paddingLeft: "40px", lineHeight: "42.5px"}}>
                {courseReview.getCoveredMaterials().map((topic, index) => (
                        <li key={index} style={{}}>{topic}</li>
                ))}
                </ul>
                <br></br>
                difficulty: {numericalValuation.getDifficulty()}/5<br></br>
                learned a lot: {numericalValuation.getLearnedALot()}/5<br></br>
                enjoyed course: {numericalValuation.getEnjoyedCourse()}/5<br></br>
                timely grading: {numericalValuation.getTimelyGrading()}/5<br></br>
            </div>
        ); 
    } else return (
            <div className={`${roboto_mono.className} ${styles.boxStyle}`} >
                {courseReview.getMetadata()}
                <br></br>
                {courseReview.getName()}  
                <br></br><br></br>
                coming soon...
                <br></br>
                <br></br>
            </div>
        ); 
    }

export default ReviewBox;
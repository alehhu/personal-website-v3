
import { inter, roboto_mono } from "@/app/fonts";
import Link from 'next/link';
import React from 'react';
import { CourseReview, NumericalValuation } from './CourseReview';
import CSS from "csstype";
import styles from "./reviewBox.module.css";

interface CourseReviewProps {
    courseReview: CourseReview;
}

const ReviewBox: React.FC<CourseReviewProps> = ({ courseReview }) => {

    const numericalValuation = courseReview.getNumericalValuation();

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
};

export default ReviewBox;
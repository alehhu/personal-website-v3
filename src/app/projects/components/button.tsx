'use client'
import CSS from "csstype";
import React from "react";
import styles from "./button.module.css";

const Button: React.FC = () => {
    
    function handleButtonClick() {
        if(windowOpened == 1) {
            trigger(0);
        } else trigger(1);
    }

    const [windowOpened, trigger] = React.useState(0);

    return (
            <button className={`${styles.buttonContainer} ${styles.folder1}`} onClick={handleButtonClick}>
                <div className={`${styles.iconContainer}`}></div>   
                <span>Project01</span> 
            </button>
    );
}
export default Button;
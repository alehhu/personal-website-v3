'use client'
import CSS from "csstype";
import React, { useEffect, useState } from 'react';
import styles from "./button.module.css";
import Window from "./window";
import { useToggle } from "./toggleWindowContext";

/*interface ScreenButtonProps {
    onClick: () => void;
}*/
  
const ScreenButton: React.FC = ({ }) => {

    const { windowIsVisible, toggleWindowVisibility } = useToggle();

    const [position, setPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const container = document.getElementById('screen');
        if (container) {
          const containerWidth = container.clientWidth;
          const containerHeight = container.clientHeight;
        
          const randomLeft = Math.random() * (containerWidth - 420); // Subtract component width
          const randomTop = Math.random() * (containerHeight - 250); // Subtract component height
    
          setPosition({ left: randomLeft, top: randomTop });
          console.log("Position set to: ", { left: randomLeft, top: randomTop });
        }
      }, []);

    return (
        <div>
            <button className={`${styles.buttonContainer} ${styles.folder1}`} onClick={toggleWindowVisibility}>
            <div className={`${styles.iconContainer}`}></div>   
            <span>Project01</span> 
            </button>
            {windowIsVisible && <Window left={position.left} top={position.top} />}
        </div>   
    );
}

export default ScreenButton;
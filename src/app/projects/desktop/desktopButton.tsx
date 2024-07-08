'use client'
import CSS from "csstype";
import { useEffect, useState } from 'react';
import styles from "./desktopButton.module.css";
import Window from "./window";
import { useToggle } from "./toggleWindowContext";

/*interface ScreenButtonProps {
    onClick: () => void;
}*/
  
const DesktopButton: React.FC = ({ }) => {

    const { windowIsVisible, toggleWindowVisibility } = useToggle();

    const [position, setPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const container = document.getElementById('screen');
        if (container) {
          const containerWidth = container.clientWidth;
          const containerHeight = container.clientHeight;
        
          const randomLeft = Math.random() * (containerWidth - 345); // Subtract component width (320) + 25px for folders at right
          const randomTop = Math.random() * (containerHeight - 280); // Subtract component height (250) + 30px for navBar spawn avoidance
    
          setPosition({ left: randomLeft, top: randomTop + 30 });
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

export default DesktopButton;
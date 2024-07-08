// App.tsx
import CSS from "csstype";
import styles from "./window.module.css";
import { inter } from "@/app/fonts";
import { useToggle } from "./toggleWindowContext";

interface WindowPositioningProps {
  left: number;
  top: number;
}

const Window: React.FC<WindowPositioningProps> = ({ left, top,  }) => {

    const { windowIsVisible, toggleWindowVisibility } = useToggle();

    const positionStyle: CSS.Properties = {
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
    }

    return (
        <div className={`${styles.folderWindow}`} style={positionStyle}>
            <header className={styles.header}>
                <div className={styles.banner}></div>
                <span className={styles.title}>BLONDA</span>
                <button className={styles.closeButton} onClick={toggleWindowVisibility}>
                    <div className={styles.buttonGraphicsElement}>
                    </div>
                    x
                    </button>
            </header>
        I'm randomly positioned!
        </div>
    );
    };

export default Window;

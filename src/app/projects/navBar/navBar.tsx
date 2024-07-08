import CSS from "csstype";
import { useEffect, useState } from "react";
import styles from "./navBar.module.css";

const NavBar: React.FC = () => {

    const screenStyle: CSS.Properties = {
        backgroundColor: "white",
        height: "30px",
        //width: "700px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        position: "absolute",
        top: "0",
        
        borderBottom: "1px solid #000",
        display: "flex",
        justifyContent: "space-between",
        left: "0",
        width: "100%",
        zIndex: "5",
        padding: "10px",
        alignItems: "center",
    }

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
        setCurrentTime(new Date());
        }, 15000);

        // Cleanup the interval on component unmount
        return () => {
        clearInterval(timerId);
        };
    }, []);

    const now = currentTime;

    const year = now.getFullYear();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
    const monthNumber = now.getMonth();
    const month = monthNames[monthNumber];
    const day = now.getDate();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12';
    const formattedHours = hours.toString().padStart(2, '0');
    
    let minutes: (number | string) = now.getMinutes();
    minutes = minutes.toString().padStart(2, '0');
    
    return (
        <div style={screenStyle} className={styles.navBarTextStyle}>
            <div className={styles.leftFunctionalBar}>
                <button>
                    
                </button>
            </div>
            <div className={styles.rightTopBar}>
                <div className={styles.userName}>
                    <span>bigCEO</span>
                </div>
                <div className={styles.timeBar}>
                    {formattedHours}:{minutes} - {month}. {day}, {year}
                </div>
            </div>
        </div>
    );
}
export default NavBar;
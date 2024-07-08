import CSS from "csstype";
import NavBar from "../navBar/navBar";
import style from "./flicker.module.css";
import DesktopButton from "./desktopButton";
import { useEffect, useLayoutEffect, useState } from "react";
import { ToggleWindowProvider } from './toggleWindowContext';
import { useMediaQuery } from 'react-responsive';
import styles from "./screen.module.css"

const Screen: React.FC = () => {

    //const isMobile = useMediaQuery({ maxWidth: 833 });
    //let externalDivForMobileResizing: CSS.Properties | undefined = undefined;

    const screenFirstLayerStyle: CSS.Properties = {
        content: " ",
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        background: "linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 50%),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))",
        zIndex: "10",
        backgroundSize: "100% 2px,3px 100%",
        pointerEvents: "none",
    }

    const screenSecondLayerStyle: CSS.Properties = {
        animation: "flicker .15s infinite",
        content: " ",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        background: "rgba(18,16,16,.08)",
        opacity: "0",
        zIndex: "10",
        pointerEvents: "none",          
    }

    return (
            <div id="screen" className={styles.screenStyle}>
                <div style={screenFirstLayerStyle}></div>
                <NavBar></NavBar>
                <ToggleWindowProvider>
                    <DesktopButton ></DesktopButton>
                </ToggleWindowProvider>
                <div style={screenSecondLayerStyle}></div>
            </div>
    );
}
export default Screen;
//           {windowIsVisible && <RectangularComponent onClose={handleClose} />}
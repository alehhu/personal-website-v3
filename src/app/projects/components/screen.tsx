import CSS from "csstype";
import NavBar from "./navBar";
import style from "./flicker.module.css";
import Button from "./button";
import React from "react";
import { ToggleWindowProvider } from './toggleWindowContext';

const Screen: React.FC = () => {

    const screenStyle: CSS.Properties = {
        //backgroundColor: "#E5E5E5",
        width: "700px",
        height: "552px",
        borderRadius: "10px",
        position: "relative",
        paddingTop: "30px",

        boxShadow: "0 0 100px rgba(0,0,0,.7)",
        background: "#fff url(images/bg.png) 0 0 repeat",
        content: " ",
        border: "1px solid #000",
    }

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
        <div id="screen" style={screenStyle}>
            <div style={screenFirstLayerStyle}></div>
            <NavBar></NavBar>
            <ToggleWindowProvider>
                <Button ></Button>
            </ToggleWindowProvider>
            <div style={screenSecondLayerStyle}></div>
        </div>
    );
}
export default Screen;
//           {windowIsVisible && <RectangularComponent onClose={handleClose} />}
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
        //border: "1px solid #000",
    }

    return (
        <div id="screen" style={screenStyle}>
            <NavBar></NavBar>
            <ToggleWindowProvider>
                <Button ></Button>
            </ToggleWindowProvider>
        </div>
    );
}
export default Screen;
//           {windowIsVisible && <RectangularComponent onClose={handleClose} />}
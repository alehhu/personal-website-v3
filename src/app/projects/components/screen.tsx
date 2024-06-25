import CSS from "csstype";
import NavBar from "./navBar";

const Screen: React.FC = () => {

    const screenStyle: CSS.Properties = {
        //backgroundColor: "#E5E5E5",
        width: "700px",
        height: "552px",
        borderRadius: "10px",
        position: "relative",

        boxShadow: "0 0 100px rgba(0,0,0,.7)",
        background: "#fff url(images/bg.png) 0 0 repeat;",
        animation: "flicker .15s infinite",
        content: " ",
    }

    return (
        <div style={screenStyle}>
            <NavBar></NavBar>
        </div>
    );
}
export default Screen;
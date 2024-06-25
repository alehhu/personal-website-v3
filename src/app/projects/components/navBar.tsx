import CSS from "csstype";

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
    }
    
    return (
        <div style={screenStyle}>

        </div>
    );
}
export default NavBar;
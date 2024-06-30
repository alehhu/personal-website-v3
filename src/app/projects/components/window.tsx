// App.tsx
import CSS from "csstype";
import React, { useEffect, useState } from 'react';
import styles from "./window.module.css";

interface WindowPositioningProps {
  left: number;
  top: number;
}

const Window: React.FC<WindowPositioningProps> = ({ left, top,  }) => {

    const positionStyle: CSS.Properties = {
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
    }

    return (
        <div className={`${styles.folderWindow}`} style={positionStyle}>
            <header >
            <span >BLONDA</span>
            <button >x</button>
            </header>
        I'm randomly positioned!
        </div>
    );
    };

export default Window;

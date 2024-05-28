import React, { useEffect, useState } from "react";
import "./style.css"
import axios from "axios";

const ToggleButtonColor = () => {
    const [backgroundColor, setBacgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState('white')

    function handleCLick() {
        setBacgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white')
    }

    return <>
        <section style={{ backgroundColor, color: textColor }}>
            <button onClick={handleCLick} style={{ buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>{backgroundColor === '#1b1b1b' ? "Black Theme" : "White Theme"}</button>
            <section className="content">
                <h1>
                    Welcome To A<br />
                    Real World
                </h1>
            </section>
        </section>
    </>
}

export default ToggleButtonColor;
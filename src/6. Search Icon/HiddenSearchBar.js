import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css"

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState('white')

    const handleClick = (e) => {
        setBgColor("#1a1a1a")
        if(e.target.className === 'container') {
            setShowInput(false)
            setBgColor('white')
        }
    }

    const handleSearchIconClick = () => {
        setShowInput(true)
        setBgColor('#1a1a1a')
    }

    return <>
        <section 
            className="container" 
            style={{ backgroundColor: bgColor }} 
            //cause write in arrow function
            onClick={handleClick}>
            {showInput ? (
                <input type="text" placeholder="Search..." />
            ) : (
                <FaSearch onClick={handleSearchIconClick} />
            )}
        </section>
    </>
}

export default HiddenSearchBar;
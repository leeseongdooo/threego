import React from "react";
import {AiOutlineMenu} from "react-icons/ai";

function Header() {
    return(
        <>
            <header className="Header">
                <h3>Three Go</h3>
                <AiOutlineMenu className="menuIcon"/>
            </header>
        </>
    )
}

export default Header;
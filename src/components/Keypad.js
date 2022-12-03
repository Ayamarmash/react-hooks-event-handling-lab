import React from "react";

function Keypad (){
    function handleTypingPassword(){
        console.log("Entering password...")
    }
    return (
        <>
            <input type="password" onChange={handleTypingPassword}/>

        </>
    )
}

export default Keypad;
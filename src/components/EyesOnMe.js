import React from "react";

function EyesOnMe(){
    function handleEyesOnMeOnFocus(){
        console.log('Good!')
    }
    function handleEyesOnMeOnBlur(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <>
        <button onFocus={handleEyesOnMeOnFocus} onBlur={handleEyesOnMeOnBlur}>Eyes on me</button>
        </>
    )
}
export default EyesOnMe
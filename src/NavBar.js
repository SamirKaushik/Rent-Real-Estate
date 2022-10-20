import React from "react";
const Navbar=()=>{
    return(<>
    <div className="navbar">
        <div className="leftNav">
        <svg idth="15px" height="15px" fill='purple' style={{margin:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 0c17.7 0 32 14.3 32 32V64l352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32C14.3 128 0 113.7 0 96S14.3 64 32 64H64V32C64 14.3 78.3 0 96 0zm96 160H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"/></svg>
            RealRentEstate
        </div>
        <div className="rightNav">
            <button id="login">Login</button>
            <button id="signup">Sign up</button>
        </div>
    </div>
    </>);
}
export default Navbar;
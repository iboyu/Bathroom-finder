import React from "react";
import "./One.css"
import Map from "./Map.js"


function One() {
    return (
        <div className="maindivone">
            <Map />
            <div className="info-container">
                <div className="info-container-header">
                    <input type="radio" id="all"></input>
                </div>
            </div>
        </div >
    )
}

export default One;
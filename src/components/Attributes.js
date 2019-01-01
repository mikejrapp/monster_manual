import React from "react";

const Attributes = () =>{
    return(
        <div className={"attributes"}>

            <div className={"attributes-icon-wrapper"}>
                <div className={"attributes-strength"}>
                    <i className="fas fa-fist-raised fa-3x"></i>
                </div>
                <div className={"attributes-dexterity"}>
                    <i className="fas fa-running fa-3x"></i>
                </div>
                <div className={"attributes-constitution"}>
                    <i className="fas fa-mountain fa-3x"></i>
                </div>
                <div className={"attributes-intelligence"}>
                    <i className="fas fa-brain fa-3x"></i>
                </div>
                <div className={"attributes-wisdom"}>
                    <i className="fas fa-spa fa-3x"></i>
                </div>
                <div className={"attributes-charisma"}>
                    <i className="fas fa-smile-wink fa-3x"></i>
                </div>
            </div>

            <div className={"attributes-text-wrapper"}>
                <p className={"attributes-text-short"}>ATK</p>
                <p className={"attributes-text-short"}>DEX</p>
                <p className={"attributes-text-short"}>CON</p>
                <p className={"attributes-text-short"}>INT</p>
                <p className={"attributes-text-short"}>WIS</p>
                <p className={"attributes-text-short"}>CHA</p>
            </div>

            <div className={"attributes-score-wrapper"}>
                <p className={"attributes-score"}>11</p>
                <p className={"attributes-score"}>16</p>
                <p className={"attributes-score"}>16</p>
                <p className={"attributes-score"}>20</p>
                <p className={"attributes-score"}>14</p>
                <p className={"attributes-score"}>16</p>
            </div>
        </div>
    )
};

export default Attributes;
import React from "react";

const ActionBlock = () =>{
    return(
        <div className={"action-block"}>
            <div className="action-wrapper">
                <h3 className="action-block-search-title">Search The Ancient Tomes</h3>
                <input type="text" className="search"/>
            </div>
        </div>
    )
};

export default ActionBlock;
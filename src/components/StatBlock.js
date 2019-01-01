import React from "react";
import BaseStats from "./BaseStats";
import Attributes from "./Attributes";
import AdditionalStats from "./AdditionalStats";

const StatBlock = () =>{
    return (
        <div className={"stat-block"}>
            <BaseStats/>
            <Attributes/>
            <AdditionalStats/>
        </div>
    )
};

export default StatBlock;
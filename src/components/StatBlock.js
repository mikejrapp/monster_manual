import React from "react";
import BaseStats from "./BaseStats";
import Attributes from "./Attributes";
import AdditionalStats from "./AdditionalStats";

const StatBlock = (props) =>{
    console.log(props);
    return (
        <div className={"stat-block"}>
            <BaseStats
                subject={props.subject}
                baseStats={props.baseStats}
                skills={props.skills}
            />
            <Attributes subject={props.subject}/>
            <AdditionalStats/>
        </div>
    )
};

export default StatBlock;
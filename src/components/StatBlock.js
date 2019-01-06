import React from "react";
import BaseStats from "./BaseStats";
import Attributes from "./Attributes";
import AdditionalStats from "./AdditionalStats";

const StatBlock = (props) =>{
    return (
        <div className={"stat-block"}>
            <BaseStats
                subject={props.subject}
                baseStats={props.baseStats}
                skills={props.skills}
            />
            <Attributes subject={props.subject}/>
            <AdditionalStats
                actions={props.actions}
                legendaryActions={props.legendaryActions}
                specialAbilities={props.specialAbilities}
            />
        </div>
    )
};

export default StatBlock;
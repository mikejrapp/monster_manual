import React from "react";
import Actions from "./Actions";
import LegendaryActions from "./LengendaryActions";
import SpecialAbilities from "./SpecialAbilities";

const AdditionalStats = (props) =>{
    return (
        <div className={"additional-stats"}>

            {/*This wrapper fixes the scroll bar issue*/}
            <div className={"additional-stats-scroll-wrapper"}>

                <Actions actions={props.actions} />

                <LegendaryActions legendaryActions={props.legendaryActions} />

                <SpecialAbilities specialAbilities={props.specialAbilities}/>

            </div>

        </div>
    )
};

export default AdditionalStats;
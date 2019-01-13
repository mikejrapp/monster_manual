import React from "react";

const DamageResistance = (props) => {
    if(props.subject.damageResistances.length > 0){
        return(
            <div>
                <div className="base-stats-title-banner">
                    <h4 className="base-stats-title">Damage Resistances</h4>
                </div>
                <div className="base-stats-wrapper">
                    <p className="base-stats-resistances">
                        {props.subject.damageResistances.map((resistance) =>
                            <span className="base-stats-resistances-span">{resistance}</span>
                        )}
                    </p>
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default DamageResistance;
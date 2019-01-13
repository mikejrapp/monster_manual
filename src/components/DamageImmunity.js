import React from "react";

const DamageImmunity = (props) => {
    if(props.subject.damageImmunities.length > 0){
        return(
            <div>
                <div className="base-stats-title-banner">
                    <h4 className="base-stats-title">Damage Immunities</h4>
                </div>
                <div className="base-stats-wrapper">
                    <p className="base-stats-resistances">
                        {props.subject.damageImmunities.map( (immunity) =>
                            <span className="base-stats-resistances-span">{immunity}</span>
                        )}
                    </p>
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default DamageImmunity;
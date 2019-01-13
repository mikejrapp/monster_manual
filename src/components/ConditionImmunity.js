import React from "react";

const ConditionImmunity = (props) => {
    if(props.subject.conditionImmunities.length > 0){
        return(
            <div>
                <div className="base-stats-title-banner">
                    <h4 className="base-stats-title">Condition Immunities</h4>
                </div>
                <div className="base-stats-wrapper">
                    <p className="base-stats-resistances">
                        {props.subject.conditionImmunities.map((immunity) =>
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

export default ConditionImmunity;
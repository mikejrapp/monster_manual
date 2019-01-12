import React from "react";

const BaseStats = (props) =>{
    const checkSpeed = () => {
        if(props.subject.baseStats.speed){
            return(
                <div className="base-speed-wrapper">{Object.keys(props.subject.baseStats.speed).map((surface) =>
                    <div className="base-speed-item">
                        {surface + " " + props.subject.baseStats.speed[surface] + " ft "}
                    </div>
                )}</div>
            )
        }
    };

    const checkSkills = () => {
        if(props.subject.hasOwnProperty("skills") && Object.keys(props.subject.skills).length > 0){
            return(
                <div>
                    <div className="base-stats-title-banner">
                        <h4 className="base-stats-title">Skills</h4>
                    </div>
                    <div className="base-stats-wrapper">
                        {Object.keys(props.subject.skills).map((skill) =>
                            <p className="base-stats-throws"><span className="base-stats-throws-title">{skill}</span> +{props.subject.skills[skill]}</p>
                        )}
                    </div>
                </div>
            )
        }
    };

    const checkDamageResistance = () => {
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
        }
    };

    const checkDamageImmunity = () => {
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
        }
    };

    const checkConditionImmunity = () => {
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
        }
    };

    const checkSense = () => {
        if(props.subject.senses.length > 0){
            return(
                <div>
                    <div className="base-stats-title-banner">
                        <h4 className="base-stats-title">Senses</h4>
                    </div>
                    <div className="base-stats-wrapper">
                        <p className="base-stats-resistances">
                            {props.subject.senses.map((sense) =>
                                <span className="base-stats-resistances-span">{sense}</span>
                            )}
                        </p>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className={"base-stats"}>

            <div className={"base-stats-card"}>

                <div className="base-stats-card-inner">

                    <div className="base-stats-card-front">
                        <div className={"base-stats-heading"}>
                            <h3 className={"base-stats-heading-header"}>{props.subject.name}</h3>
                            <p className={"base-stats-heading-subtext"}>{props.subject.size} {props.subject.type}, {props.subject.alignment}</p>
                        </div>

                        <div className={"base-stats-icons"}>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-shield-alt fa-3x armor-class icon-full"><span className={"armor-class-span"}>{props.subject.baseStats.ac}</span></i>
                                <i className="fas fa-shield-alt fa-2x armor-class icon-small"><span className={"armor-class-span"}>{props.subject.baseStats.ac}</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-heart fa-3x  health-points icon-full"><span className={"health-points-span"}>{props.subject.baseStats.hp}</span></i>
                                <i className="fas fa-heart fa-2x  health-points icon-small"><span className={"health-points-span"}>{props.subject.baseStats.hp}</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-bolt fa-3x base-speed icon-full">
                                    <span className="base-speed-span">
                                        {checkSpeed()}
                                    </span>
                                </i>
                                <i className="fas fa-bolt fa-2x base-speed icon-small">
                                    <span className="base-speed-span">
                                        {checkSpeed()}
                                    </span>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="base-stats-card-back">

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Saving Throws</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            {Object.keys(props.subject.saves).map((saves) =>{
                                if(props.subject.saves[saves] != null){
                                    return(
                                        <p className="base-stats-throws"><span className="base-stats-throws-title">{saves}</span> +{props.subject.saves[saves]}</p>
                                    )
                                }
                            })}
                        </div>

                        {checkSkills()}

                        {checkDamageResistance()}

                        {checkDamageImmunity()}

                        {checkConditionImmunity()}

                        {checkSense()}

                    </div>
                </div>

            </div>

        </div>
    )
};

export default BaseStats;

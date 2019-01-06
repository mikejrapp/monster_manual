import React from "react";

const BaseStats = (props) =>{
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
                                <i className="fas fa-shield-alt fa-3x armor-class"><span className={"armor-class-span"}>{props.subject.baseStats.ac}</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-heart fa-3x  health-points"><span className={"health-points-span"}>{props.subject.baseStats.hp}</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-bolt fa-3x base-speed"><span className={"base-speed-span"}>{props.subject.baseStats.speed}</span></i>
                            </div>
                        </div>
                    </div>

                    <div className="base-stats-card-back">

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Saving Throws</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            {props.baseStats}
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Skills</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            {props.skills}
                        </div>

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
                </div>

            </div>

        </div>
    )
};

export default BaseStats;

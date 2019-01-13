import React from "react";
import BaseSpeed from "./BaseSpeed";
import Skills from "./Skills";
import DamageResistance from "./DamageResistance";
import DamageImmunity from "./DamageImmunity";
import ConditionImmunity from "./ConditionImmunity";
import Senses from "./Senses";

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
                                        <BaseSpeed subject={props.subject}/>
                                    </span>
                                </i>
                                <i className="fas fa-bolt fa-2x base-speed icon-small">
                                    <span className="base-speed-span">
                                        <BaseSpeed subject={props.subject}/>
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

                        <Skills subject={props.subject}/>

                        <DamageResistance subject={props.subject}/>

                        <DamageImmunity subject={props.subject}/>

                        <ConditionImmunity subject={props.subject}/>

                        <Senses subject={props.subject}/>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default BaseStats;

import React from "react";

const BaseStats = () =>{
    return (
        <div className={"base-stats"}>

            <div className={"base-stats-card"}>

                <div className="base-stats-card-inner">

                    <div className="base-stats-card-front">
                        <div className={"base-stats-heading"}>
                            <h3 className={"base-stats-heading-header"}>Lich</h3>
                            <p className={"base-stats-heading-subtext"}>Medium Undead, any evil alignment</p>
                        </div>

                        <div className={"base-stats-icons"}>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-shield-alt fa-3x armor-class"><span className={"armor-class-span"}>17</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-heart fa-3x  health-points"><span className={"health-points-span"}>135</span></i>
                            </div>
                            <div className={"base-stats-icons_wrapper"}>
                                <i className="fas fa-bolt fa-3x base-speed"><span className={"base-speed-span"}>30 ft</span></i>
                            </div>
                        </div>
                    </div>

                    <div className="base-stats-card-back">

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Saving Throws</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-throws">CON +10</p>
                            <p className="base-stats-throws">INT +12</p>
                            <p className="base-stats-throws">WIS +9</p>
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Skills</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-throws">Arcana +19</p>
                            <p className="base-stats-throws">History +12</p>
                            <p className="base-stats-throws">Insight +9</p>
                            <p className="base-stats-throws">Perception +9</p>
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Damage Resistances</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-resistances">Cold, Lightning, Necrotic</p>
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Damage Immunities</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-resistances">Poison, Bludgeoning, Piercing, Slashing from non magical items</p>
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Condition Immunities</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-resistances">Charmed, Exhaustion, Frightened, Paralyzed, Poisoned</p>
                        </div>

                        <div className="base-stats-title-banner">
                            <h4 className="base-stats-title">Senses</h4>
                        </div>
                        <div className="base-stats-wrapper">
                            <p className="base-stats-resistances">Truesight 120ft, Passive Perception 19</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default BaseStats;

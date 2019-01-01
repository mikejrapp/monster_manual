import React from "react";

const BaseStats = () =>{
    return (
        <div className={"base-stats"}>

            <div className={"base-stats-card"}>

                <div className={"base-stats-card-side base-stats-card-front"}>
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

                <div className={"base-stats-card-side base-stats-card-back"}>
                    test
                </div>

            </div>

        </div>
    )
};

export default BaseStats;

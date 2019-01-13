import React from "react";

const SpecialAbilities = (props) => {
    if(props.specialAbilities.length > 0){
        return(
            <div className={"additional-stats-special-wrapper"}>
                <div className={"additional-stats-special-banner"}>
                    <h2>Special Abilities</h2>
                </div>
                {
                    props.specialAbilities.map((specialAbilites) => {
                        return(
                            <div className={"additional-stats-text-wrapper"}>
                                <h3>{specialAbilites.name}</h3>
                                <p>{specialAbilites.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return null;
    }
};

export default SpecialAbilities;
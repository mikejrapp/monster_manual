import React from "react";

const AdditionalStats = (props) =>{

    const checkAction = () => {
        if(props.actions){
            return(
                <div className={"additional-stats-actions-wrapper"}>
                    <div className={"additional-stats-actions-banner"}>
                        <h2>Actions</h2>
                    </div>
                    {
                        props.actions.map((action) => {
                            return(
                                <div className={"additional-stats-text-wrapper"}>
                                    <h3>{action.name}</h3>
                                    <p>{action.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    };

    const checkLegendary = () => {
        if(props.legendaryActions.length > 0){
            return(
                <div className={"additional-stats-legendary-wrapper"}>
                    <div className={"additional-stats-legendary-banner"}>
                        <h2>Legendary Actions</h2>
                    </div>
                    {
                        props.legendaryActions.map((legendaryAction) => {
                            return(
                                <div className={"additional-stats-text-wrapper"}>
                                    <h3>{legendaryAction.name}</h3>
                                    <p>{legendaryAction.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    };

    const checkSpecial = () => {
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
        }
    };

    return (
        <div className={"additional-stats"}>

            {/*This wrapper fixes the scroll bar issue*/}
            <div className={"additional-stats-scroll-wrapper"}>

                {checkAction()}

                {checkLegendary()}

                {checkSpecial()}

            </div>

        </div>
    )
};

export default AdditionalStats;
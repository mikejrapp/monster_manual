import React from 'react';

const LegendaryActions = (props) => {
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
    } else {
        return null;
    }
};

export default LegendaryActions;
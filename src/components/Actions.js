import React from "react";

const Actions = (props) => {
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
    } else {
        return null;
    }
};

export default Actions;
import React from 'react';

const BaseSpeed = (props) => {
    if(props.subject.baseStats.speed){
        return(
            <div className="base-speed-wrapper">{Object.keys(props.subject.baseStats.speed).map((surface) =>
                <div className="base-speed-item">
                    {surface + " " + props.subject.baseStats.speed[surface] + " ft "}
                </div>
            )}</div>
        )
    } else {
        return null;
    }
};

export default BaseSpeed;
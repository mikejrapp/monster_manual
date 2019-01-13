import React from "react";

const Senses = (props) => {
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
    } else {
        return null;
    }
};

export default Senses;
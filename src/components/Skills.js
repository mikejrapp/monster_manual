import React from "react";

const Skills = (props) => {
    if(props.subject.hasOwnProperty("skills") && Object.keys(props.subject.skills).length > 0){
        return(
            <div>
                <div className="base-stats-title-banner">
                    <h4 className="base-stats-title">Skills</h4>
                </div>
                <div className="base-stats-wrapper">
                    {Object.keys(props.subject.skills).map((skill) =>
                        <p className="base-stats-throws"><span className="base-stats-throws-title">{skill}</span> +{props.subject.skills[skill]}</p>
                    )}
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default Skills;
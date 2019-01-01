import React from "react";

const SubjectText = (props) =>{
    return (
        <div className={"subject-text"}>
            <div className={"subject-text--wrapper"}>
                <h3 className={"subject-text--header"}>{props.subject}</h3>
                <p className={"subject-text--body"}>{props.subjectBody}</p>
            </div>
        </div>
    )
};

export default SubjectText;
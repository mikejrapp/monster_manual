import React from "react";

const SubjectText = (props) =>{
    console.log(props);
    return (
        <div className={"subject-text"}>
            <div className={"subject-text--wrapper"}>
                <h3 className={"subject-text--header"}>Subject: {props.subject}</h3>
                <h4 className={"subject-text--body"}>Challenge Rating: {props.challengeRating}</h4>
            </div>
        </div>
    )
};

export default SubjectText;
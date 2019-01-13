import React from "react";
import SubjectImage from "./SubjectImage";
import SubjectText from "./SubjectText";

const SubjectCard = (props) =>{
    return (
        <div className={"subject-card"}>
            <SubjectImage/>
            <SubjectText
                subject={props.subject}
                challengeRating={props.challengeRating}
            />
        </div>
    )
};

export default SubjectCard;
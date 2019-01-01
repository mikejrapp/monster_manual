import React from "react";
import SubjectCard from "./SubjectCard";
import StatBlock from "./StatBlock";
import ActionBlock from "./ActionBlock";

const Grid = (props) =>{
    return (
        <div className={"grid"}>
            <SubjectCard
                subject={props.subject}
                subjectBody={props.subjectBody}
            />
            <StatBlock/>
            <ActionBlock/>
        </div>
    );
};

export default Grid;
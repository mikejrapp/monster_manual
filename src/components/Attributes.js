import React from "react";

const Attributes = (props) =>{
    return(
        <div className={"attributes"}>

            <div className={"attributes-icon-wrapper"}>
                <div className={"attributes-strength"}>
                    <i className="fas fa-fist-raised fa-3x icon-full"></i>
                    <i className="fas fa-fist-raised fa-2x icon-small"></i>
                </div>
                <div className={"attributes-dexterity"}>
                    <i className="fas fa-running fa-3x icon-full"></i>
                    <i className="fas fa-running fa-2x icon-small"></i>
                </div>
                <div className={"attributes-constitution"}>
                    <i className="fas fa-mountain fa-3x icon-full"></i>
                    <i className="fas fa-mountain fa-2x icon-small"></i>
                </div>
                <div className={"attributes-intelligence"}>
                    <i className="fas fa-brain fa-3x icon-full"></i>
                    <i className="fas fa-brain fa-2x icon-small"></i>
                </div>
                <div className={"attributes-wisdom"}>
                    <i className="fas fa-spa fa-3x icon-full"></i>
                    <i className="fas fa-spa fa-2x icon-small"></i>
                </div>
                <div className={"attributes-charisma"}>
                    <i className="fas fa-smile-wink fa-3x icon-full"></i>
                    <i className="fas fa-smile-wink fa-2x icon-small"></i>
                </div>
            </div>

            <div className={"attributes-text-wrapper"}>
                <p className={"attributes-text-short"}>ATK</p>
                <p className={"attributes-text-short"}>DEX</p>
                <p className={"attributes-text-short"}>CON</p>
                <p className={"attributes-text-short"}>INT</p>
                <p className={"attributes-text-short"}>WIS</p>
                <p className={"attributes-text-short"}>CHA</p>
            </div>

            <div className={"attributes-score-wrapper"}>
                <p className={"attributes-score"}>{props.subject.attributes.strength}</p>
                <p className={"attributes-score"}>{props.subject.attributes.dexterity}</p>
                <p className={"attributes-score"}>{props.subject.attributes.constitution}</p>
                <p className={"attributes-score"}>{props.subject.attributes.intelligence}</p>
                <p className={"attributes-score"}>{props.subject.attributes.wisdom}</p>
                <p className={"attributes-score"}>{props.subject.attributes.charisma}</p>
            </div>
        </div>
    )
};

export default Attributes;
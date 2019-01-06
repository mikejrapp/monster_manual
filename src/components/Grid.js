import React from "react";
import SubjectCard from "./SubjectCard";
import StatBlock from "./StatBlock";
import ActionBlock from "./ActionBlock";

class Grid extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            subject: {
                name: "lich",
                description: "A lich often haunts the abode it favored in life, such as a lonely tower, a haunted ruin, or an " +
                    "academy of black magic. Alternatively, some liches construct secret tombs filled with powerful guardians " +
                    "and traps.",
                type: "undead",
                size: "medium",
                alignment: "any evil alignment",
                baseStats: {
                    ac: 135,
                    hp: 17,
                    speed: "30 ft"
                },
                attributes: {
                    strength: 11,
                    dexterity: 16,
                    constitution: 16,
                    intelligence: 20,
                    wisdom: 14,
                    charisma: 16,
                },
                saves: {
                    con: 10,
                    int: 12,
                    wis: 9
                },
                skills: {
                    arcana: 19,
                    history: 12,
                    insight: 9,
                    perception: 9
                },
                damageVulnerabilities: [],
                damageResistances: [
                    "Cold",
                    "Lightning",
                    "Necrotic"
                ],
                damageImmunities: [
                    "Poison",
                    "Bludgeoning",
                    "Piercing",
                    "Slashing from non magical items"
                ],
                conditionImmunities: [
                    "Charmed",
                    "Exhaustion",
                    "Frightened",
                    "Paralyzed",
                    "Poisoned"
                ],
                senses: [
                    "Truesight 120ft.",
                    "Passive Perception 19"
                ]
            },
        };

        this.base = Object.keys(this.state.subject.saves).map((saves) =>
            <p className="base-stats-throws"><span className="base-stats-throws-type">{saves}</span> +{this.state.subject.saves[saves]}</p>
        );

        this.skillMap = Object.keys(this.state.subject.skills).map((skill) =>
            <p className="base-stats-throws"><span className="base-stats-throws-title">{skill}</span> +{this.state.subject.skills[skill]}</p>
        )
    }


    render (){
        return (
            <div className={"grid"}>
                <SubjectCard
                    subject={this.state.subject.name}
                    subjectBody={this.state.subject.description}
                />
                <StatBlock
                    subject={this.state.subject}
                    baseStats={this.base}
                    skills={this.skillMap}
                />
                <ActionBlock/>
            </div>
        );
    }
}

export default Grid;
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
                    str: null,
                    dex: null,
                    con: 10,
                    int: 12,
                    wis: 9,
                    cha: null
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
                    "Necrotic",
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
                ],
                actions: [
                    {
                        name: "Paralyzing Touch",
                        description: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold " +
                            "damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 " +
                            "minute. The target can repeat the saving throw at the end of each of its turns, ending the " +
                            "effect on itself on a success."
                    }
                ],
                legendaryActions: [
                    {
                        name: "Cantrip",
                        description: "The lich casts a cantrip"
                    },
                    {
                        name: "Paralyzing Touch",
                        description: "The lich uses its paralyzing touch"
                    },
                    {
                        name: "Frightening Gaze",
                        description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The " +
                            "target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened " +
                            "for 1 minute. The frightened target can repeat the saving throw at the end of each of its " +
                            "turns, ending the effect on itself on a success. If a target's saving throw is successful " +
                            "or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
                    },
                    {
                        name: "Disrupt Life",
                        description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution" +
                            " saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half" +
                            " as much damage on a successful one."
                    }
                ],
                specialAbilities: [
                    
                ]
            },
        };

        this.base = Object.keys(this.state.subject.saves).map((saves) => {
            if(this.state.subject.saves[saves] != null){
                return(
                    <p className="base-stats-throws"><span className="base-stats-throws-title">{saves}</span> +{this.state.subject.saves[saves]}</p>
                )
            }
        });

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
                    actions={this.state.subject.actions}
                    legendaryActions={this.state.subject.legendaryActions}
                    specialAbilities={this.state.subject.specialAbilities}
                />
                <ActionBlock/>
            </div>
        );
    }
}

export default Grid;
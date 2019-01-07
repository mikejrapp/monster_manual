import React from "react";
import SubjectCard from "./SubjectCard";
import StatBlock from "./StatBlock";
import ActionBlock from "./ActionBlock";

class Grid extends React.Component{
    constructor(props) {
        super(props);

        const getMonster = () => {
            fetch("https://api-beta.open5e.com/monsters/?name=Mike")
                .then(data => {return data.json()})
                .then(response => {

                    const result = response.results[0];
                    if(result){
                        console.log(result.special_abilities);
                        this.setState(
                            {
                                subject: {
                                    name: result.name,
                                    type: result.type,
                                    size: result.size,
                                    alignment: result.alignment,
                                    baseStats: {
                                        ac: result.armor_class,
                                        hp: result.hit_points,
                                        speed: result.speed.walk
                                    },
                                    attributes: {
                                        strength: result.strength,
                                        dexterity: result.dexterity,
                                        constitution: result.constitution,
                                        intelligence: result.intelligence,
                                        wisdom: result.wisdom,
                                        charisma: result.charisma,
                                    },
                                    saves: {
                                        str: result.strength_save,
                                        dex: result.dexterity_save,
                                        con: result.constitution_save,
                                        int: result.intelligence_save,
                                        wis: result.wisdom_save,
                                        cha: result.charisma_save
                                    },
                                    skills: {
                                        //todo figure out how to parse out the skills since they are not separated
                                    },
                                    damageVulnerabilities: result.damage_vulnerabilities ? result.damage_vulnerabilities.split(", ") : [],
                                    damageResistances: result.damage_resistances ? result.damage_resistances.split(", ") : [],
                                    damageImmunities: result.damage_immunities ? result.damage_immunities.split(", ") : [],
                                    conditionImmunities: result.condition_immunities ? result.condition_immunities.split(", ") : [],
                                    senses: result.senses ? result.senses.split(", ") : [],
                                    actions: result.actions ? result.actions : [],
                                    legendaryActions: result.legendary_actions ? result.legendary_actions : [],
                                    specialAbilities: result.special_abilities ? result.special_abilities : [],
                                }
                            }
                        )
                    }

                    else{
                        this.setState(
                            {
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
                                            desc: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold " +
                                                "damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 " +
                                                "minute. The target can repeat the saving throw at the end of each of its turns, ending the " +
                                                "effect on itself on a success."
                                        }
                                    ],
                                    legendaryActions: [
                                        {
                                            name: "Cantrip",
                                            desc: "The lich casts a cantrip"
                                        },
                                        {
                                            name: "Paralyzing Touch",
                                            desc: "The lich uses its paralyzing touch"
                                        },
                                        {
                                            name: "Frightening Gaze",
                                            desc: "The lich fixes its gaze on one creature it can see within 10 feet of it. The " +
                                                "target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened " +
                                                "for 1 minute. The frightened target can repeat the saving throw at the end of each of its " +
                                                "turns, ending the effect on itself on a success. If a target's saving throw is successful " +
                                                "or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
                                        },
                                        {
                                            name: "Disrupt Life",
                                            desc: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution" +
                                                " saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half" +
                                                " as much damage on a successful one."
                                        }
                                    ],
                                    specialAbilities: [

                                    ]
                                }
                            }
                        )
                    }
                })
        };

        getMonster();

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
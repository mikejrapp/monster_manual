import React from "react";
import SubjectCard from "./SubjectCard";
import StatBlock from "./StatBlock";
import ActionBlock from "./ActionBlock";

class Grid extends React.Component{

    getMonster = (event) => {
        let searchTerm = event.target.value;
        searchTerm = searchTerm.replace(/\b\w/gm, char => char.toUpperCase());

        fetch("https://api-beta.open5e.com/monsters/?name=" + searchTerm)
            .then(data => {return data.json()})
            .then(response => {

                const result = response.results[0];
                if(result){
                    this.setState(
                        {
                            subject: {
                                name: result.name,
                                type: result.type,
                                size: result.size,
                                alignment: result.alignment,
                                challengeRating: result.challenge_rating,
                                baseStats: {
                                    ac: result.armor_class,
                                    hp: result.hit_points,
                                    speed: result.speed
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
            })
    };

    constructor(props) {
        super(props);

        this.state = {
            subject: {
                name: null,
                description: null,
                type: null,
                size: null,
                alignment: null,
                challengRating: null,
                baseStats: {
                    ac: null,
                    hp: null,
                    speed: null
                },
                attributes: {
                    strength: null,
                    dexterity: null,
                    constitution: null,
                    intelligence: null,
                    wisdom: null,
                    charisma: null,
                },
                saves: {
                    str: null,
                    dex: null,
                    con: null,
                    int: null,
                    wis: null,
                    cha: null
                },
                skills: {},
                damageVulnerabilities: [],
                damageResistances: [],
                damageImmunities: [],
                conditionImmunities: [],
                senses: [],
                actions: [],
                legendaryActions: [],
                specialAbilities: []
            },
        };
    }


    render (){
        return (
            <div className={"grid"}>
                <SubjectCard
                    subject={this.state.subject.name}
                    challengeRating={this.state.subject.challengeRating}
                />
                <StatBlock
                    subject={this.state.subject}
                    actions={this.state.subject.actions}
                    legendaryActions={this.state.subject.legendaryActions}
                    specialAbilities={this.state.subject.specialAbilities}
                />
                <ActionBlock handleSearch={this.getMonster.bind(this)}/>
            </div>
        );
    }
}

export default Grid;
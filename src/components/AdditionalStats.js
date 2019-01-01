import React from "react";

const AdditionalStats = () =>{
    return (
        <div className={"additional-stats"}>

            {/*This wrapper fixes the scroll bar issue*/}
            <div className={"additional-stats-scroll-wrapper"}>

                <div className={"additional-stats-actions-wrapper"}>
                    <div className={"additional-stats-actions-banner"}>
                        <h2>Actions</h2>
                    </div>
                    <div className={"additional-stats-text-wrapper"}>
                        <h3>Paralyzing Touch</h3>
                        <p>
                            Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target
                            must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can
                            repeat the saving throw at the end of each of its turns, ending the effect on itself on a
                            success.
                        </p>
                    </div>
                </div>

                <div className={"additional-stats-special-wrapper"}>
                    <div className={"additional-stats-special-banner"}>
                        <h2>Special Actions</h2>
                    </div>
                    <div className={"additional-stats-special-text-wrapper"}>
                        <h3>Frightening Gaze (Costs 2 Actions)</h3>
                        <p>
                            The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed
                            on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The
                            frightened target can repeat the saving throw at the end of each of its turns, ending the effect
                            on itself on a success. If a target's saving throw is successful or the effect ends for it, the
                            target is immune to the lich's gaze for the next 24 hours.
                        </p>

                        <h3>Disrupt Life (Costs 3 Actions)</h3>
                        <p>
                            Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving
                            throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much
                            damage on a successful one.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default AdditionalStats;

{/*
<div className={"additional-stats-left-column"}>
    <div className={"additional-stats-left-wrapper"}>
        <h3>Saving Throws</h3>
        <p><span>CON +10</span><span>INT +12</span><span>WIS +9</span> </p>
    </div>
    <div className={"additional-stats-left-wrapper"}>
        <h3>Skills</h3>
        <p><span>Arcana +19</span><span>History +12</span><span>Insight +9</span><span>Perception +9</span> </p>
    </div>
    <div className={"additional-stats-left-wrapper"}>
        <h3>Damage Resistance</h3>
        <p><span>Cold</span><span>Lightning</span><span>Necrotic</span></p>
    </div>
    <div className={"additional-stats-left-wrapper"}>
        <h3>Damage Immunities</h3>
        <p><span>Poison</span><span>Bludgeoning</span><span>Piercing</span><span>Slashing from non magical</span></p>
    </div>
</div>*/}

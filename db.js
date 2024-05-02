const items = {};

items["Meat Nugget"] = {
  Rarity: "Common",
  Pickup: "Enemies drop chunks of healing meat.",
  Desc: "<span class='d'>8%</span> chance on hit to <span class='extra'>drop 2 meat nuggets</span> that <span class='g'>heal</span> for <span class='g'>2x8</span> <span class='c_stack'>(+6 per stack) </span><span class='g'>health</span>.",
  Category: ["Healing"],
  Icon: "Meatnugget.png",
};
items["Fire Shield"] = {
  Rarity: "Common",
  Pickup: "Retaliate on taking heavy damage.",
  Desc: "After taking more than <span class='r'>10% of your health</span> as damage, explode for <span class='d'>400%</span> <span class='c_stack'>(+200% per stack) </span><span class='d'>damage</span>, <span class='extra'>knocking enemies away</span> <span class='c_stack'>(+20% force per stack)</span>.",
  Category: ["Damage"],
  Icon: "Fireshield.png",
};
items["Bustling Fungus"] = {
  Rarity: "Common",
  Pickup: "Heal quickly when standing still for 2 seconds.",
  Desc: "After standing still for 2 seconds, <span class='g'>heal</span> for <span class='g'>4.5%</span> <span class='c_stack'>(+4.5% per stack)</span> of your <span class='g'>health</span> every second to yourself and nearby allies.",
  Category: ["Healing"],
  Icon: "Bustlingfungus.png",
};
items["Lens Maker's Glasses"] = {
  Rarity: "Common",
  Pickup: "Chance to deal double damage.",
  Desc: "Your attacks have a <span class='d'>10%</span> <span class='c_stack'>(+7% per stack)</span> chance to <span class='d'>'Critically Strike'</span>, dealing <span class='d'>double damage</span>.",
  Category: ["Damage"],
  Icon: "Lensmakersglasses.png",
};
items["Sprouting Egg"] = {
  Rarity: "Common",
  Pickup: "Rapidly heal outside of danger.",
  Desc: "After not being hit for 7 seconds, increase <span class='g'>health regeneration</span> by <span class='g'>2.4</span> <span class='c_stack'>(+2.4 per stack) </span><span class='g'>hp</span> per second.",
  Category: ["Healing"],
  Icon: "Sproutingegg.png",
};
items["Headstompers"] = {
  Rarity: "Common",
  Pickup: "Hurt enemies by falling.",
  Desc: "Hurt enemies by falling for up to <span class='d'>600%</span> <span class='c_stack'>(+300% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage"],
  Icon: "Headstompers.png",
};
items["Life Savings"] = {
  Rarity: "Common",
  Pickup: "Gain gold over time.",
  Desc: "Generate <span class='d'>$1</span> <span class='c_stack'>(+$1 per stack)</span> every 3 seconds. Scales with time.",
  Category: ["Utility"],
  Icon: "Lifesavings.png",
};
items["Barbed Wire"] = {
  Rarity: "Common",
  Pickup: "Hurts nearby enemies.",
  Desc: "Hurt <span class='d'>all</span> enemies within <span class='d'>1m</span> <span class='c_stack'>(+0.2m per stack)</span> for <span class='d'>50%</span> <span class='c_stack'>(+10% per stack) </span><span class='d'>damage</span> every <span class='d'>0.5</span> seconds.",
  Category: ["Damage"],
  Icon: "Barbedwire.png",
};
items["Rusty Knife"] = {
  Rarity: "Common",
  Pickup: "Chance to bleed on hit.",
  Desc: "<span class='d'>15%</span> <span class='c_stack'>(+15% per stack) </span><span class='r'>chance to bleed</span> an enemy for <span class='d'>4x35% TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Rustyknife.png",
};
items["Mysterious Vial"] = {
  Rarity: "Common",
  Pickup: "Increased health regeneration.",
  Desc: "Increase <span class='g'>health regeneration</span> by <span class='g'>0.84</span> <span class='c_stack'>(+0.84 per stack) </span><span class='g'>hp</span> per second.",
  Category: ["Healing"],
  Icon: "Mysteriousvial.png",
};
items["Mortar Tube"] = {
  Rarity: "Common",
  Pickup: "Chance to launch a mortar.",
  Desc: "<span class='d'>9%</span> chance on hit to fire a mortar for <span class='d'>170%</span> <span class='c_stack'>(+170% per stack) </span><span class='d'>TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Mortartube.png",
};
items["Warbanner"] = {
  Rarity: "Common",
  Pickup:
    "Drop a Warbanner on level up or activating the teleporter, giving you great strength.",
  Desc: "On <span class='extra'>level up</span> or <span class='extra'>activating the Teleporter</span>, drop a banner that strengthens all allies within <span class='d'>4.6m</span> <span class='c_stack'>(+1.4m per stack)</span>. Raise <span class='d'>attack</span> and <span class='extra'>movement</span> speed by <span class='d'>30%</span> and damage by <span class='d'>4</span>. Also <span class='g'>heals</span> for <span class='g'>1%</span> of your <span class='g'>health</span> every second.",
  Category: ["Damage", "Utility", "Healing"],
  Icon: "Warbanner.png",
};
items["Monster Tooth"] = {
  Rarity: "Common",
  Pickup: "Heal after kills.",
  Desc: "Killing an enemy heals you for <span class='g'>10</span> <span class='c_stack'>(+5 per stack) </span><span class='g'>health</span>.",
  Category: ["Healing"],
  Icon: "Monstertooth.png",
};
items["Soldier's Syringe"] = {
  Rarity: "Common",
  Pickup: "Increases attack speed.",
  Desc: "Increases <span class='d'>attack speed</span> by <span class='d'>12%</span> <span class='c_stack'>(+12% per stack)</span>.",
  Category: ["Damage"],
  Icon: "Soldierssyringe.png",
};
items["Crowbar"] = {
  Rarity: "Common",
  Pickup: "Deal bonus damage to healthy monsters.",
  Desc: "Deal <span class='d'>+50%</span> <span class='c_stack'>(+30% per stack) </span><span class='d'>damage</span> to enemies above <span class='d'>80% health</span>.",
  Category: ["Damage"],
  Icon: "Crowbar.png",
};
items["Medkit"] = {
  Rarity: "Common",
  Pickup: "Receive a delayed heal after taking damage.",
  Desc: "<span class='g'>Heal</span> for <span class='g'>10</span> <span class='c_stack'>(+10 per stack) </span><span class='g'>health</span> <span class='extra'>1.5 seconds</span> after getting hurt.",
  Category: ["Healing"],
  Icon: "Medkit.png",
};
items["Bundle of Fireworks"] = {
  Rarity: "Common",
  Pickup: "Activating an interactable launches fireworks at nearby enemies.",
  Desc: "Activating an interactable <span class='d'>launches 6</span> <span class='c_stack'>(+3 per stack) </span><span class='d'>fireworks</span> that deal <span class='d'>300% base damage</span>.",
  Category: ["Damage"],
  Icon: "Bundleoffireworks.png",
};
items["Backup Magazine"] = {
  Rarity: "Common",
  Pickup: "Add an extra charge of your Secondary skill.",
  Desc: "Add <span class='extra'>+1</span> <span class='c_stack'>(+1 per stack)</span> charge of your <span class='extra'>Secondary skill</span>.",
  Category: ["Utility"],
  Icon: "Backupmagazine.png",
};
items["Topaz Brooch"] = {
  Rarity: "Common",
  Pickup: "Kills grant temporary barrier.",
  Desc: "Killing an enemy grants <span class='g'>15 barrier</span> <span class='c_stack'>(+15 per stack)</span>.",
  Category: ["Utility", "Healing"],
  Icon: "Topazbrooch.png",
};
items["Taser"] = {
  Rarity: "Common",
  Pickup: "Chance to snare on hit.",
  Desc: "<span class='d'>7%</span> chance on hit to <span class='d'>snare</span> enemies for <span class='d'>1.5</span> <span class='c_stack'>(+0.5 per stack) </span><span class='d'>seconds</span>.",
  Category: ["Utility"],
  Icon: "Taser.png",
  Unlock: "Loader: Travel 6,500 meters using the Hydraulic Gauntlet.",
};
items["Paul's Goat Hoof"] = {
  Rarity: "Common",
  Pickup: "Move faster.",
  Desc: "Increases <span class='d'>movement speed</span> by <span class='extra'>15%</span> <span class='c_stack'>(+15% per stack)</span>.",
  Category: ["Utility"],
  Icon: "Paulsgoathoof.png",
  Unlock: "Fail a shrine 3 times in a row.",
};
items["Bitter Root"] = {
  Rarity: "Common",
  Pickup: "Increases maximum health by 8%.",
  Desc: "Increases <span class='g'>maximum health</span> by <span class='g'>8%</span> <span class='c_stack'>(+8% per stack)</span>.",
  Category: ["Healing"],
  Icon: "Bitterroot.png",
  Unlock: "Reach 650 health.",
};
items["Sticky Bomb"] = {
  Rarity: "Common",
  Pickup: "Chance to attach a bomb to enemies.",
  Desc: "<span class='d'>9%</span> chance on hit to attach a <span class='d'>bomb</span> to an enemy, detonating for <span class='d'>200%</span> <span class='c_stack'>(+100% per stack) </span><span class='d'>TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Stickybomb.png",
  Unlock: "Engineer: Detonate 15 Bounding Mine within 5 seconds.",
};
items["Snake Eyes"] = {
  Rarity: "Common",
  Pickup:
    "Gain increased critical strike chance on failing a shrine. Resets between stages.",
  Desc: "<span class='extra'>Failing a shrine</span> increases <span class='d'>critical chance</span> by <span class='d'>7%</span> <span class='c_stack'>(+7% per stack)</span>, up to <span class='d'>6 times</span>. Resets at the start of each stage.",
  Category: ["Damage"],
  Icon: "Snakeeyes.png",
  Unlock: "Pass a shrine 4 times in a row.",
};
items["Hermit's Scarf"] = {
  Rarity: "Common",
  Pickup: "Chance to evade incoming damage.",
  Desc: "<span class='g'>10%</span> <span class='c_stack'>(+10% per stack)</span> chance to <span class='g'>evade</span> incoming damage.",
  Category: ["Utility"],
  Icon: "Hermitsscarf.png",
  Unlock: "Huntress: Achieve 200% attack speed.",
};
items["Gasoline"] = {
  Rarity: "Common",
  Pickup: "Killing enemies sets the ground on fire.",
  Desc: "Killing enemies burns the ground for <span class='d'>60%</span> <span class='c_stack'>(+40% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage"],
  Icon: "Gasoline.png",
  Unlock: "Defeat 20 Lemurians in one playthrough.",
};
items["Spikestrip"] = {
  Rarity: "Common",
  Pickup: "Drop spikestrips on being hit, snaring enemies.",
  Desc: "When hit, drop spikestrips that <span class='d'>snare</span> enemies for <span class='d'>1</span> <span class='c_stack'>(+0.5 per stack) </span><span class='d'>second</span>.",
  Category: ["Utility"],
  Icon: "Spikestrip.png",
  Unlock: "Enforcer: Block 2000 damage total with your shield.",
};
items["Mocha"] = {
  Rarity: "Common",
  Pickup: "Slightly increase attack speed and movement speed.",
  Desc: "Increases <span class='d'>movement speed</span> by <span class='extra'>7.5%</span> <span class='c_stack'>(+7.5% per stack)</span> and <span class='d'>attack speed</span> by <span class='d'>6%</span> <span class='c_stack'>(+6% per stack)</span>.",
  Category: ["Utility", "Damage"],
  Icon: "Mocha.png",
  Unlock: "Level up to level 20.",
};
items["Voltaic Mitt"] = {
  Rarity: "Common",
  Pickup: "Climbed ropes are electrified.",
  Desc: "Climbing creates an <span class='d'>electric trail</span> that deals <span class='d'>50% damage</span> <span class='c_stack'>(+30% per stack)</span>.",
  Category: ["Damage"],
  Icon: "Voltaicmitt.png",
  Unlock: "Complete the Providence Trial Hot-Rope Hop.",
};
items["The Toxin"] = {
  Rarity: "Common",
  Pickup: "Touch enemies to weaken them.",
  Desc: "<span class='r'>Infect</span> enemies on contact for <span class='d'>3</span> seconds, causing them to receive <span class='d'>30%</span> <span class='c_stack'>(+15% per stack) </span><span class='d'>extra damage</span> from all sources.",
  Category: ["Damage"],
  Icon: "Thetoxin.png",
  Unlock: "Find the illegal shipment.",
};
items["Mu Construct"] = {
  Rarity: "Common",
  Pickup: "Heal periodically after activating the teleporter.",
  Desc: "Heal by <span class='g'>2.5% of your maximum health</span> every <span class='d'>5</span> <span class='c_stack'>(-25% per stack) </span><span class='d'>seconds</span> <span class='r'>after the Teleporter has been activated.</span>",
  Category: ["Healing"],
  Icon: "Muconstruct.png",
  Unlock: "Find this item hidden somewhere in the world to unlock it.",
};
items["Razor Penny"] = {
  Rarity: "Common",
  Pickup:
    "Slightly increased Critical strike chance. Critical strikes give you gold.",
  Desc: "Gain <span class='d'>3% critical chance</span> <span class='c_stack'>(+3% per stack)</span>. <span class='d'>Critical strikes drop $1</span> <span class='c_stack'>(+1$ per stack)</span><span class='d'> gold</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Razorpenny.png",
  Unlock: "Kill 12 enemies simultaneously using the Gold-Plated Bomb.",
};
items["Arcane Blades"] = {
  Rarity: "Common",
  Pickup: "Move faster after activating the Teleporter.",
  Desc: "Increases <span class='d'>movement speed</span> by <span class='extra'>30%</span> <span class='c_stack'>(+30% per stack)</span> <span class='r'>after the Teleporter has been activated.</span>",
  Category: ["Utility"],
  Icon: "Arcaneblades.png",
  Unlock: "Complete the Providence Trial Kited Blades.",
};
items["Time Keeper's Secret"] = {
  Rarity: "Uncommon",
  Pickup: "Falling to low health stops time.",
  Desc: "Falling below <span class='r'>25% health</span> stops time for <span class='d'>3</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>seconds</span>. Recharges after <span class='extra'>7 minutes</span>.",
  Category: ["Utility"],
  Icon: "Timekeeperssecret.png",
};
items["Smart Shopper"] = {
  Rarity: "Uncommon",
  Pickup: "Enemies drop extra gold.",
  Desc: "Killed enemies drop <span class='d'>25%</span> <span class='c_stack'>(+25% per stack) </span><span class='d'>more gold</span>.",
  Category: ["Utility"],
  Icon: "Smartshopper.png",
};
items["Infusion"] = {
  Rarity: "Uncommon",
  Pickup: "Killing an enemy permanently increases your health.",
  Desc: "Killing an enemy increases your <span class='g'>health permanently</span> by <span class='g'>1</span> <span class='c_stack'>(+0.5 per stack)</span>.",
  Category: ["Utility"],
  Icon: "Infusion.png",
};
items["Will-O'-The-Wisp"] = {
  Rarity: "Uncommon",
  Pickup: "Chance to detonate enemies on kill.",
  Desc: "<span class='d'>33%</span> chance on killing an enemy to create a <span class='d'>lava pillar</span> for <span class='d'>300%</span> <span class='c_stack'>(+200% per stack) </span><span class='d'>damage</span>, <span class='extra'>knocking enemies upwards</span>.",
  Category: ["Damage"],
  Icon: "Willothewisp.png",
};
items["AtG Missile Mk. 1"] = {
  Rarity: "Uncommon",
  Pickup: "Chance to fire a missile.",
  Desc: "<span class='d'>10%</span> <span class='c_stack'>(+10% per stack)</span> chance on hit to fire a missile that deals <span class='d'>300% TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Atgmissilemk1.png",
};
items["Tough Times"] = {
  Rarity: "Uncommon",
  Pickup: "Reduce incoming damage by 14%.",
  Desc: "<span class='g'>Increase armor</span> by <span class='g'>14</span> <span class='c_stack'>(+14 per stack)</span>.",
  Category: ["Utility"],
  Icon: "Toughtimes.png",
};
items["Energy Cell"] = {
  Rarity: "Uncommon",
  Pickup: "Attack faster at lower health.",
  Desc: "Increases <span class='d'>attack speed</span> by up to <span class='d'>40%</span> <span class='c_stack'>(+30% per stack)</span> at <span class='r'>low health</span>.",
  Category: ["Damage"],
  Icon: "Energycell.png",
};
items["Rusty Jetpack"] = {
  Rarity: "Uncommon",
  Pickup: "Increase jump height and reduce gravity.",
  Desc: "Decrease <span class='extra'>gravity</span> while holding the jump button by <span class='extra'>10%</span> <span class='c_stack'>(-10% per stack)</span> and increase <span class='extra'>jump height</span> <span class='c_stack'>(increases per stack)</span>.",
  Category: ["Utility"],
  Icon: "Rustyjetpack.png",
};
items["Leeching Seed"] = {
  Rarity: "Uncommon",
  Pickup: "Attacking enemies heals you.",
  Desc: "Attacking enemies heals you for <span class='g'>2</span> <span class='c_stack'>(+1 per stack) </span><span class='g'>health</span>.",
  Category: ["Healing"],
  Icon: "Leechingseed.png",
};
items["Ukulele"] = {
  Rarity: "Uncommon",
  Pickup: "..and his music was electric.",
  Desc: "<span class='d'>20% chance</span> on hit to fire <span class='d'>chain lightning</span> for <span class='d'>66%</span> <span class='c_stack'>(+66% per stack) </span><span class='d'>TOTAL damage</span> on up to <span class='d'>3</span> targets.",
  Category: ["Damage"],
  Icon: "Ukulele.png",
};
items["Boxing Gloves"] = {
  Rarity: "Uncommon",
  Pickup: "Chance to knock enemies backwards for extra damage.",
  Desc: "<span class='d'>6%</span> <span class='c_stack'>(+6% per stack)</span> chance on hitting enemies to <span class='extra'>knock them back</span> for <span class='d'>100% TOTAL damage</span>.",
  Category: ["Utility", "Damage"],
  Icon: "Boxinggloves.png",
};
items["Prison Shackles"] = {
  Rarity: "Uncommon",
  Pickup: "Slow enemies on attack.",
  Desc: "<span class='extra'>Slow</span> enemies on hit for <span class='extra'>-50% movement speed</span> for <span class='d'>1.5</span> <span class='c_stack'>(+0.5 per stack) </span><span class='d'>seconds</span>.",
  Category: ["Utility"],
  Icon: "Prisonshackles.png",
};
items["Guardian's Heart"] = {
  Rarity: "Uncommon",
  Pickup: "Gain a shield. Recharges outside of danger.",
  Desc: "Gain a <span class='extra'>60</span> <span class='c_stack'>(+60 per stack) </span><span class='extra'>health shield</span>. Recharges when outside of danger for <span class='extra'>7</span> seconds.",
  Category: ["Utility"],
  Icon: "Guardiansheart.png",
};
items["Hopoo Feather"] = {
  Rarity: "Uncommon",
  Pickup: "Gain an extra jump.",
  Desc: "Gain <span class='extra'>+1</span> <span class='c_stack'>(+1 per stack)</span> maximum <span class='extra'>jump count</span>.",
  Category: ["Utility"],
  Icon: "Hopoofeather.png",
};
items["Frost Relic"] = {
  Rarity: "Uncommon",
  Pickup: "Killing enemies surrounds you with icicles.",
  Desc: "Killing an enemy temporarily surrounds you with <span class='d'>3</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>icicles</span> that deal <span class='d'>33% damage each</span> every <span class='d'>0.33</span> seconds.",
  Category: ["Damage"],
  Icon: "Frostrelic.png",
};
items["Red Whip"] = {
  Rarity: "Uncommon",
  Pickup: "Move fast out of combat.",
  Desc: "Leaving combat for <span class='d'>2</span> seconds boosts your <span class='extra'>movement speed</span> by <span class='extra'>60%</span> <span class='c_stack'>(+60% per stack)</span>.",
  Category: ["Utility"],
  Icon: "Redwhip.png",
};
items["Chargefield Generator"] = {
  Rarity: "Uncommon",
  Pickup: "Create a ring of lightning after killing an enemy. Lasts 6 seconds.",
  Desc: "Killing an enemy creates a <span class='d'>ring of lightning</span> that deals <span class='d'>50%</span> <span class='c_stack'>(+20% per stack) </span><span class='d'>damage</span> every <span class='d'>0.5</span> seconds to <span class='extra'>50%</span> of enemies within. The ring starts with a radius of <span class='d'>4.7m</span> and <span class='d'>grows by 1.3m each kill</span> up to <span class='d'>40m</span>. Lasts for <span class='d'>6</span> seconds without killing enemies.",
  Category: ["Damage"],
  Icon: "Chargefieldgenerator.png",
  Unlock: "Mercenary: Eviscerate 50 enemies.",
};
items["Arms Race"] = {
  Rarity: "Uncommon",
  Pickup:
    "Drones are equipped with explosive weaponry. Summons a drone helper.",
  Desc: "Drones gain a <span class='d'>5%</span> <span class='c_stack'>(+5% per stack)</span> chance on hit to fire a missile for <span class='d'>300% TOTAL damage</span>, and a <span class='d'>9%</span> chance on hit to fire a mortar for <span class='d'>85%</span> <span class='c_stack'>(+85% per stack) </span><span class='d'>TOTAL damage</span>. <span class='extra'>Summons a unique drone</span> which regenerates each stage.",
  Category: ["Damage"],
  Icon: "Armsrace.png",
  Unlock: "HAN–D: Kill 10 enemies simultaneously with FORCED_REASSEMBLY.",
};
items["Golden Gun"] = {
  Rarity: "Uncommon",
  Pickup: "More gold, more damage.",
  Desc: "Deal <span class='d'>bonus damage</span> based on <span class='d'>current gold</span>, up to <span class='d'>40% damage</span>. Caps at <span class='d'>700</span> <span class='c_stack'>(-50% per stack) </span><span class='d'>gold</span>. Scales with time.",
  Category: ["Damage"],
  Icon: "Goldengun.png",
  Unlock: "Bank 20,000 gold.",
};
items["56 Leaf Clover"] = {
  Rarity: "Uncommon",
  Pickup: "Elite mobs have a chance to drop items.",
  Desc: "Elite mobs have a <span class='extra'>4%</span> <span class='c_stack'>(+1.5% per stack) </span><span class='extra'>chance</span> to <span class='extra'>drop items</span>.",
  Category: ["Utility"],
  Icon: "56leafclover.png",
  Unlock: "Kill the Scavenger.",
};
items["Concussion Grenade"] = {
  Rarity: "Uncommon",
  Pickup: "Chance to stun enemies.",
  Desc: "<span class='d'>6%</span> <span class='c_stack'>(+6% per stack)</span> chance on hitting enemies to <span class='d'>stun</span> them for <span class='d'>2</span> seconds.",
  Category: ["Utility"],
  Icon: "Concussiongrenade.png",
  Unlock: "Engineer: Kill a boss in 15 seconds or less.",
};
items["Filial Imprinting"] = {
  Rarity: "Uncommon",
  Pickup: "Hatch a strange creature who drops buffs periodically.",
  Desc: "Hatch <span class='extra'>1</span> <span class='c_stack'>(+1 per stack)</span> strange creature who drops <span class='d'>buffs</span> every <span class='d'>20</span> seconds. Buffs temporarily boost either <span class='extra'>movement speed</span>, <span class='d'>attack speed</span>, or <span class='g'>health regen</span>.",
  Category: ["Damage", "Utility", "Healing"],
  Icon: "Filialimprinting.png",
  Unlock: "Drown 20 Whorls.",
};
items["Dead Man's Foot"] = {
  Rarity: "Uncommon",
  Pickup: "Drop a poison trap at low health.",
  Desc: "Chance when damaged to drop a <span class='d'>poison mine</span> that deals <span class='d'>150% damage</span> and poisons for <span class='d'>x600%</span> <span class='c_stack'>(+450% per stack) </span><span class='d'>damage</span> over time. Chance to drop starts at <span class='d'>15%</span> and increases with <span class='r'>low health</span>.",
  Category: ["Damage"],
  Icon: "Deadmansfoot.png",
  Unlock: "Find the bloated survivor.",
};
items["Toxic Centipede"] = {
  Rarity: "Uncommon",
  Pickup: "Infected!",
  Desc: "<span class='r'>Infect</span> a nearby enemy on contact for <span class='d'>6</span> <span class='c_stack'>(+2 per stack) </span><span class='d'>seconds</span>, dealing <span class='d'>50% damage</span> every <span class='d'>0.5</span> seconds. Bounces to other enemies if the target dies. Recharges every <span class='extra'>6</span> <span class='c_stack'>(-33% per stack) </span><span class='extra'>seconds</span>.",
  Category: ["Damage"],
  Icon: "Toxiccentipede.png",
  Unlock: "Acrid: Spread 3,300 feet of caustic sludge.",
};
items["Harvester's Scythe"] = {
  Rarity: "Uncommon",
  Pickup: "Critical hits heal you.",
  Desc: "Gain <span class='d'>5% critical chance</span>. <span class='d'>Critical strikes</span> <span class='g'>heal</span> for <span class='d'>8</span> <span class='c_stack'>(+2 per stack) </span><span class='g'>health</span>.",
  Category: ["Healing"],
  Icon: "Harvestersscythe.png",
  Unlock: "Use a health shrine that drops you below 5% health.",
};
items["Panic Mines"] = {
  Rarity: "Uncommon",
  Pickup: "Drop a mine at low health.",
  Desc: "Chance when damaged to drop <span class='d'>1</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>mine</span> that deals <span class='d'>400% damage</span>. Chance to drop starts at <span class='d'>15%</span> and increases with <span class='r'>low health</span>.",
  Category: ["Damage"],
  Icon: "Panicmines.png",
  Unlock:
    "Miner: Survive the teleporter event without falling below 50% health.",
};
items["Predatory Instincts"] = {
  Rarity: "Uncommon",
  Pickup: "Critical strikes increase attack speed. Buff stacks 5 times.",
  Desc: "Gain <span class='d'>5% critical chance</span>. <span class='d'>Critical strikes</span> increase <span class='d'>attack speed</span> by <span class='d'>10%</span> <span class='c_stack'>(+7% per stack)</span>. Maximum cap of <span class='d'>30%</span> <span class='c_stack'>(+21% per stack) </span><span class='d'>attack speed</span>.",
  Category: ["Damage"],
  Icon: "Predatoryinstincts.png",
  Unlock: "Huntress: Defeat the Ancient Wisp without taking damage.",
};
items["Royal Medallion"] = {
  Rarity: "Uncommon",
  Pickup: "Bosses drop powerful buffing wisps when hit.",
  Desc: "<span class='d'>10%</span> chance on hitting a boss monster to <span class='extra'>drop a buffing wisp</span> that <span class='d'>improves health regen, attack speed, move speed, and base damage</span> for <span class='d'>10</span> <span class='c_stack'>(+6 per stack) seconds</span>.",
  Category: ["Damage", "Utility", "Healing"],
  Icon: "Royalmedallion.png",
  Unlock: "Get a gold rank on at least 5 Providence Trials.",
};
items["Prophet's Cape"] = {
  Rarity: "Uncommon",
  Pickup: "All blocked damage heals you.",
  Desc: "<span class='d'>Briefly blocks all incoming damage upon being struck</span> <span class='c_stack'>(Recharging after 15 seconds)</span>. Blocking damage heals you for <span class='g'>3</span> <span class='c_stack'>(+1 per stack)</span><span class='g'> health</span>.",
  Category: ["Healing"],
  Icon: "Prophetscape.png",
  Unlock: "Commando: Dodge 7 lethal attacks",
};
items["Locked Jewel"] = {
  Rarity: "Uncommon",
  Pickup: "Activating an interactable grants barrier and gold.",
  Desc: "Activating an interactable heals <span class='g'>35%</span> <span class='c_stack'>(+15% per stack)</span> of your <span class='g'>maximum barrier</span> and grants <span class='d'>$8 (scales with time)</span>.",
  Category: ["Utility", "Healing"],
  Icon: "Lockedjewel.png",
  Unlock: "Reach max barrier.",
};
items["Hunter's Harpoon"] = {
  Rarity: "Uncommon",
  Pickup: "Killing an enemy grants a temporary burst of speed.",
  Desc: "Killing an enemy increases <span class='d'>movement speed</span> by <span class='d'>125%</span> for <span class='d'>1</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>second</span>. <span class='extra'>Consecutive kills increase buff duration</span> for up to 25 seconds.",
  Category: ["Utility"],
  Icon: "Huntersharpoon.png",
  Unlock: "Complete the Providence Trial A Toxic Path.",
};
items["Insecticide"] = {
  Rarity: "Uncommon",
  Pickup: "Chance to apply damage over time. Heal if the enemy dies.",
  Desc: "<span class='d'>10%</span> <span class='c_stack'>(+5% per stack)</span> chance on hit to <span class='d'>spray</span> an enemy dealing <span class='d'>10% damage per second</span>. <span class='d'>Spray</span> stacks up to 10 times. Killing enemies <span class='g'>heals</span> for <span class='g'>10</span> <span class='c_stack'>(+5 per stack)</span> <span class='g'>health</span> per stack of <span class='d'>spray</span>.",
  Category: ["Damage", "Healing"],
  Icon: "Insecticide.png",
  Unlock: "Complete the Providence Trial Get Off My Lawn!.",
};
items["Decaying Sample"] = {
  Rarity: "Uncommon",
  Pickup: "Gain an orbiting follower that damages enemies.",
  Desc: "<span class='extra'>Gain two orbiting spheres</span> that strike for <span class='d'>100%</span> <span class='c_stack'>(+ 50% stack)</span> <span class='d'>damage</span> every <span class='d'>0.25</span> seconds.",
  Category: ["Damage"],
  Icon: "Decayingsample.png",
  Unlock: "Complete the Providence Trial Main Systems Offline.",
};
items["Thallium"] = {
  Rarity: "Rare",
  Pickup: "Chance to slow and damage enemies over time.",
  Desc: "<span class='d'>10%</span> <span class='c_stack'>(+10% per stack)</span> chance on hit to damage by up to <span class='d'>2x500% enemy damage per second</span> and slow for up to <span class='extra'>-150% movement speed</span> over the course of <span class='d'>3 seconds</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Thallium.png",
};
items["Tesla Coil"] = {
  Rarity: "Rare",
  Pickup: "Passively shock nearby enemies.",
  Desc: "Passively <span class='d'>shock</span> nearby enemies for <span class='d'>120%</span> <span class='c_stack'>(+60% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage"],
  Icon: "Teslacoil.png",
};
items["Old Box"] = {
  Rarity: "Rare",
  Pickup: "Chance when damaged to drop a jack-in-the-box, fearing enemies.",
  Desc: "Chance when damaged to drop a <span class='d'>jack-in-the-box</span>, <span class='r'>fearing enemies</span> for <span class='d'>2</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>seconds</span>. Chance to drop starts at <span class='d'>10%</span> and increases with <span class='r'>low health</span>.",
  Category: ["Utility"],
  Icon: "Oldbox.png",
};
items["Beating Embryo"] = {
  Rarity: "Rare",
  Pickup: "Equipment has a chance to have double the effect.",
  Desc: "Equipment has a <span class='d'>30%</span> <span class='c_stack'>(+30% per stack) </span><span class='d'>chance</span> to deal <span class='d'>double</span> the effect.",
  Category: ["Utility"],
  Icon: "Beatingembryo.png",
};
items["Permafrost"] = {
  Rarity: "Rare",
  Pickup: "Chance on hit to freeze enemies while also slowing.",
  Desc: "<span class='d'>13%</span> chance on hit to <span class='d'>freeze enemies for 1.5 seconds</span> while slowing by <span class='extra'>-80% movement speed</span> for <span class='extra'>3</span> <span class='c_stack'>(+1.5 per stack) </span><span class='extra'>seconds</span>.",
  Category: ["Utility"],
  Icon: "Permafrost.png",
};
items["AtG Missile Mk. 2"] = {
  Rarity: "Rare",
  Pickup: "Hooah.",
  Desc: "<span class='d'>7%</span> <span class='c_stack'>(+7% per stack)</span> chance on hit to fire three missiles that deal <span class='d'>3x200% TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Atgmissilemk2.png",
};
items["Happiest Mask"] = {
  Rarity: "Rare",
  Pickup: "Killed enemies spawn friendly ghosts.",
  Desc: "Killed enemies spawn <span class='extra'>ghosts</span> that last <span class='extra'>15 seconds</span> with <span class='extra'>100%</span> <span class='c_stack'>(+20% per stack) </span><span class='extra'>health</span> and <span class='extra'>70%</span> <span class='c_stack'>(+30% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Happiestmask.png",
};
items["Plasma Chain"] = {
  Rarity: "Rare",
  Pickup:
    "Chance on hit to tether onto up to 1 enemy, dealing damage to any enemies in the path.",
  Desc: "Chance on hit to <span class='d'>tether</span> onto up to <span class='extra'>1</span> <span class='c_stack'>(+1 per stack)</span> enemy dealing <span class='d'>60% damage per 0.5 seconds</span> to any enemies in the path.",
  Category: ["Damage"],
  Icon: "Plasmachain.png",
};
items["Heaven Cracker"] = {
  Rarity: "Rare",
  Pickup: "Every 4 basic attacks pierce through enemies.",
  Desc: "Every <span class='extra'>4</span> <span class='c_stack'>(-1 per stack) </span><span class='extra'>basic attacks</span> <span class='d'>pierce through enemies</span>.",
  Category: ["Damage"],
  Icon: "Heavencracker.png",
};
items["Rapid Mitosis"] = {
  Rarity: "Rare",
  Pickup: "Reduce the cooldown of equipment.",
  Desc: "Reduce the <span class='extra'>cooldown of equipment</span> by <span class='extra'>25%</span> <span class='c_stack'>(+25% per stack)</span>.",
  Category: ["Utility"],
  Icon: "Rapidmitosis.png",
};
items["Ceremonial Dagger"] = {
  Rarity: "Rare",
  Pickup: "Killing an enemy fires spirit bolts.",
  Desc: "Killing an enemy fires out <span class='extra'>4</span> <span class='c_stack'>(+2 per stack) </span><span class='extra'>heat seaking bolts</span> that deal <span class='d'>100% damage</span>.",
  Category: ["Damage"],
  Icon: "Ceremonialdagger.png",
};
items["Repulsion Armor"] = {
  Rarity: "Rare",
  Pickup: "After taking damage, reflect all attacks for 4 seconds.",
  Desc: "After <span class='d'>6</span> hits <span class='extra'>reflect incoming attacks</span> for <span class='d'>400% damage</span> and <span class='g'>increase armor</span> by <span class='g'>100</span> for <span class='d'>4</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>seconds</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Repulsionarmor.png",
};
items["Brilliant Behemoth"] = {
  Rarity: "Rare",
  Pickup: "All your attacks explode!",
  Desc: "All your <span class='d'>attacks explode</span> for a bonus <span class='d'>20%</span> <span class='c_stack'>(+20% per stack) </span><span class='d'>TOTAL damage</span> to nearby enemies.",
  Category: ["Damage"],
  Icon: "Brilliantbehemoth.png",
};
items["Hardlight Afterburner"] = {
  Rarity: "Rare",
  Pickup:
    "Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.",
  Desc: "Add <span class='extra'>+2</span> <span class='c_stack'>(+2 per stack)</span> charges of your <span class='extra'>Utility skill</span>. Reduces <span class='extra'>Utility skill cooldown</span> by <span class='extra'>33%</span>.",
  Category: ["Utility"],
  Icon: "Hardlightafterburner.png",
};
items["Interstellar Desk Plant"] = {
  Rarity: "Rare",
  Pickup: "Sprout a tree on kill, granting healing fruits.",
  Desc: "Upon killing an enemy, spawn an <span class='extra'>alien plant</span> that heals you for <span class='g'>3% of your maximum health</span> and <span class='extra'>recharges</span> after <span class='d'>4 seconds</span>. Plant lasts <span class='d'>15</span> <span class='c_stack'>(+5 per stack)</span> <span class='d'>seconds</span>.",
  Category: ["Healing"],
  Icon: "Interstellardeskplant.png",
  Unlock: "CHEF: SEAR/FLAMBE 20 Sand Crabs.",
};
items["Laser Turbine"] = {
  Rarity: "Rare",
  Pickup: "Using skills charges up to a huge laser blast.",
  Desc: "Using <span class='extra'>skills</span> charges the generator by <span class='d'>7.8%</span> <span class='c_stack'>(+7.8% per stack) </span><span class='d'>per second</span>. At full power, fire a laser for <span class='d'>2000% damage</span>.",
  Category: ["Damage"],
  Icon: "Laserturbine.png",
  Unlock: "CHEF: Have 20 cleavers out at once.",
};
items["Wicked Ring"] = {
  Rarity: "Rare",
  Pickup: "Critical strikes reduce all your cooldowns by 1.",
  Desc: "Gain <span class='d'>5%</span> <span class='c_stack'>(+10% per stack) </span><span class='d'>critical chance</span>. <span class='d'>Critical strikes</span> <span class='extra'>reduce cooldowns</span> by <span class='extra'>1 second</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Wickedring.png",
  Unlock: "Collect 4 Keycard.",
};
items["Alien Head"] = {
  Rarity: "Rare",
  Pickup: "Reduces cooldowns for your skills.",
  Desc: "Decrease your <span class='extra'>skill cooldowns</span> by <span class='extra'>30%</span> <span class='c_stack'>(+30% per stack)</span>.",
  Category: ["Utility"],
  Icon: "Alienhead.png",
  Unlock: "Obtain 7 Monster Tooth and 1 Guardian's Heart",
};
items["The Ol' Lopper"] = {
  Rarity: "Rare",
  Pickup: "Enemies take more damage at lower health.",
  Desc: "Deal <span class='d'>bonus damage</span> to enemies with lower health, up to <span class='d'>+60%</span> <span class='c_stack'>(+60% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage"],
  Icon: "Ollopper.png",
  Unlock: "Survive 40 minutes.",
};
items["The Hit List"] = {
  Rarity: "Rare",
  Pickup: "Killing marked enemies permanently increases damage.",
  Desc: "Randomly <span class='extra'>marks up to 1</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>enemy</span>. Killing a <span class='extra'>marked enemy</span> <span class='d'>permanently increases damage by 0.5</span>, up to <span class='d'>20 damage</span>.",
  Category: ["Utility"],
  Icon: "Thehitlist.png",
  Unlock: "Bandit: Reset your cooldown 15 times consecutively.",
};
items["Photon Jetpack"] = {
  Rarity: "Rare",
  Pickup: "No hands.",
  Desc: "Hold the jump button to <span class='extra'>fly</span> for up to <span class='d'>1.6</span> <span class='c_stack'>(+0.8 per stack) </span><span class='d'>seconds</span>. Recharges over <span class='d'>1.6 seconds</span>.",
  Category: ["Utility"],
  Icon: "Photonjetpack.png",
  Unlock: "End a teleporter timer with 0 enemies on the map.",
};
items["Shattering Justice"] = {
  Rarity: "Rare",
  Pickup: "Reduce enemy armor on hit. Reduction stacks 5 times.",
  Desc: "Attacks <span class='d'>reduce enemy armor</span> by <span class='d'>6</span> for <span class='d'>2</span> <span class='c_stack'>(+2 per stack) </span><span class='d'>seconds</span>. Reduction stacks up to <span class='d'>-30 armor</span>.",
  Category: ["Damage"],
  Icon: "Shatteringjustice.png",
  Unlock: "Miner: Reach level 10 without getting hurt more than once.",
};
items["Telescopic Sight"] = {
  Rarity: "Rare",
  Pickup: "Chance to instantly kill an enemy.",
  Desc: "<span class='d'>1%</span> <span class='c_stack'>(+0.5% per stack) </span><span class='d'>chance</span> on hit to <span class='d'>instantly kill enemies</span>. <span class='r'>Does not work</span> against bosses.",
  Category: ["Damage"],
  Icon: "Telescopicsight.png",
  Unlock: "Sniper: 1-shot kill 10 enemies consecutively",
};
items["Fireman's Boots"] = {
  Rarity: "Rare",
  Pickup: "Fight fire with fire..",
  Desc: "Walking leaves behind a <span class='r'>fire trail</span> that burns for <span class='d'>35%</span> <span class='c_stack'>(+20% per stack) </span><span class='d'>damage</span>.",
  Category: ["Damage"],
  Icon: "Firemansboots.png",
  Unlock: "Survive in lava for 1 minute straight.",
};
items["Hyper-Threader"] = {
  Rarity: "Rare",
  Pickup: "Pew pew.",
  Desc: "Hitting enemies <span class='d'>fires a laser</span> that deals <span class='d'>40% damage</span> and <span class='d'>bounces</span> to <span class='d'>2</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>enemies</span>.",
  Category: ["Damage"],
  Icon: "Hyperthreader.png",
  Unlock: "Complete the Providence Trial A Rung Above.",
};
items["Dio's Best Friend"] = {
  Rarity: "Rare",
  Pickup: "Cheat death once.",
  Desc: "Taking <span class='r'>fatal damage</span> <span class='extra'>consumes this item</span> and revives you with <span class='g'>40% health</span> and <span class='g'>2 seconds of invulnerability</span>.",
  Category: ["Utility"],
  Icon: "Diosbestfriend.png",
  Unlock: "Die 50 times.",
};
items["Ancient Scepter"] = {
  Rarity: "Rare",
  Pickup: "Upgrade your special skill.",
  Desc: "Upgrade your <span class='extra'>special skill</span>. <span class='extra'>Unique to each character</span>. <span class='c_stack'>Reduces special skill cooldown by 30% per stack.</span>",
  Category: ["Utility"],
  Icon: "Ancientscepter.png",
  Unlock: "Mercenary: Beat the game on {{Difficulty|Monsoon}} difficulty.",
};
items["Bottled Chaos"] = {
  Rarity: "Rare",
  Pickup:
    "Using your Equipment triggers an additional, random Equipment effect.",
  Desc: "Activating an Equipment triggers a <span class='d'>random equipment</span> effect <span class='d'>1</span> <span class='c_stack'>(+1 per stack)</span> time(s).",
  Category: ["Utility"],
  Icon: "Bottledchaos.png",
  Unlock: "Use the same Equipment Activator 5 times.",
};
items["Aegis"] = {
  Rarity: "Rare",
  Pickup:
    "Healing past full grants you a temporary barrier.Increased maximum barrier.",
  Desc: "Healing past full grants you <span class='g'>barrier</span> equal to <span class='g'>50%</span> <span class='c_stack'>(+50% per stack)</span> of the amount you <span class='g'>healed</span>. Increases <span class='g'>maximum barrier</span> by <span class='g'>20%</span> <span class='c_stack'>(+20% per stack)</span>.",
  Category: ["Utility", "Healing"],
  Icon: "Aegis.png",
  Unlock: "Artificer: Multi-kill 15 enemies.",
};
items["Substandard Duplicator"] = {
  Rarity: "Rare",
  Pickup: "Picked up items yield an additional temporary copy.",
  Desc: "<span class='extra'>Picking up an item</span> gives you a <span class='d'>temporary copy</span> of itself. Temporary items last an additional <span class='d'>10</span> <span class='c_stack'>(+10 per stack)</span> <span class='d'>seconds</span>",
  Category: ["Utility"],
  Icon: "Substandardduplicator.png",
  Unlock: "Complete the providence Trial A Duplicator?!.",
};
items["Classified Access Codes"] = {
  Rarity: "Rare",
  Pickup: "Access a deadly weapon against the Teleporter bosses.",
  Desc: "The <span class='d'>Atlas Cannon</span> appears each stage, activating it deals <span class='d'>40%</span> <span class='c_stack'>(+20% per stack)</span><span class='d'> of maximum health as damage to the teleporter boss after it spawns</span>.",
  Category: ["Damage"],
  Icon: "Classifiedaccesscodes.png",
  Unlock: "Complete the Providence Trial Emergency Ejection.",
};
items["Umbrella"] = {
  Rarity: "Rare",
  Pickup: "They fear the rain.",
  Desc: "<span class='extra'>Rain</span> begins for <span class='extra'>15 seconds</span> <span class='c_stack'>(increases per stack)</span> upon activating the Teleporter. Rain <span class='d'>stuns, damages, and weakens</span> enemies. <span class='extra'>You are invincible while it is raining.</span>",
  Category: ["Utility"],
  Icon: "Umbrella.png",
  Unlock: "Complete the Providence Trial Meteor Showers.",
};
items["Legendary Spark"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "Smite them. Smite them all.",
  Desc: "<span class='d'>8%</span> chance on hit to create <span class='d'>2</span> <span class='c_stack'>(+1 per stack) </span><span class='d'>sparks</span> that <span class='extra'>smite</span> enemies for <span class='d'>200% TOTAL damage</span>.",
  Category: ["Damage"],
  Icon: "Legendaryspark.png",
  From: "Ancient Wisp",
};
items["Imp Overlord's Tentacle"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "Cut off the head of the snake.. and the body lives on.",
  Desc: "<span class='extra'>Summon an imp</span> bodyguard. <span class='g'>Revives</span> after <span class='d'>60</span> <span class='c_stack'>(-10 per stack) </span><span class='d'>seconds</span>. <span class='c_stack'>Increase imp health and damage by 15% per stack.</span>",
  Category: ["Utility"],
  Icon: "Impoverlordstentacle.png",
  From: "Imp Overlord",
};
items["Burning Witness"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "The Worm's eye seems to still see.. watching.. rewarding..",
  Desc: "Killing enemies grants <span class='d'>a fire trail and 30% movement speed</span> for <span class='d'>6</span> <span class='c_stack'>(+2 per stack) </span><span class='d'>seconds</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Burningwitness.png",
  From: "Magma Worm",
};
items["Colossal Knurl"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "Increase health, health regeneration, and armor.",
  Desc: "Increase <span class='g'>maximum health</span> by <span class='g'>40</span>, <span class='g'>health regeneration</span> by <span class='g'>1.2/second</span>, and <span class='g'>armor</span> by <span class='g'>6</span>.",
  Category: ["Utility", "Healing"],
  Icon: "Colossalknurl.png",
  From: "Colossus",
};
items["Ifrit's Horn"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "Chance to fire a flaming wave.",
  Desc: "<span class='d'>8% chance</span> on hit to fire a <span class='d'>flaming wave</span> that <span class='extra'>incinerates</span> enemies for <span class='d'>300%</span> <span class='c_stack'>(+300% per stack)</span> <span class='d'>damage.</span>",
  Category: ["Damage"],
  Icon: "Ifritshorn.png",
  From: "Ifrit",
};
items["Nematocyst Nozzle"] = {
  Rarity: "Boss",
  Type: "Equipment",
  Pickup: "Best served cold.",
  Desc: "Shoot out <span class='d'>6 nematocysts</span> that deal <span class='d'>400% damage</span>.",
  Category: ["Damage"],
  Icon: "Nematocystnozzle.png",
  From: "Wandering Vagrant",
  Cooldown: 22,
};
items["Scorching Shell Piece"] = {
  Rarity: "Boss",
  Type: "Item",
  Pickup: "Gain shield. Fire a barrage of projectiles when it breaks.",
  Desc: "Gain a <span class='extra'>20</span> <span class='c_stack'>(+20 per stack) </span><span class='extra'>health shield</span>. <span class='d'>Fire up to 4</span> <span class='c_stack'>(+2 per stack)</span><span class='d'> projectiles</span> at nearby enemies <span class='d'>when it breaks</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Scorchingshellpiece.png",
  From: "Cremator",
};
items["Rotten Brain"] = {
  Rarity: "Equipment",
  Pickup: "Throw a bouncing brain.",
  Desc: "Throw a brain that bounces in place, damaging/slowing enemies for <span class='d'>6x200%.</span>",
  Category: ["Damage"],
  Icon: "Rottenbrain.png",
  Cooldown: 30,
};
items["Safeguard Lantern"] = {
  Rarity: "Equipment",
  Pickup: "Drop a lantern that fears and damages enemies for 10 seconds.",
  Desc: "Drop a lantern for 10 seconds. <span class='r'>Fears</span> and damages enemies for <span class='d'>100% damage</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Safeguardlantern.png",
  Cooldown: 45,
};
items["Snowglobe"] = {
  Rarity: "Equipment",
  Pickup: "Randomly freeze enemies for 8 seconds.",
  Desc: "Summon a <span class='extra'>snowstorm</span> that <span class='extra'>freezes</span> monsters at a <span class='d'>50% chance/sec over 7 seconds</span>.",
  Category: ["Utility"],
  Icon: "Snowglobe.png",
  Cooldown: 45,
};
items["Explorer's Key"] = {
  Rarity: "Equipment",
  Pickup: "Unlocks all chests within 20 meters.",
  Desc: "<span class='extra'>Open all chests</span> within <span class='d'>20 meters</span>.",
  Category: ["Utility"],
  Icon: "Explorerskey.png",
  Cooldown: 90,
};
items["Foreign Fruit"] = {
  Rarity: "Equipment",
  Pickup: "Heal on use.",
  Desc: "Heal yourself for <span class='g'>50% of your health</span>.",
  Category: ["Healing"],
  Icon: "Foreignfruit.png",
  Cooldown: 45,
};
items["Instant Minefield"] = {
  Rarity: "Equipment",
  Pickup: "Drop many mines at your feet.",
  Desc: "Drop <span class='d'>7 mines</span> at your feet, each dealing <span class='d'>400% damage</span>.",
  Category: ["Damage"],
  Icon: "Instantminefield.png",
  Cooldown: 45,
};
items["Jar of Souls"] = {
  Rarity: "Equipment",
  Pickup: "Summon a ghost for every enemy in the screen.",
  Desc: "<span class='extra'>Duplicate every enemy</span> as a <span class='extra'>ghost</span> to <span class='d'>fight on your side</span>. Ghosts last <span class='extra'>15 seconds</span> and have <span class='d'>70% damage</span>.",
  Category: ["Damage", "Utility"],
  Icon: "Jarofsouls.png",
  Cooldown: 45,
};
items["Carrara Marble"] = {
  Rarity: "Equipment",
  Pickup: "Place a marble gate. Teleport back to the gate by activating again.",
  Desc: "Place a <span class='extra'>marble gate</span>. <span class='extra'>Teleport back</span> to the gate by activating again.",
  Category: ["Utility"],
  Icon: "Carraramarble.png",
  Cooldown: 45,
};
items["Sawmerang"] = {
  Rarity: "Equipment",
  Pickup: "Mow them down!",
  Desc: "<span class='extra'>Throw</span> out a <span class='d'>sawmerang</span>, slicing enemies for <span class='d'>500% damage</span> and making them <span class='r'>bleed for 4x100% damage</span>. Boomerangs back.",
  Category: ["Damage"],
  Icon: "Sawmerang.png",
  Cooldown: 45,
};
items["Shattered Mirror"] = {
  Rarity: "Equipment",
  Pickup: "Create a shadow partner for 15 seconds.",
  Desc: "For 15 seconds, <span class='extra'>double all your abilities' damage and effects</span>.",
  Category: ["Damage"],
  Icon: "Shatteredmirror.png",
  Cooldown: 75,
};
items["Disposable Missile Launcher"] = {
  Rarity: "Equipment",
  Pickup: "Fire a swarm of missiles.",
  Desc: "Fire a swarm of <span class='d'>12 missiles</span>, dealing <span class='d'>200% damage</span> each.",
  Category: ["Damage"],
  Icon: "Disposablemissilelauncher.png",
  Cooldown: 45,
};
items["Gold-Plated Bomb"] = {
  Rarity: "Equipment",
  Pickup: "Drop and detonate 50% of your money.",
  Desc: "Use <span class='d'>50% of your gold</span> to create a bomb, dealing <span class='d'>1 damage per gold spent</span>. <span class='d'>Refund 20% of spent gold</span> on kill.",
  Category: ["Damage"],
  Icon: "Goldplatedbomb.png",
  Cooldown: 45,
};
items["Drone Repair Kit"] = {
  Rarity: "Equipment",
  Pickup:
    "Repair and empower all active drones. Summons a unique drone to assist.",
  Desc: "All <span class='extra'>drones</span> are repaired to <span class='g'>full health</span> and <span class='extra'>empowered</span> for 8 seconds. <span class='extra'>Summons a unique drone.</span>",
  Category: ["Damage", "Utility"],
  Icon: "Dronerepairkit.png",
  Cooldown: 45,
};
items["Thqwib"] = {
  Rarity: "Equipment",
  Pickup: "Releases a bloom of Thqwibs, detonating on impact.",
  Desc: "Release a bloom of <span class='d'>30 thqwibs</span>, detonating on impact for <span class='d'>200% damage</span>.",
  Category: ["Damage"],
  Icon: "Thqwib.png",
  Cooldown: 45,
};
items["Dynamite Plunger"] = {
  Rarity: "Equipment",
  Pickup: "Hitting enemies drops dynamite. Use to detonate.",
  Desc: "Hitting an enemy drops <span class='d'>dynamite</span>. Use to detonate for <span class='d'>200% damage</span>.",
  Category: ["Damage"],
  Icon: "Dynamiteplunger.png",
  Cooldown: 45,
};
items["Mace Replica"] = {
  Rarity: "Equipment",
  Pickup: "Swing a powerful mace, activating your item effects.",
  Desc: "Swing a <span class='d'>powerful mace</span> for <span class='d'>250% damage</span>, knocking enemies away. <span class='extra'>Guaranteed to activate all on-hit item effects.</span>",
  Category: ["Utility"],
  Icon: "Macereplica.png",
  Unlock: "Commando: Activate the 3rd teleporter without being hurt once.",
  Cooldown: 45,
};
items["Gigantic Amethyst"] = {
  Rarity: "Equipment",
  Pickup: "Resets all your cooldowns.",
  Desc: "<span class='extra'>Reset all your cooldowns</span>.",
  Category: ["Utility"],
  Icon: "Giganticamethyst.png",
  Unlock: "Loader: Kill the Overloading Magma Worm.",
  Cooldown: 8,
};
items["Crudely-Drawn Buddy"] = {
  Rarity: "Equipment",
  Pickup: "Drop a decoy, attracting nearby enemies.",
  Desc: "Blow up a decoy, attracting and <span class='extra'>confusing</span> enemies for <span class='d'>8 seconds</span>. Looks just like you.",
  Category: ["Utility"],
  Icon: "Crudelydrawnbuddy.png",
  Unlock: "Sniper: Achieve 15 consecutive perfect reloads.",
  Cooldown: 45,
};
items["Prescriptions"] = {
  Rarity: "Equipment",
  Pickup: "Increase damage and attack speed for 8 seconds.",
  Desc: "Increase <span class='d'>damage by 30%</span> and <span class='d'>attack speed by 40%</span> for <span class='d'>8 seconds</span>.",
  Category: ["Damage"],
  Icon: "Prescriptions.png",
  Unlock: "Enforcer: Stay in Shield Mode for 5 minutes straight (in combat).",
  Cooldown: 45,
};
items["Shield Generator"] = {
  Rarity: "Equipment",
  Pickup: "Become invulnerable for 8 seconds.",
  Desc: "Become <span class='extra'>invincible</span> for <span class='extra'>8 seconds</span>.",
  Category: ["Utility"],
  Icon: "Shieldgenerator.png",
  Unlock: "HAN-D: Beat the third stage without falling below 60% health.",
  Cooldown: 45,
};
items["Unstable Watch"] = {
  Rarity: "Equipment",
  Pickup: "Pause time for 7 seconds.",
  Desc: "<span class='extra'>Stop time</span> for <span class='d'>7 seconds</span>.",
  Category: ["Utility"],
  Icon: "Unstablewatch.png",
  Unlock: "Complete the 1st stage in under 5 minutes.",
  Cooldown: 67,
};
items["Lost Doll"] = {
  Rarity: "Equipment",
  Pickup: "Harm yourself to deal massive damage to an enemy.",
  Desc: "Sacrifice <span class='r'>25% health</span> to <span class='d'>damage</span> an enemy for <span class='r'>400% of your maximum health</span>.",
  Category: ["Damage"],
  Icon: "Lostdoll.png",
  Unlock: "Survive a boss with less than 20% health.",
  Cooldown: 45,
};
items["Pillaged Gold"] = {
  Rarity: "Equipment",
  Pickup: "For 14 seconds, hitting enemies causes them to drop gold.",
  Desc: "For <span class='d'>14 seconds</span>, every hit <span class='d'>drops gold</span>.",
  Category: ["Utility"],
  Icon: "Pillagedgold.png",
  Unlock: "Bandit: Kill a boss with Lights Out.",
  Cooldown: 45,
};
items["Captain's Brooch"] = {
  Rarity: "Equipment",
  Pickup: "One man's wreckage is another man's treasure.",
  Desc: "Call down a <span class='extra'>chest</span> nearby. Chest cost is <span class='d'>doubled</span>.",
  Category: ["Utility"],
  Icon: "Captainsbrooch.png",
  Unlock: "Unlock a golden chest with the Explorer's Key.",
  Cooldown: 135,
};
items["The Back-Up"] = {
  Rarity: "Equipment",
  Pickup: "Call drones for backup. Lasts 10 seconds.",
  Desc: "Create <span class='d'>4 drones</span> to fight for you for <span class='extra'>10 seconds</span>.",
  Category: ["Damage"],
  Icon: "Thebackup.png",
  Unlock: "Have 4 drone helpers at once.",
  Cooldown: 45,
};
items["Super Massive Leech"] = {
  Rarity: "Equipment",
  Pickup: "Grant massive life on hit for 10 seconds.",
  Desc: "For <span class='d'>10 seconds</span>, every hit heals you for <span class='g'>10 health</span>.",
  Category: ["Healing"],
  Icon: "Supermassiveleech.png",
  Unlock: "Acrid: Spread Epidemic to 25 enemies.",
  Cooldown: 45,
};
items["Glowing Meteorite"] = {
  Rarity: "Equipment",
  Pickup: "Rain meteors from the sky, hurting both enemies and allies.",
  Desc: "<span class='extra'>Meteors fall from the sky</span>, <span class='d'>damaging</span> <span class='r'>enemies and friends</span> for <span class='r'>10% of their maximum health.</span> Lasts <span class='d'>8 seconds</span>.",
  Category: ["Damage"],
  Icon: "Glowingmeteorite.png",
  Unlock: "Deal 5000 damage in one shot.",
  Cooldown: 70,
};
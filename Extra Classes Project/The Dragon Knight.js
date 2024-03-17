/*	-WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Dragon Knight" (v3.1) and the seven subclasses for it: "Club of the Arena Royale", "Club of the Bloodhound Bruisers", "Club of the Dog and Hound", "Club of the Piss and Vinegar", "Club of the Squared Circle", "Club of the Sweet Science" and "Club of the Whiskey Fist" from the Pugilist class PDF (2nd Anniversary Edition).
				This is taken from the DMs Guild website (http://www.dmsguild.com/product/184921/)
				This class and subclasses are made by Benjamin Huffman.
				The 2nd Anniversary Edition includes the "Additional Fight Clubs for the Pugilist Class" (v2), which have now been merged with the base class, originally taken from http://www.dmsguild.com/product/186640/.
	Code by:		Original script by tables-r-us & MorePurpleMoreBetter.
					Updated to Pugilist v3.1 by FishyFing.
	Code version:	v2
	Date:			2019-01-05 (sheet v12.999)
	Please support the creator of this content (Benjamin Huffman) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?x=0&y=0&author=Benjamin%20Huffman
	Please take note that some features of the Pugilist class are unique and not supported by the character sheet, such as adding Constitution modifier to AC instead of Dexterity when wearing light armour.
*/

var iFileName = "Pugilist v3.1 [Benjamin Huffman's work, transcribed by tables-r-us, MPMB, FishyFing & Sir_Bacon_Snout].js";
RequiredSheetVersion(12.999);

ClassList["Dragon Knight"] = {
	regExpSearch : /Dragon Knight/i,
	name : "Dragon Knight",
	source : ["BH:PC", 3],
	primaryAbility : "\n \u2022 Dragon Knight: Strength or Dex;",
	prereqs : "\n \u2022 Dragon Knight: Strength 13 or Dexterity 13 and Wisdom 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Str", "Wis"],
	toolProfs : {
		primary : [["None", 1]]
	},
	skills : ["\n\n" + toUni("Dragon Knight") + ": Choose two skills from Acrobatics, Athletics, Nature, Intimidation, Insight, Perception, and Intimidation."],
	armor : [
		[true, true, true, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
        [true,true]
	],  
	equipment : "Dragon Knight starting equipment:\n \u2022  Leather armor -or- Chain Mail;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A one-handed martial melee weapon and a shield, or a pike(If you choose the pike, you can treat iy as if it has the finesse property), or 2 one-handed martial melee weapons.;\n \u2022 2 hand axes or 2 javelins (If you choose the javelins, you can treat them as if they have the finesse property)",
	subclasses : ["Draconic Calling", ["The Dragoon", "The Warblade", "The Defender",]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"Dragon Pact" : {
			name : "Dragon pact",
			source : ["BH:PC", 5],
			minlevel : 1,
			description : "\n   " + "Choose an adult or ancient Chromatic, Metallic, or Gem Dragon" + "\n   " + "" + "\n   " + "When I take an Attack action with these, I get one unarmed strike or grapple as a bonus action",
            choices : ["Black", "Blue", "Brass","Bronze","Copper","Crystal","Emerald","Gold","Green","Red","Sapphire","Silver","Topaz","White"], //optional; choices the feature offers, if any.
			choicesNotInMenu : true, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"great weapon fighting" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Black", //required;
				description : "\n   " + "Damage type-Acid","Breath Weapon-90ft line 10ft wide" //required;
			},

			"" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Protection Fighting Style",
				description : "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I need to be wielding a shield and be able to see the attacker to do this",
				action : ["reaction", ""] //optional; adds the name of this choice to the reaction list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			},

			"two-weapon fighting" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Two-Weapon Fighting Style",
            },

		},
		"iron chin" : {
			name : "Iron Chin",
			source : ["BH:PC", 5],
			minlevel : 1,
			description : "\n   " + "My AC uses my Con Mod instead of Dex mod while wearing light or no armor and no shield"
		},
		"moxie" : {
			name : "Moxie",
			source : ["BH:PC", 5],
			minlevel : 2,
			description : "\n   " + "I can spend moxie to fuel special actions (see third page)" + "\n   " + "I need to spar for at least 30 min of a short rest to restore moxie",
			usages : ["", 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 12],
			recovery : "short rest",
			extraname : "Moxie Feature",
			"brace up" : {
				name : "Brace up",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "I can roll my fisticuffs die and gain temporary hit points equal to the number rolled + my pugilist level + my Constitution modifier.",
				action : ["bonus action", ""]
			},
			"the old one-two" : {
				name : "The Old One-Two",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "After taking the Attack action, I can make 2 unarmed attacks as a bonus action",
				action : ["bonus action", " (after Attack action)"]
			},
			"stick and move" : {
				name : "Stick and Move",
				source : ["BH:PC", 5],
				description : " [1 moxie point]" + "\n   " + "As a bonus action, I can either Dash or or make a shove attack.",
				action : ["bonus action", ""]
			},
			eval : "ClassFeatureOptions(['pugilist', 'moxie', 'brace up', 'extra']); ClassFeatureOptions(['pugilist', 'moxie', 'the old one-two', 'extra']); ClassFeatureOptions(['pugilist', 'moxie', 'stick and move', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'moxie', 'brace up', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'moxie', 'the old one-two', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'moxie', 'stick and move', 'extra'], 'remove');",
		},
		"street smart" : {
			name : "Street Smart",
			source : ["BH:PC", 5],
			minlevel : 2,
			description : "\n   " + "I know all public locations and cannot be lost by non-magical means within the city.",
			additional : ["After 8 hours of Carousing"]
		},
		"bloodied but unbowed" : {
			name : "Bloody but Unbowed",
			source : ["BH:PC", 5],
			minlevel : 3,
			description : "\n   " + "At half or less of my maximum hit points, I gain temporary hit points, and regain all expended moxie points.",
			usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
			additional : ["", "", "3 + Con Mod temp HP", "4 + Con Mod temp HP", "5 + Con Mod temp HP", "6 + Con Mod temp HP", "7 + Con Mod temp HP", "8 + Con Mod temp HP", "9 + Con Mod temp HP", "10 + Con Mod temp HP", "11 + Con Mod temp HP", "12 + Con Mod temp HP", "13 + Con Mod temp HP", "14 + Con Mod temp HP", "15 + Con Mod temp HP", "16 + Con Mod temp HP", "17 + Con Mod temp HP", "18 + Con Mod temp HP", "19 + Con Mod temp HP", "20 + Con Mod temp HP"]
		},
		"subclassfeature3" : {
			name : "Fight Club",
			source : ["BH:PC", 5],
			minlevel : 3,
			description : "\n   " + "Choose a Fight Club to train in and put it in the \"Class\" field on page 1" + "\n   " + "Choose either the Arena Royale, the Bloodhound Bruisers, the Piss and Vinegar, the Squared Circle, or the Sweet Science."
		},
		"dig deep" : {
			name : "Dig Deep",
			source : ["BH:PC", 5],
			minlevel : 4,
			description : "\n   " + "As a bonus action, I gain resistance to bludgeoning, piercing, and slashing damage for one minute." + "\n   " + "At the end of that minute, I gain a level of exhaustion.",
			action : ["bonus action", ""],
			dmgres : [["Bludgeoning", "Bludgeon. (dig deep)"], ["Piercing", "Piercing (dig deep)"], ["Slashing", "Slashing (dig deep)"]]
		},
		"extra attack" : {
			name : "Extra Attack",
			source : ["BH:PC", 5],
			minlevel : 5,
			description : "\n   " + "I can attack twice, instead of once, whenever I take the Attack action on my turn."
		},
		"haymaker" : {
			name : "Haymaker",
			source : ["BH:PC", 5],
			minlevel : 5,
			description : "\n   " + "Disadv. on melee weapon attacks during my turn, but I deal maximum damage if an attack hits."
		},
		"moxie-fueled fists" : {
			name : "Moxie-Fueled Fists",
			source : ["BH:PC", 5],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes count as magical for overcoming resistances and immunities",
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."]
			}
		},
		"fancy footwork" : {
			name : "Fancy Footwork",
			source : ["BH:PC", 5],
			minlevel : 7,
			description : "\n   " + "I am proficient with Dex saves",
			saves : ["Dex"]
		},
		"shake it off" : {
			name : "Shake it Off",
			source : ["BH:PC", 5],
			minlevel : 7,
			description : "\n   " + "As an action, I can end one effect on me that causes me to be charmed or frightened",
			action : ["action", ""]
		},
		"down but not out" : {
			name : "Down but Not Out",
			source : ["BH:PC", 5],
			minlevel : 9,
			description : "\n   " + "After using Bloody but Unbowed, I add my proficiency bonus to damage with unarmed attacks and pugilist weapons for the next minute.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "long rest"
		},
		"school of hard knocks" : {
			name : "School of Hard Knocks",
			source : ["BH:PC", 6],
			minlevel : 10,
			description : "\n   " + "I gain resistance to psychic damage and advantage on saving throws against effects that would make me stunned or unconscious.",
			dmgres : ["Psychic"]
		},
		"rabble rouser" : {
			name : "Rabble Rouser",
			source : ["BH:PC", 6],
			minlevel : 13,
			description : "\n   " + "After carousing, I gain advantage on Persuasion and Intimidation rolls made against the people who live in the city."
		},
		"unbreakable" : {
			name : "Unbreakable",
			source : ["BH:PC", 6],
			minlevel : 14,
			description : "\n   " + "I have advantage on Strength, Dexterity, and Constitution saving throws." + "\n   " + "I can reroll a failed save once by spending 1 moxie point"
		},
		"herculean" : {
			name : "Herculean",
			source : ["BH:PC", 6],
			minlevel : 15,
			description : "\n   " + "My carrying capacity is doubled, and I deal double damage with a melee weapon or unarmed strike to an inanimate objects." + "\n   " + "My standing jump distance is the same as my running start jump distance."
		},
		"fighting spirit" : {
			name : "Fighting Spirit",
			source : ["BH:PC", 6],
			minlevel : 18,
			description : "\n   " + "When I am reduced to 0 hit points and have less than 5 levels of exhaustion, I regain half of my maximum hit points and moxie points, and I gain a level of exhaustion.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest"
		},
		"peak physical condition" : {
			name : "Peak Physical Condition",
			source : ["BH:PC", 6],
			minlevel : 20,
			description : "\n   " + "My Strength and Constitution ability scores increase by 2 to a maximum of 22." + "\n   " + "I recover 2 levels of exhaustion instead of 1 and regain all expended hit dice after a long rest."
		}
	}
};

ClassSubList["club of the arena royale"] = {
	regExpSearch : /^(((?=.*pugilist)(?=.*arena)(?=.*royale))|(?=.*luchador)).*$/i,
	subname : "Club of the Arena Royale",
	fullname : "Pugilist (Arena Royale)",
	source : ["BH:PC", 6],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["BH:PC", 6],
			minlevel : 3,
			description : "\n   " + "I gain proficiency in the Performance skill, if I don’t have it already. If I do, I gain proficiency in my choice of the Intimidation or Persuasion skill.",
			skillstxt : "\n\n" + toUni("Pugilist") + ": I gain proficiency in the Performance skill if I do not have it, or I choose one from Intimidation or Persuasion.",
		},
		"subclassfeature3" : {
			name : "Persona Libre",
			source : ["BH:PC", 6],
			minlevel : 3,
			description : "\n   " + "I create an alternate persona that I can adopt or discard as a bonus action on my turn. ",
			extraname : "Persona Libre",
			"persona libre" : {
				name : "Persona Libre",
				source : ["BH:PC", 6],
				description : "\n   " + "When I create an alternate persona I should give the persona a striking name as well as some physical signifier (such as a mask, colorful cape, or another prominent idiosyncratic feature). Unless I tell a creature, or the creature sees me adopt my persona, they do not know me and the adopted persona are the same person." + "\n   " + "Additionally, I have a pool of persona points equal to 3 + my Charisma modifier (minimum 1). When I use an ability that costs moxie points, I can spend persona points instead. In addition, before I make a Charisma ability check I can spend a persona point to add my Strength modifier to the result. I can only use persona points while I have adopted my persona. I regain all expended persona points when I finish a long rest.",
			},
			usages : levels.map(function (n) {
				if (n < 3) return "";
				return "3 + Cha Mod (min 1) Persona Points";
			}),
			recovery : "long rest",
			action : ["bonus action", "adopt or discard"]
		},
		"subclassfeature6" : {
			name : "Work the Crowd",
			source : ["BH:PC", 6],
			minlevel : 6,
			description : "\n   " + "While I have adopted my alternate persona, I can use my action to inspire my choice of fear or adoration in those nearby.",
			extraname : "Work the Crowd",
			"work the crowd" : {
				name : "Work the Crowd",
				source : ["BH:PC", 6],
				description : "\n   " + "When I do, all creatures within 30 feet who can see me must succeed on a Wisdom saving throw (DC 8 + my proficiency bonus + my Strength modifier) or be charmed, if I chose adoration, or frightened if I chose fear. This effect lasts for one minute. Each time a creature takes damage from me or one of my allies it can repeat the saving throw, ending the effect on a success."
			},
			action : ["action", ""],
			usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "High Flyer",
			source : ["BH:PC", 6],
			minlevel : 11,
			description : "\n   " + "My base movement speed increases by 10 feet, my jump distance is doubled, and I can use a bonus action on my turn to take the Dash action.",
			speed: {
				walk : { spd : "+10", enc : 0 }
			},
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Signature Move",
			source : ["BH:PC", 6],
			minlevel : 17,
			description : "\n   " + "I create a signature move that I can use while I have adopted my alternate persona. I give my signature move a name and a description. I can replace one of my unarmed attacks or attacks with a pugilist weapon on my turn with this signature move.",
			extraname : "Signature Move",
			"signature move" : {
				name : "Signature Move",
				source : ["BH:PC", 7],
				description : "\n   " + "When I use my signature move, I can jump in any direction up to my movement speed, make an attack roll with advantage against a creature in my reach and, if I hit, the attack is a critical and the creature is stunned until the end of my next turn." + "\n   " + "If I hit with my signature move, I must finish a long rest before I can use it again. If I miss with my signature move, I regain the use of it after 1 minute."
			},
			eval : "ClassFeatureOptions(['pugilist', 'subclassfeature11', 'signature move', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'subclassfeature11', 'signature move', 'extra'], 'remove');",
		}
	}
};

ClassSubList["club of the bloodhound bruisers"] = {
	regExpSearch : /^(((?=.*pugilist)(?=.*bloodhound)(?=.*bruisers))|(?=.*enforcer)).*$/i,
	subname : "Club of the Bloodhound Bruisers",
	fullname : "Pugilist (Bloodhound Bruisers)",
	source : ["BH:PC", 7],
	features : {
		"subclassfeature3" : {
			name : "Ever Vigilant",
			source : ["BH:PC", 7],
			minlevel : 3,
			description : "\n   " + "I have advantage on initiative rolls. During the first round of combat, I have advantage on attack rolls against creatures who haven’t acted yet."
		},
		"subclassfeature3" : {
			name : "Detective Work",
			source : ["BH:PC", 7],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two of the following skills of my choice: Insight, Investigation, or Perception. In addition, when I make an Intelligence (Investigation), Wisdom (Insight), or Wisdom (Perception) ability check I can spend 1 moxie point to gain advantage on that ability check.",
			skillstxt : "\n\n" + toUni("Pugilist") + ": Choose two from Insight, Perception and Investigation.",
			additional : ["1 Moxie point"]
		},
		"subclassfeature6" : {
			name : "Scrap Like a Sleuth",
			source : ["BH:PC", 7],
			minlevel : 6,
			description : "\n   " + "I can use a bonus action and expend 2 moxie points to hone in on the idiosyncrasies and bad habits of an enemy I can see within 30 feet. When I do, I have advantage on weapon attacks against the creature and I add my proficiency bonus to my AC against attacks made by that creature. These effects continue for 1 minute or until I use this feature again.",
			action : ["bonus action", ""],
			additional : ["2 Moxie points"]
		},
		"subclassfeature11" : {
			name : "Heart of the City",
			source : ["BH:PC", 7],
			minlevel : 11,
			description : "\n   " + "When I take a long rest in a settlement, I can choose to become familiar with the settlement. When I use this feature again, I replace my previous familiar settlement with the current one." + "\n   " + "While in a familiar settlement, I gain the benefits listed on page 3.",
			extraname : "Heart of the City",
			"heart of the city" : {
				name : "Heart of the City",
				source : ["BH:PC", 7],
				description : "\n   " + "While familiar with a settlement I gain the following benefits:" + "\n    - " + "I cannot be surprised and I add my proficiency bonus to my initiative" + "\n    - " + "I have darkvision to a range of 120 feet" + "\n    - " + "When I make an ability check using the Insight, Investigation, or Perception skills and I am proficient in that skill, I add double my proficiency modifier to the ability check" + "\n    - " + "I cannot be lost by any means, and I can travel between any two points in the settlement twice as fast as my speed would normally allow."
			},
			eval : "ClassFeatureOptions(['pugilist', 'subclassfeature11', 'heart of the city', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'subclassfeature11', 'heart of the city', 'extra'], 'remove');"
		},
		"subclassfeature17" : {
			name : "Eyes Wide Open",
			source : ["BH:PC", 7],
			minlevel : 17,
			description : "\n   " + "I can use a bonus action and spend 1 moxie point to open my senses to my surroundings for 1 minute. During this time, I have advantage on saving throws against being blinded or deafened and have truesight out to a distance of 30 feet.",
			action : ["bonus action", ""],
			additional : ["1 Moxie point"]
		}
	}
};

ClassSubList["club of the dog and hound"] = {
	// todo
	regExpSearch : /^((?=.*pugilist)(?=.*dog)(?=.*hound)).*$/i,
	subname : "Club of the Dog and Hound",
	fullname : "Pugilist (Dog & Hound)",
	source : ["BH:PC", 7],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["BH:PC", 7],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the Animal Handling skill if I don’t already have it. If I do, I gain proficiency in my choice of the Perception or Survival skill.",
			skillstxt : "\n\n" + toUni("Pugilist") + ": I gain proficiency in the Animal Handling skill if I do not have it, or I choose one from Intimidation or Persuasion."
		},
		"subclassfeature3" : {
			name : "Brawler's Best Friend",
			source : ["BH:PC", 7],
			minlevel : 3,
			description : "\n   " + "I gain a hound that accompanies me on my adventures and fights alongside me. My hound can be any breed of dog or similar canine creature, but uses the statistics of a wolf. I add my proficiency bonus to my hound’s AC, saving throws, attack rolls, and damage rolls.",
			extraname : "Brawler's Best Friend",
			"brawler's best friend" : {
				name : "Brawler's Best Friend",
				source : ["BH:PC", 7],
				description : "\n   " + "For each level I gain after 3rd, my hound gains an additional d8 hit die and increases its hit points accordingly." + "\n   " + "I can use a bonus action on each of my turns to verbally command my hound to take the Attack, Dash, Disengage, Dodge, or Help action that turn. It does not have its own turn unless I am incapacitated or absent. If I am incapacitated or absent, the hound acts on its own (continuing to act on my turn, if I am incapacitated), focusing on protecting me and itself. The hound never requires my command to use its reaction, such as when making an opportunity attack." + "\n   " + "If my hound dies, I can obtain a new one by spending 8 hours bonding with a canine animal that isn’t hostile to me."
			}
		},
		"subclassfeature3" : {
			name : "Mutt With Moxie",
			source : ["BH:PC", 8],
			minlevel : 3,
			description : "\n   " + "I share everything with my faithful hound: food, shelter, even moxie. When I use certain moxie abilities, my hound gains a benefit as well.",
			extraname : "Mutt With Moxie",
			"brace up" : {
				name : "Brace up",
				source : ["BH:PC", 8],
				description : "\n   " + "When I gain temporary hit points as a result of using my Brace Up moxie ability, my hound gains the same number of temporary hit points.",
			},
			"the old one-two" : {
				name : "The Old One-Two",
				source : ["BH:PC", 8],
				description : "\n   " + "When I use my The Old One-Two moxie ability, my hound can make one or both attacks instead of you.",
				action : ["bonus action", " (after Attack action)"]
			},
			"stick and move" : {
				name : "Stick and Move",
				source : ["BH:PC", 8],
				description : "\n   " + "When I use my Stick and Move moxie ability, my hound can take the Dash action.",
				action : ["bonus action", ""]
			},
			eval : "ClassFeatureOptions(['pugilist', 'subclassfeature3', 'brace up', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'the old one-two', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'stick and move', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'subclassfeature3', 'brace up', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'the old one-two', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'stick and move', 'extra'], 'remove');",
		},
		"subclassfeature6" : {
			name : "Arcanine Bite",
			source : ["BH:PC", 8],
			minlevel : 6,
			description : "\n   " + "My hound’s attacks count as magical for the purpose of overcoming resistance and immunity to non-magical attacks and damage."
		},
		"subclassfeature6" : {
			name : "Coordinated Attack",
			source : ["BH:PC", 8],
			minlevel : 6,
			description : "\n   " + "My canine companion and I form a more potent fighting team. When I use the Attack action on my turn, if my hound can see me, it can use its reaction to make a melee attack."
		},
		"subclassfeature11" : {
			name : "Hound's Best Friend",
			source : ["BH:PC", 8],
			minlevel : 11,
			description : "\n   " + "When a creature deals damage to my hound with an attack, I can use my reaction to make an opportunity attack against that creature if I am within range."
		},
		"subclassfeature17" : {
			name : "Dire Hound",
			source : ["BH:PC", 8],
			minlevel : 17,
			description : "\n   " + "I use the statistics for a dire wolf, instead of a wolf, for my hound, except that its size remains Medium. These statistics are modified as described in my Brawler’s Best Friend feature."
		}
	}
};

ClassSubList["club of the piss and vinegar"] = {
	regExpSearch : /^(((?=.*pugilist)(?=.*piss)(?=.*vinegar))|(?=.*brawler)).*$/i,
	subname : "Club of the Piss and Vinegar",
	fullname : "Pugilist (Piss and Vinegar)",
	source : ["BH:PC", 8],
	abilitySave : 5,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["BH:PC", 8],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the Intimidation skill.",
			skillstxt : "\n\n" + toUni("Pugilist (Piss and Vinegar)") + ": Intimidation",
		},
		"subclassfeature3" : {
			name : "Salty Salute",
			source : ["BH:PC", 8],
			minlevel : 3,
			description : "\n   " + "I can use a bonus action to provoke a creature within 60 feet." + "\n   " + "That creature must make a Wisdom saving throw. On a failure, the creature takes my fisticuff’s damage die + my Charisma modifier in psychic damage and has disadvantage on any attack rolls it makes that do not include me as a target before the start of my next turn.",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Dirty Tricks",
			source : ["BH:PC", 8],
			minlevel : 6,
			description : "\n   " + "I have a few tricks up my sleeve to even the odds when the going gets rough. I can use each of these dirty tricks once and regain their use when I finish a short or long rest.",
			extraname : "Dirty Tricks",
			eval : "ClassFeatureOptions(['pugilist', 'subclassfeature6', 'heelstomper', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature6', 'low blow', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature6', 'pocket sand', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'subclassfeature6', 'heelstomper', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature6', 'low blow', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature6', 'pocket sand', 'extra'], 'remove');",
			"heelstomper" : {
				name : "Heelstomper",
				source : ["BH:PC", 8],
				description : "\n   " + "When I deal damage with an unarmed attack, I attempt to slow the creature you hit. The creature must make a Dexterity saving throw. On a failure, I gain 1 moxie point (up to your maximum) and its movement speed is halved for one minute.",
				action : ["bonus action", ""],
				usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "short rest"
			},
			"low blow" : {
				name : "Low Blow.",
				source : ["BH:PC", 8],
				description : "\n   " + "When I deal damage with an unarmed attack I can choose to hit them below the belt. The creature must make a Strength saving throw. On a failure, I gain 1 moxie point (up to my maximum) and it is knocked prone.",
				action : ["bonus action", ""],
				usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "short rest"
			},
			"pocket sand" : {
				name : "Pocket Sand",
				source : ["BH:PC", 8],
				description : "\n   " + "I can use a bonus action to attempt to blind a creature within 5 feet. The creature must make a Constitution saving throw. On a failure, I gain 1 moxie point (up to my maximum) and it is blinded until the end of its next turn.",
				action : ["bonus action", ""],
				usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "short rest"
			}
		},
		"subclassfeature11" : {
			name : "Mean Old Cuss",
			source : ["BH:PC", 8],
			minlevel : 11,
			description : "\n   " + "When I make a Charisma (Intimidation) ability check, I can use my reaction and spend 1 moxie to give myself advantage on the roll." + "\n   " + "When a creature makes a saving throw against one of my Piss & Vinegar features, I can use my reaction and spend 1 moxie to give that roll disadvantage."
		},
		"subclassfeature17" : {
			name : "The Uncouth Art",
			source : ["BH:PC", 8],
			minlevel : 17,
			description : "\n   " + "When I use my Salty Salute feature, I can choose to target a number of creatures within 60 feet who can see or hear me up to your level in this class instead of a single creature. I gain 1 moxie point (up to my maximum) the first time each creature targeted in this way hits me with an attack before the start of my next turn.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
			recovery : "long rest"
		}
	}
};

ClassSubList["club of the squared circle"] = {
	regExpSearch : /^(((?=.*pugilist)(?=.*squared)(?=.*circle))|(?=.*wrestler)).*$/i,
	subname : "Club of the Squared Circle",
	fullname : "Pugilist (Squared Circle)",
	source : ["BH:PC", 9],
	features : {
		"subclassfeature3" : {
			name : "Groundwork",
			source : ["BH:PC", 9],
			minlevel : 3,
			description : "\n   " + "I know special moves and can use them by spending moxie.",
			extraname : "Groundwork",
			eval : "ClassFeatureOptions(['pugilist', 'subclassfeature3', 'compression lock', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'quick pin', 'extra']); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'to the mat', 'extra']);",
			removeeval : "ClassFeatureOptions(['pugilist', 'subclassfeature3', 'compression lock', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'quick pin', 'extra'], 'remove'); ClassFeatureOptions(['pugilist', 'subclassfeature3', 'to the mat', 'extra'], 'remove');",
			"compression lock" : {
				name : "Compression Lock",
				source : ["BH:PC", 9],
				description : " [1 moxie point]" + "\n   " + "When a creature attempts to break a grapple with me and succeeds, I can spend 1 moxie point to force the creature to roll again. The creature must use the second result.",
				action : ["reaction", ""]
			},
			"quick pin" : {
				name : "Quick Pin",
				source : ["BH:PC", 4],
				description : " [1 moxie point]" + "\n   " + "I can grapple as an opportunity attack",
				action : ["reaction", "(Opportunity Attack)"]
			},
			"to the mat" : {
				name : "To the Mat",
				source : ["BH:PC", 4],
				description : " [1 moxie  point]" + "\n   " + "As a bonus action, I make a grapple attack against a creature within range. If successful, the creature is also knocked prone..",
				action : ["bonus action", ""]
			}
		},
		"subclassfeature6" : {
			name : "Meat Shield",
			source : ["BH:PC", 9],
			minlevel : 6,
			description : "\n   " + "While grappling, I gain half cover against creatures I am not grappling." + "\n   " + "When a creature misses me, spend 1 moxie point to have that creature make the same attack with a new roll against an enemy creature I am grappling",
			action : ["reaction", " (while grappling)"]
		},
		"subclassfeature11" : {
			name : "Heavyweight",
			source : ["BH:PC", 9],
			minlevel : 11,
			description : "\n   " + "I count as one size larger for the purposes of grappling." + "\n   " + "I can move my full movement speed when I am grappling creature my size or smaller."
		},
		"subclassfeature17" : {
			name : "Clean Finish",
			source : ["BH:PC", 9],
			minlevel : 17,
			description : "\n   " + "While I have a creature grappled, I gain advantage on all attacks against it." + "\n   " + "I score a critical hit on a roll of 19 or 20 against creatures I have grappled when using a pugilist weapon or making an unarmed strike.",
		}
	}
};

ClassSubList["club of the sweet science"] = {
	regExpSearch : /^(((?=.*pugilist)(?=.*sweet)(?=.*science))|(?=.*boxer)).*$/i,
	subname : "Club of the Sweet Science",
	fullname : "Pugilist (Sweet Science)",
	source : ["BH:PC", 9],
	features : {
		"subclassfeature3" : {
			name : "Cross Counter",
			source : ["BH:PC", 9],
			minlevel : 3,
			description : "\n   " + "As a reaction, I can reduce melee weapon attack damage done to me." + "\n   " + "If the damage is negated, I can make an pugilist weapon attack against a creature within range.",
			action : ["reaction", ""],
			additional : ["", "", "1d10 + 3 + Strength modifier; 2 moxie to attack", "1d10 + 4 + Strength modifier; 2 moxie to attack", "1d10 + 5 + Strength modifier; 2 moxie to attack", "1d10 + 6 + Strength modifier; 2 moxie to attack", "1d10 + 7 + Strength modifier; 2 moxie to attack", "1d10 + 8 + Strength modifier; 2 moxie to attack", "1d10 + 9 + Strength modifier; 2 moxie to attack", "1d10 + 10 + Strength modifier; 2 moxie to attack", "1d10 + 11 + Strength modifier; 2 moxie to attack", "1d10 + 12 + Strength modifier; 2 moxie to attack", "1d10 + 13 + Strength modifier; 2 moxie to attack", "1d10 + 14 + Strength modifier; 2 moxie to attack", "1d10 + 15 + Strength modifier; 2 moxie to attack", "1d10 + 16 + Strength modifier; 2 moxie to attack", "1d10 + 17 + Strength modifier; 2 moxie to attack", "1d10 + 18 + Strength modifier; 2 moxie to attack", "1d10 + 19 + Strength modifier; 2 moxie to attack", "1d10 + 20 + Strength modifier; 2 moxie to attack"]
		},
		"subclassfeature6" : {
			name : "One, Two, Three, Floor",
			source : ["BH:PC", 9],
			minlevel : 6,
 			description : "\n   " + "If both of the Old One-Two attacks are successful, I can spend 1 moxie point to make an extra unarmed strike." + "\n   " + "If this additional attack hits, I deal no damage and the creature is knocked prone.",
		},
		"subclassfeature11" : {
			name : "Float Like a Butterfly, Sting Like a Bee",
			source : ["BH:PC", 9],
			minlevel : 11,
			description : "\n   " + "When I successfully hit an enemy creature using my Cross Counter feature, I regain 1 moxie point."
		},
		"subclassfeature17" : {
			name : "Knock Out",
			source : ["BH:PC", 9],
			minlevel : 17,
			description : "\n   " + "I can spend 1 or more moxie points to try to knock out the opponent instead of dealing damage." + "\n   " + "If the total is equal to or greater than the creature's remaining hit points, it is unconscious for 10 minutes",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3d12 + 2d12/extra moxie point + 17", "3d12 + 2d12/extra moxie point + 18", "3d12 + 2d12/extra moxie point + 19", "3d12 + 2d12/extra moxie point + 20"]
		}
	}
};

ClassSubList["club of the whiskey fist"] = {
	regExpSearch : /^(?=.*pugilist)(?=.*whiskey)(?=.*fist).*$/i,
	subname : "Club of the Whiskey Fist",
	fullname : "Pugilist (Whiskey Fist)",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Drink Like A Demon",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "I can use a bonus action on each turn to consume a potion or other beverage. If I consume an alcoholic beverage I can use my reaction to trigger my Bloodied but Unbowed feature."
            	},
		"subclassfeature3" : {
			name : "Fish In Water",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "When i drink an alcoholic beverage, I can use my reaction to gain 1 moxie point."
		},
		"subclassfeature3.3" : {
			name : "Homebrewer",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "I can gain proficiency with brewer's supplies. When I finish a rest, I can use whatever plant materials and water are at hand and brewer’s supplies to create alcoholic beverages. I create 1d3 when you finish a short rest and 2d6 when I finish a long rest. "
		},
		"subclassfeature6" : {
			name : "Hair Of The Dog",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "When I drink an alcoholic beverage, I can use my reaction to lose a level of exhaustion. I can only use this feature once. It does not replenish until after 1 long rest."
		},
        	"subclassfeature11" : {
			name : "Mean Drunk",
			source : ["HB", 0],
			minlevel : 11,
			description : "\n   " + "When I consume an alcoholic beverage, I can use my reaction and spend 5 moxie points to enter a drunken frenzy for 1 minute. When I use my Haymaker feature, I do not gain a disadvantage on my weapon attack rolls. I gain a special reaction I can use each turn to make an opportunity attack. I cannot use my reaction on the same turn I use one of my special reactions. I ignore the effects of exhaustion."
		},
        	"subclassfeature17" : {
			name : "Minotaur In A Glassworker's Shoppe",
			source : ["HB", 0],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning, piercing, and slashing damage. I have an advantage on ability checks that add my Strength modifier. I can move through other creatures. I can use my reaction when I move through a creature one size larger than me or smaller to make a shove attack against that creature."
			}
        }
};

// add additional equipment

WeaponsList["brass knuckles"] = {
	regExpSearch : /^^(?=.*(brass|(knuckles|knucks))|knuckleduster|knucklebuster).*$/i,
	name : "Brass Knuckles",
	source : ["BH:PC", 10],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	weight : 1,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};
WeaponsList["katar"] = {
	regExpSearch : /^(?=.*(katar|dagger|knife)|(scissor|(knife|dagger))).*$/i,
	name : "Katar",
	source : ["BH:PC", 10],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	weight : 3,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};
WeaponsList["knuckle knives"] = {
	regExpSearch : /^(?=.*(knuckle|(knives|claws))|(cat's|cats)|claws).*$/i,
	name : "Knuckle Knives",
	source : ["BH:PC", 10],
	list: "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	weight : 2,
	range : "Melee",
	description : "Light, unarmed",
	abilitytodamage : false
};

SourceList["BH:PC"] = {
	name : "Benjamin Huffman: the Pugilist Class",
	abbreviation : "BH:PC",
	group : "Dungeon Master's Guild",
	url : "https://www.dmsguild.com/product/184921/"
};
// this is a previous script that I stole
//totally quick and dirty affair but I'll steal what's useful

// Re-define the way the experience points are matched to a level, so that each experience point total is matched to double the level
ExperiencePointsList = ["", "", 300, 300, 900, 900, 2700, 2700, 6500, 6500, 14000, 14000, 23000, 23000, 34000, 34000, 48000, 48000, 64000, 64000, 85000, 85000, 100000, 100000, 120000, 120000, 140000, 140000, 165000, 165000, 195000, 195000, 225000, 225000, 265000, 265000, 305000, 305000, 355000, 355000, 1000000000, 1000000000];

// Make it so that the Level field shows only half the level
tDoc.getField("Character Level").setAction("Format", "event.value = event.value ? Math.floor(event.value/2) : '';");

// Make the proficiency bonus that which it would be for half the level
if (tDoc.info.SheetVersion < 13) {
	eval(ProfBonus.toString().replace("function ProfBonus", "ProfBonus = function"). replace('var lvl = What(QI === true ? "Character Level" : QI + "Comp.Use.HD.Level");', 'var charLvl = What("Character Level"); var lvl = QI === true ? (charLvl ? charLvl/2 : 0) : What(QI + "Comp.Use.HD.Level");'));
} else {
	ProficiencyBonusList = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6];
}

// Change the cantrip damage die so that it only goes up at the double level
cantripDie = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
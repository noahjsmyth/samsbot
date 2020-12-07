var fortunes = [
"Class Reunion",
"Discipline",
"Taboo Charming Mother",
"Akiba Girls",
"Ane Chanto Shiyou Yo",
"It’s A Family Affair",
"G Spot Express",
"The Hills Have Size",
"Stringendo + Accelerando",
"Sora No Iro Mizu No Iro",
"Ane Haramix",
"Anejiru (both seasons)",
"Honoo No Haramase Tenkousei",
"Hatsu Inu",
"Sono Hanabira",
"Resort Boin",
"Kateikyoushi No Oneesan (first season only)",
"Dirty Laundry",
"Space Pirate Sara",
"AneImo",
"Café Junkie",
"Lover In Law",
"Tsuma Shibori",
"Kanojo x Kanojo x Kanojo",
"Oni Chichi",
"15 Bishoujo Hyouryuuki",
"Fault (both series)",
"Immoral Mother",
"Triple Ecchi",
"Fukubiki Triangle",
"Princess Lover",
"Bust To Bust",
"Eroge H mo Game (favourite hentai)",
"Bloods Inraku No Ketsuzoku",
"Nee Summer",
"Swing Out Sisters",
"Oppai Heart",
"Shocking Pink",
"Sweet Home H Na Onee-san",
"Vampire",
"Kyonyuu Fantasy",
"Tropical Kiss",
"Harem Time",
"Tsugou no Yoi Sexfriend",
"First Love",
"Crimson Girls",
"Tsun Tsun Maid",
"Joshikousei No Koshitsuki",
"M Okui Last Order",
"Wanna Spartan Sex Spermax",
"Baku Ane (Why this never got a second episode, I don’t know)",
"Okusama wa Moto Yariman",
"Tsunpuri",
"Kanojo wa Dare to demo Sex Suru",
"Gyakuten Majo Saiban",
"Mankitsu Happening",
"Ane Yome Quartet",
"Rinkan Biyaku",
"Rance",
"Dropout",
"Bible Black",
"Body Transfer",
"Sexfriend",
"Tentacles And Witches",
"Euphoria",
"Please Rape Me",
"KuroInu (For those wanting a little monsters)",
"Helter Skelter"
];



module.exports = {
	name: 'hentairec',
	description: 'Predict your future!',
	execute(message, args) {
		message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
		
  


		
	},
};



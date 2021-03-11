const Discord = require('discord.js');








module.exports = {
  name: "fuck",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  

	  
	  
	  
	  
	  
var confmessages = [
  `Hey, <@${message.mentions.users.first().id}>, someone wants to fuck ya, what do you think? :smirk:`,
  `Whats up <@${message.mentions.users.first().id}>, you dtf?`,
  `<@${message.mentions.users.first().id}> *D-do I h-have p-permission to f-fuck you?*`,
  `<@${message.mentions.users.first().id}> Fuck me, *please?*`
];

var rejmessages = [
  `someone wants to fuck`,
  `you dtf?`,
  `someone's horny for you :smirk:`,
  `gonna fuck them?`
];

var fuckmessages = [
  `<@${message.mentions.users.first().id}> pushes <@${message.author.id}> against a wall and fucks them hard.`,
  `<@${message.mentions.users.first().id}> gets penetrated by <@${message.author.id}>.`,
  `<@${message.author.id}> fucks <@${message.mentions.users.first().id}> to orgasm heaven.`,
  `<@${message.author.id}>'s dick nearly tears <@${message.mentions.users.first().id}>'s tight ass.`
];
	  
	  
	  
	  
let image = (await irlnsfw.pgif());	  
	  
const confembed = new Discord.RichEmbed()
	.setDescription(confmessages[Math.floor(Math.random() * confmessages.length)])
	.setColor('#000000')	  

const fuckembed = new Discord.RichEmbed()
	.setDescription(fuckmessages[Math.floor(Math.random() * fuckmessages.length)])
	.setImage(image)
	.setColor('#000000')	
	  
	  
	  
	  if (!args[0]) {
		  message.channel.send(':x: | You need to ping someone if you want to fuck them, silly!');
		  
	  }
	 
	  if (!message.mentions.users) {
		  message.channel.send(':x: | You need to ping someone if you want to fuck them, silly!');
		  
	  }
	  else {
	message.channel.send(confembed);
		  
		  
const yesfilter = m => m.content.includes('yes') && m.author.id === message.mentions.users.first().id;
const yescollector = message.channel.createMessageCollector(yesfilter, { time: 15000000 });
const nofilter = m => m.content.includes('no') && m.author.id === message.mentions.users.first().id;
const nocollector = message.channel.createMessageCollector(nofilter, { time: 15000000 });		  

yescollector.on('collect', m => {
	console.log(`Collected ${m.content}`);
  message.channel.send(fuckembed);
	yescollector.stop();
	nocollector.stop();
});


	nocollector.on('collect', m => {
	console.log(`Collected ${m.content}`);
  message.channel.send('They said no, dumbass');
	nocollector.stop();	
	yescollector.stop();
});
                    }
	  }
}
 
                  
                    
                   

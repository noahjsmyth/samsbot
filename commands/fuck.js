const Discord = require('discord.js');
var confmessages = [
  `someone wants to fuck`,
  `you dtf?`,
  `someone's horny for you :smirk:`,
  `gonna fuck them?`
];

var rejmessages = [
  `someone wants to fuck`,
  `you dtf?`,
  `someone's horny for you :smirk:`,
  `gonna fuck them?`
];

var fuckmessages = [
  `someone wants to fuck`,
  `you dtf?`,
  `someone's horny for you :smirk:`,
  `gonna fuck them?`
];

let image = (await irlnsfw.pgif());





module.exports = {
  name: "fuck",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  
	  
	  
const confembed = new Discord.RichEmbed()
	.setDescription(confmessages[Math.floor(Math.random() * confmessages.length)])
	.setColor('#000000')	  

const fuckembed = new Discord.RichEmbed()
	.setDescription(fuckmessages[Math.floor(Math.random() * fuckmessages.length)])
	.setImage(image)
	.setColor('#000000')	
	  
	  
	  
	  
	  
	  
	  if (!message.mentions.users.first()) {
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
 
                  
                    
                   

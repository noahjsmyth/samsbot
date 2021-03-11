const Discord = require('discord.js');
var confmessages = [
  `someone wants to fuck`,
  `you dtf?`,
  `someone's horny for you :smirk:`,
  `gonna fuck them?`
];






module.exports = {
  name: "fuck",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  
	  
	  
const confembed = new Discord.RichEmbed()
	.setDescription(fortunes[Math.floor(Math.random() * fortunes.length)])
	.setColor('#000000')	  
	  
	  
	  
	  
	  
	  
	  if (!message.mentions.users.first()) {
		  message.channel.send('You need to ping someone if you want to fuck them, silly!');
		  
	  }
	  else {
	message.channel.send(confembed);
		  
		  
const yesfilter = m => m.content.includes('yes') && m.author.id === message.mentions.users.first().id;
const yescollector = message.channel.createMessageCollector(yesfilter, { time: 15000000 });
const nofilter = m => m.content.includes('no') && m.author.id === message.mentions.users.first().id;
const nocollector = message.channel.createMessageCollector(nofilter, { time: 15000000 });		  

yescollector.on('collect', m => {
	console.log(`Collected ${m.content}`);
  message.channel.send('it fucking worked! PogChamp');
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
 
                  
                    
                   

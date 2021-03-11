const Discord = require('discord.js');



const confembed = new Discord.RichEmbed()
	.setDescription(`@${message.mentions.users.first().tag}, do you wanna fuck @${message.author.tag}?`})
	.setColor(black)



module.exports = {
  name: "fuck",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  
	  if (!message.mentions.users.first()) {
		  message.channel.send('You need to ping someone if you want to fuck them, silly!');
		  
	  }
	  else {
	message.channel.send(confembed);
    const filter = m => m.content.includes('yes') && m.author.id === message.mentions.users.first().id;
const collector = message.channel.createMessageCollector(filter, { time: 15000000 });

collector.on('collect', m => {
	console.log(`Collected ${m.content}`);
  message.channel.send('it fucking worked! PogChamp');
	
	
	
	
	
	

});
                    }
	  }
 
                    }
                    
                   

const Discord = require('discord.js');
module.exports = {
  name: "fucktest",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  
	message.channel.send('Okay, whoever got pinged needs to say yes. Thanks!');
    const filter = m => m.content.includes('yes') && m.author.id === message.mentions.users.first().id;
const collector = message.channel.createMessageCollector(filter, { time: 15000000 });

collector.on('collect', m => {
	console.log(`Collected ${m.content}`);
  message.channel.send('it fucking worked! PogChamp');
});
                    }
 
                    }
                    
                   

module.exports = {
  name: "pgif",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {  
const collectorTitle = new Discord.MessageCollector(message.channel, m => m.mentions.users.first().id === message.author.id, { time: 10000 });
  collectorTitle.on('collect', message => {message.channel.send('yes')}
                    }
                    }
                    
                   

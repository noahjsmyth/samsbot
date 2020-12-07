



module.exports = {
  name: 'uptime',
  description: 'see bot uptime heehee',
  execute(message, args) {

    
const Discord = require('discord.js');
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;    
      
const uptimeembed = new Discord.RichEmbed()
    .setColor('#ecaff')
    .addField(`:white_check_mark: Uptime`, `${uptime}`)
    .addField(`:person_tipping_hand: Users`, `${client.users.size}`)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL}`)

  

          message.channel.send(uptimeembed);
  },
};

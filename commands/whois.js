module.exports = {
  name: 'whois',
  description: 'find user information',
  execute(message, args) {

    
    const Discord = require('discord.js');

    const noping = new Discord.RichEmbed()
      .setTitle('Your User Information')
      .setColor('#ecaff')
      .addField('Username:', `${message.author.tag}`, true)
      .addField('ID:', `${message.author.id}`, true)
      .addField('Account Creation Date:', `${message.author.createdAt}`, true)
      .addField('Server Join Date:', `${message.member.cache.joinedAt}`, true)
      .setImage(`${message.author.displayAvatarURL}`)
    const pinged = new Discord.RichEmbed()
      .setTitle(`${usertag}'s User Information`)
      .setColor('#ecaff')
      .addField('Username', `${usertag}`, true)
      .addField('ID:', `${message.mentions.users.first().id}`, true)
      .addField('Account Creation Date:', `${message.mentions.users.first().createdAt}`, true)
      .addField('Server Join Date:', `${message.mentions.members.first().joinedAt}`, true)
      .setThumbnail(`${message.mentions.users.first().displayAvatarURL}`)
    
             
        var usertag = message.mentions.users.first().tag;  
    if (message.mentions.users.size < 1) return message.channel.send(noping)
    message.channel.send(pinged)
  },
};

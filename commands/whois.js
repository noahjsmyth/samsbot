module.exports = {
  name: 'whois',
  description: 'find user information',
  execute(message, args) {
    var usertag = message.mentions.users.first().tag;
    const Discord = require('discord.js');
    const noping = new Discord.RichEmbed()
      .setTitle('Your User Information')
      .setColor('#ecaff')
      .addField('Username:', `${message.author.tag}`, true)
      .addField('ID:', `${message.author.id}`, true)
      .addField('Account Creation Date:', `${message.author.createdAt}`, true)
      .addField('Server Join Date:', `${message.author.joinedAt}`, true)
      .setImage(`${message.author.displayAvatarURL}`)
    const pinged = new Discord.RichEmbed()
      .setTitle(`${usertag}'s User Information`)
      .setColor('#ecaff')
      .addField('Username', `${usertag}`, true)
      .addField('ID:', `${message.mentions.users.first().id}`, true)
      .addField('Account Creation Date:', `${message.mentions.users.first().createdAt}`, true)
      .addField('Server Join Date:', `${message.mentions.users.first().joinedAt}`, true)
      .setImage(`${message.mentions.users.first().displayAvatarURL}`)
    
             
      
    if (message.mentions.users.size < 1) return message.channel.send(noping)
    message.channel.send(pinged)
  },
};

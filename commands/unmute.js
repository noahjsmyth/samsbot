const Discord = require('discord.js');  
module.exports = {
	name: 'unmute',
	description: 'Removes a users mute role.',
	execute(message, args) {
	    let noPermission = new Discord.RichEmbed()
        .setAuthor(`No Permission`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, I don't have permission to add roles, contact the staff!`)
        .setFooter(`Check in the mute.js file if there is an error!`)
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(noPermission)
    
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send('You have to @ a user in this discord!')
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"
    let mutedRole = message.guild.roles.find(r => r.name === "Muted")
    if(!mutedRole) return message.channel.send('The user you @ is not muted!')
    mutee.removeRole(mutedRole.id).then(() => {
        message.delete()
        let unmutePing = new Discord.RichEmbed()
            .setAuthor(`UnMuted`, message.guild.iconURL)
            .setColor(0x421C52)
            .setDescription(`${message.author}, you have been unmuted for: ${reason}!`)
            .setFooter(`Check in the unmute.js file if there is an error!`)
        mutee.send(unmutePing).catch(err => console.log(err))
        let channelunmutePing = new Discord.RichEmbed()
        .setAuthor(`UnMuted`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, has been unmuted for: ${reason}!`)
        .setFooter(`Check in the unmute.js file if there is an error!`)
        message.channel.send(channelunmutePing)
    })
	},
};

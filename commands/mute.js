    
module.exports = {
	name: 'mute',
	description: 'help',
	execute: async (message, args) => {

   let noPermission = new Discord.RichEmbed()
        .setAuthor(`No Permission`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, I don't have permission to add roles, contact the staff!`)
        .setFooter(`Check in the mute.js file if there is an error!`, bot.user.displayAvatarURL)
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(noPermission)
    if(!message.member.roles.some(r=>["Creator", "Elves"].includes(r.name)) ){
        let mutePermission = new Discord.RichEmbed()
        .setAuthor(`No Permission`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, you do not have permission to use this command!`)
        .setFooter(`Check in the mute.js file if there is an error!`, bot.user.displayAvatarURL)
        message.channel.send(mutePermission)
    }
        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send('You have to @ a user in this discord!')
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        let mutedRole = message.guild.roles.find(r => r.name === "Muted")
        if(!mutedRole) {
            try{
                mutedRole = await message.guild.createRole({
                    name: "Muted",
                    color: "#131212",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(mutedRole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        SPEAK: false,
                    })
                })
            } catch(e) {
                console.log(e.stack);
            }
        }
    mutee.addRole(mutedRole.id).then(() => {
        message.delete()
        let mutePing = new Discord.RichEmbed()
        .setAuthor(`Muted`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, you have been muted for: ${reason}!`)
        .setFooter(`Check in the mute.js file if there is an error!`, bot.user.displayAvatarURL)
        mutee.send(mutePing)
        let channelmutePing = new Discord.RichEmbed()
        .setAuthor(`Muted`, message.guild.iconURL)
        .setColor(0x421C52)
        .setDescription(`${message.author}, has been muted for: ${reason}!`)
        .setFooter(`Check in the mute.js file if there is an error!`, bot.user.displayAvatarURL)
        message.channel.send(channelmutePing)
    })
  }
}

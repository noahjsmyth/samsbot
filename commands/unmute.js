
module.exports = {
	name: 'unmute',
	description: 'Removes a users mute role.',
	execute(message, args) {
		let reason = args.slice(1).join(' ');
		let user = message.mentions.users.first();
		let role = message.guild.roles.find('name', 'Muted')
		
    
   		if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":no_entry_sign: **Error:** You don't have the **Manage Roles** permission!");
    		if (!message.guild.member(user).roles.has(role)) return message.channel.send(`:no_entry_sign: I cannot unmute that member`);
    		message.guild.member(user).removeRole(role);

    		const embed = new Discord.RichEmbed()
      			.setColor("0xFF0000")
      			.setTimestamp()
      			.addField('Action:', 'Unmute')
      			.addField('User:', `${user.tag} (${user.id})`)
      			.addField('Moderator:', 
      `			${message.author.tag}`)
      			.addField('Reason', reason);
      		return message.channel.send(embed);


	},
};

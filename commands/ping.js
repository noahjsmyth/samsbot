const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute: async (message, args) => {
		const user = message.author.tag;
   		const m = await message.channel.send("Ping?");
		message.react('🏓');
		const embed = new Discord.RichEmbed()
			.setTitle("Pong!")
			.setColor(9384170)
			.addField("Bot Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
			.setFooter(`Requested by: ${user}`, `${message.author.displayAvatarURL}`)
		m.edit(embed);
				   
			
	},
};

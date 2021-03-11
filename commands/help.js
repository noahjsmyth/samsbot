const config = require('../config.json');
const Discord = require('discord.js');

    
    
module.exports = {
	name: 'help',
	description: 'help',
	execute: async (message, args) => {
const user = message.author.tag;
const sfwhelp = new Discord.RichEmbed()
    .setColor('#ecafff')
    .setTitle('Help')
    .setDescription('Command List')
    .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/649adf24-60c9-4b7c-8ccf-e828ce51825d/dddqxj0-12dc5989-6e8e-4a0f-bf9f-887a5db96b18.png/v1/fill/w_894,h_894,q_70,strp/trin_s_ahegao_face_by_trinity1987gamer_dddqxj0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC82NDlhZGYyNC02MGM5LTRiN2MtOGNjZi1lODI4Y2U1MTgyNWRcL2RkZHF4ajAtMTJkYzU5ODktNmU4ZS00YTBmLWJmOWYtODg3YTVkYjk2YjE4LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XGfPPnEIV6D7o4l0v-gOrc2w3xSG4co6x0MHDgr4yaI')
    .addField('Fun Commands', '`dog`, `meme`, `cat`, `8ball`, `wholesome`')
    .addField('Reddit Commands', '`technicallytruth`, ``boneappletea`, `bonehurtingjuice`, `meme`')
    .addField('Utility Commands', '`uptime`, `user`, `avatar`, `server`, `ping`')
    .addField('Moderation Commands', '`kick`, `ban`, `unban`, `mute`, `tempmute`, `unmute`, `prune`')
    .addField('NSFW Commands', '`Use this command in an NSFW channel to see NSFW commands.`')
    .setFooter(`Requested by: ${user}`, `${message.author.displayAvatarURL}`)
const help = new Discord.RichEmbed()
    .setColor('#ecafff')
    .setTitle('Help')
    .setDescription('Command List')
    .addField('Fun Commands', '`dog`, `meme`, `cat`, `8ball`, `wholesome`')
    .addField('Reddit Commands', '`technicallytruth`, ``boneappletea`, `bonehurtingjuice`, `meme`')
    .addField('Utility Commands', '`uptime`, `user`, `avatar`, `server`, `ping`')
    .addField('Moderation Commands', '`kick`, `ban`, `unban`, `mute`, `tempmute`, `unmute`, `prune`')
    .addField('NSFW Commands', '`feet`, `futa`, `femdom`, `hentai`, `trap`, `tits`, `anal`, `yuri`, `neko`, `hentairec`')
    .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/649adf24-60c9-4b7c-8ccf-e828ce51825d/dddqxj0-12dc5989-6e8e-4a0f-bf9f-887a5db96b18.png/v1/fill/w_894,h_894,q_70,strp/trin_s_ahegao_face_by_trinity1987gamer_dddqxj0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC82NDlhZGYyNC02MGM5LTRiN2MtOGNjZi1lODI4Y2U1MTgyNWRcL2RkZHF4ajAtMTJkYzU5ODktNmU4ZS00YTBmLWJmOWYtODg3YTVkYjk2YjE4LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XGfPPnEIV6D7o4l0v-gOrc2w3xSG4co6x0MHDgr4yaI')
   
    .setFooter(`Requested by: ${user}`, `${message.author.displayAvatarURL}`)


	if (message.channel.nsfw)  {	
                message.channel.send(help);
	}
	else {
		message.channel.send(sfwhelp);
	}
   
	},
};

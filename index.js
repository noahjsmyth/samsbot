const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
global.irlNSFW = require("discord-nsfw");
global.irlnsfw = new irlNSFW();


global.client = new Discord.Client()
client.commands = new Discord.Collection();

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: `${client.guilds.size} servers | c.help`,
            type: "WATCHING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});

s.readdir("./Commands/", (err, files) => {
	if(err) console.log(err);
	files.forEach(file => {
		if(!file.endsWith(".js")) return;
		let prop = require(`./Commands/${file}`);
		let command = file.split(".")[0];
		console.log(`Loading command: ${command}`);
		client.Commands.set(command.toLowerCase(), prop);
	});
	initalizeTokens().then(() => {
		console.clear();
		console.log(`Initalized ${client.Accounts.length} account(s)!`);
		module.exports.main();
	});
});

function initalizeTokens(){
	return new Promise((resolve, reject) => {
		fs.readFile("./tokens", "utf8", (err, data) => {
			if(err) console.log(err);
			data.split(/\r?\n/).forEach(token => {
				let instance = new Discord.Client();
				instance.login(process.env.BOT_TOKEN);
				instance.on("ready", () => {
					console.log(`User ${instance.user.tag} successfully logged in!`);
					let newObj = {
						token: token,
						instance: instance,
					}
					client.Accounts.push(newObj);
				});
			});
		});
		setTimeout(resolve, 3000);
	});
}
client.on('message', message => {
if (message.content.indexOf(config.prefix) === 0) { // Message starts with your prefix
       let prefix = config.prefix;
       const args = message.content.slice(prefix.length).split(/ +/);
       const command = args.shift();

       let params = message.content.split(" ").slice(1);
       let cmd = client.commands.get(command.toLowerCase());
       if (cmd) {
           cmd.execute(message, args);
        };
        }
});



client.login(process.env.BOT_TOKEN);

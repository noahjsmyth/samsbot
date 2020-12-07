const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');


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

fs.readdir("./commands/", (err, files) => {

    // check for errors
    if (err) console.log(err);

    // get name of file
    let jsfile = files.filter(f => f.split(".").pop() === "js");

    // if it cannot find any commands
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    // log the amount of files
    console.log(`Loading ${jsfile.length} commands!`);

    // load the command
    jsfile.forEach((f, i) => {
        // grab the module.exports from the file
        let props = require(`./commands/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        client.commands.set(props.name, props);
    });
});
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



client.login("process.env.BOT_TOKEN");

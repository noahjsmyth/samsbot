const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "hentai",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {
  //command
  var errMessage = "This is not an NSFW Channel";
   if (message.channel.nsfw) {
        async function work() {
        let owo = (await neko.nsfw.hentai());

        const hentai = new Discord.RichEmbed()
        .setTitle("Hentai")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(hentai);

}

      work();
        } else {
            message.react('💢');

      		return message.reply(errMessage)
      }
      
  }
        }


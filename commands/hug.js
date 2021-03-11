const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "hug",
  execute: async (message, args) => {
  //command


    let owo = (await neko.sfw.hug());
    if (!message.mentions.users.first()) {
        const hug1 = new Discord.RichEmbed()
        .setTitle(`<@${message.author.id}> hugs themselves`)
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(hug1);
    } else {
        const hug2 = new Discord.RichEmbed()
        .setTitle(`<@${message.author.id}> hugs <@${message.mentions.users.first().id}>`)
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(hug2);
  }
        }
}

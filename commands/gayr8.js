module.exports = {
  name: "gayr8",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {
const randlength = Math.floor(Math.random() * 101);     
		  message.channel.send(`you are ${randlength}% gay :rainbow_flag:`);
		  
	
  }
}

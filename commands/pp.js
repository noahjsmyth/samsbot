module.exports = {
  name: "pp",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {
const randlength = Math.floor(Math.random() * 13);     
function makeid(length) {
   var result           = '';
   var characters       = '=';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
	  var ownerid = 295671854104969216;
	  var peterid = 451494895274819584;
	  var gwenid = 784848333831274558;
	  var walterid = 809037764435640322;
    		if (message.author.id == ownerid | message.author.id == peterid && !message.mentions.users.first()) {
		  message.channel.send(`pp size is 8========================================================D :flushed:`);
		} else if (message.author.id == gwenid) {
			message.channel.send('bruh you doesnt even have a pp :fish:');
	 	} else if (message.author.id == walterid) {
			message.channel.send('sorry dude it got removed a few years ago :dog:');
		} else if (!message.mentions.users) {
			return message.channel.send(`${message.author.tag}'s pp size is 8${makeid(randlength)}D :flushed:`)
		} else if (message.mentions.users.first().id == ownerid | message.mentions.users.first().id == peterid) {
			message.channel.send(`${message.mentions.users.first().tag}'s pp size is 8========================================================D :flushed:`);
		} else if (message.mentions.users.first().id == gwenid) {
			message.channel.send('bruh gwen doesnt even have a pp :fish:');	
		} else {
			message.channel.send(`${message.mentions.users.fisrt().tag}'s pp is size 8${makeid(randlength)}D :flushed:`)
		}
	  
console.log(makeid(randlength));
  }
}

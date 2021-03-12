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
	  var peterid = 451494895274819584
    		if (message.author.id == ownerid | message.author.id == peterid) {
		  message.channel.send(`pp size is 8========================================================D :flushed:`);
		} else {  
			message.channel.send(`pp size is 8${makeid(randlength)}D :flushed:`);
		}
console.log(makeid(randlength));
  }
}

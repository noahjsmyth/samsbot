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
    
	  if (!args[0]) {
		  message.channel.send(`pp size is 8${makeid(randlength)}D :flushed:`);
		  
	  }    

console.log(makeid(randlength));
  }
}

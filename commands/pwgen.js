module.exports = {
  name: "pwgen",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {
     
function makeid(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"£$%^&*()@{}~:><?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
    
	  if (!args[0]) {
		  message.author.send('The password I generated was `' + `${makeid(20)}` + '`');
		  message.channel.send(':white_check_mark: | Done! Check your DMs');
		  
	  }    

console.log(makeid(20));
  }
}

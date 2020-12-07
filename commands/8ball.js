var fortunes = [
  "yes",
  "no",
  "maybe",
  "dont know, try again"
];



module.exports = {
	name: '8ball',
	description: 'Predict your future!',
	execute(message, args) {
		 if(!args[0]){
			 return message.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")   
  }
		if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
		else message.channel.send(":x: " + "| I Wasnt Able To Read That :(");
  


		
	},
};



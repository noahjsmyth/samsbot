module.exports = {
        name: 'ban',
        description: 'ban a bad boy',
        execute(message, args) {
                let reason = args.slice(1).join(' ');
		let role = message.guild.roles.find('name', 'Muted')
		const user = message.mentions.users.first();
                
   		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **ERROR** You don't have the **Ban Members** permission!");

                if (reason.length < 1) return message.channel.send(":x:" + " **ERROR** | You must specify a reason.");
                if (message.mentions.users.size < 1) return message.channel.send(":x: **ERROR**" + "Mention someone to ban them");
		const member = message.guild.member(user);
                member
          	  .ban({
            	    reason: `${reason}`,
          	})
          	  .then(() => {
            // We let the message author know we were able to ban the person
            	    message.channel.send(`Successfully banned ${user.tag}`);
          	})
          	   .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            	    message.channel.send('I was unable to ban the member');
            // Log the error
          	    console.log(err);
		});
	},
		
};
                                                                                 


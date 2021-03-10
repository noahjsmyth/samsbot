module.exports = {
	name: 'hi',
	description: 'Hello there!',
	execute(message, args) {
		message.react('👋');
	},
};

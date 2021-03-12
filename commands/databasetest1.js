global.db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
  name: "dbtest1",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  execute: async (message, args) => {
  
// Setting an object in the database:
db.set(`${message.author.id}`, { difficulty: 'Easy' })
// -> { difficulty: 'Easy' }
 
// Pushing an element to an array (that doesn't exist yet) in an object:
db.push(`${message.author.id}.items`, 'Sword')
// -> { difficulty: 'Easy', items: ['Sword'] }
 
// Adding to a number (that doesn't exist yet) in an object:
db.add(`${message.author.id}.balance`, 500)
// -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }
 
// Repeating previous examples:
db.push(`${message.author.id}.items`, 'This is a new item.')
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
db.add(`${message.author.id}.balance`, 500)
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }
 
// Fetching individual properties
var items = db.get(`${message.author.id}.items`);
message.channel.send(items);
}
}

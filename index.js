const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,        // عشان يتفاعل بالسيرفرات
        Intents.FLAGS.GUILD_MESSAGES // عشان يقرأ الرسائل
    ] 
});

client.on('ready', () => {
    console.log('the bot is ready!');
});

client.on('messageCreate', message => {

	if (message.author.bot) return;


	if (message.content === 'ping') {
        message.channel.send('pong');
    }
});

//bot token
client.login(token);

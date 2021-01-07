const Discord = require('discord.js')
const client = new Discord.Client;
const { Player } = require('discord-player');
const fs = require('fs');

client.player = new Player(client)
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new Discord.Collection();

const misc = fs.readdirSync('./commands/misc').filter(file => file.endsWith('.js'));
const moderation = fs.readdirSync('./commands/moderation').filter(file => file.endsWith('.js'));
const music = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));

for (const file of misc) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/misc/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of moderation) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/moderation/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of music) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/music/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.token_bot);
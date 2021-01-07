const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    aliases: ['k'],
    category: 'moderation',
    utilisation: '{prefix}kick',

    execute(client, message, args) 
    {
        if (message.member.permissions.has('ADMINISTRATOR'))
        {
            let toBeKicked = message.mentions.members.first();
            if(!toBeKicked)
            {
                return message.reply("Uh dude pls specify a person who i should kick?")
            }
            if (!toBeKicked.kickable) 
            {
                return message.reply("Uh dude come on stay in your lane. That guy has a higher role than you")
            }
            
                toBeKicked.kick();
                message.channel.send('https://tenor.com/view/im-on-it-im-on-it-gif-8500426');
                message.reply(`Person is kicked from server`);
        }
        else
        {
            message.channel.send('https://tenor.com/view/lane-stay-in-your-lane-gif-4777042');
        }
    },
};
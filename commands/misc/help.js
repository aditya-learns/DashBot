
const { MessageEmbed } = require ('discord.js')
module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) 
    {
            const music = require('../../commands/music')
            const moderation = require('../moderation')
            let musicfiles = "";
            let modfiles = "";
            fs.readdirSync(music).forEach(file => 
            {
             musicfiles+= file.split('.')[0] +"\n";
            });
            fs.readdirSync(moderation).forEach(file => 
                {
                 modfiles+= file.split('.')[0] +"\n";
                });

            const helpEmbed = new MessageEmbed()
            .setColor('ORANGE')
            .setAuthor('Help')
            .setFooter('This bot was made by Aditya' )
            .addField(
                { name:'Moderation', value: modfiles },
                { name:'Music', value: music}
            )
            .setTimestamp(new Date())
            message.channel.send(helpEmbed);
        
    },
};
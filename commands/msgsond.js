const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("**Sondage n°3**")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/3u1z5DT.gif')
    .addField('**__Vous préférez :__**', ':sun_with_face:  **La journée** ou :new_moon_with_face:  **La nuit**', true)
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');
    message.channel.send(botembed);
}

module.exports.help = {
  name:"msgsond"
}

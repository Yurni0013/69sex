const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('69SEX', 'https://i.imgur.com/3u1z5DT.gif')
    .setThumbnail('https://i.imgur.com/3u1z5DT.gif')
    .setColor("#FBF8F8")
    .addField('💓 | Développeur:', 'Nistype', true)
    .addField('👓 | Version du BOT:', '1.0', true)
    .setTimestamp()
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"bot"
}

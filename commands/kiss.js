const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
    if (!user) { return message.channel.send("Mentionne un utillisateur :exclamation:", );}
    const membre = message.mentions.members.first() || message.member;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`💋**${membre.user.username}** tu as reçu un bisous!`)
    .setColor("#0099ff")
    .setImage('https://i.imgur.com/u7t8FPb.gif')
    .setTimestamp()
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"kiss"
}

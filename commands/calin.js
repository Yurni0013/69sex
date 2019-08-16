const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
    if (!user) { return message.channel.send("Mentionne un utillisateur :exclamation:", );}
    const membre = message.mentions.members.first() || message.member;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`😍**${membre.user.username}** tu as reçu un calin!`)
    .setColor("#0099ff")
    .setImage('https://i.imgur.com/wOmoeF8.gif')
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg')

    message.channel.send(botembed);
}

module.exports.help = {
  name:"calin"
}
 

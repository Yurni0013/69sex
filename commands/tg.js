const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
    if (!user) { return message.channel.send("Mentionne un membre", );}
    const membre = message.mentions.members.first() || message.member;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`**${membre.user.username}** tu as reçu un ferme ta gueule!`)
    .setColor("#0099ff")
    .setImage('https://media3.giphy.com/media/6FzEqwmOG8Awg/giphy.gif')
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg')

    message.channel.send(botembed);
}

module.exports.help = {
  name:"tg"
}
 

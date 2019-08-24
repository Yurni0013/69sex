const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("*Listes des menus*")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/75yZ4cJ.gif')
    .addField('**#FUN**', '╚» Permet de voir les commandes FUN.', true)
    .addField('**#MOD**', '╚» Permet de voir les commandes modérations.', true)
    .addField('**#INFO**', '╚» Permet de voir les infos du dev.', true)
    .addField('**#RAID**', '╚» Permet de voir le menu raid.', true)
    .setImage('https://i.imgur.com/qVxFI8M.gif')
    .setTimestamp()
    .setFooter('nistype😎', 'https://i.imgur.com/0QRcBhy.jpg');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"menu"
}

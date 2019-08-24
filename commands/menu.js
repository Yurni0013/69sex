const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("*Listes des menus*")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/75yZ4cJ.gif')
    .addField('**#RAID**', '╚» Permet de voir le menu raid.', true)
    .addField('**#FUN**', '╚» Permet de voir les commandes FUN.', true)
    .addField('**#INFO**', '╚» Permet de voir les infos du dev.', true)
    .addField('**#MOD**', '╚» Permet de voir les commandes modérations.', true)
    .setImage('https://i.imgur.com/rrHK3Np.jpg')
    .setTimestamp()
    .setFooter('nistype😎', 'https://i.imgur.com/1czeup5.jpg');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"menu"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Liste des fonctionnalités :**")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/3u1z5DT.gif')
    .addField('👅 ┇ Commandes staff:', '``ban,kick,clear,mute,tempmute,botmessage,dm,sondage``', true)
    .addField('👄 ┇ Commandes membres:', '``bot,aide,avatar,ping,stats,uptime,rapporter``', true)
    .addField('💦 ┇ Commandes fun:', '``calin,kiss,tg,veski``', true)
    .setTimestamp()
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"aide"
}

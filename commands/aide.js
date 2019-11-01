const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Liste des fonctionnalités :**")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/CkMhVlK.png')
    .addField('👅 ┇ Commandes staff:', '``ban,kick,clear,mute,tempmute,botmessage,dm,sondage``', true)
    .addField('👄 ┇ Commandes membres:', '``bot,aide,avatar,ping,stats,uptime,rapporter,userinfo,serverinfo``', true)
    .addField('💦 ┇ Commandes fun:', '``calin,kiss,tg,veski,punch``', true)
    .setTimestamp()
    .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"aide"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Liste des fonctionnalités :**")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/gtBOpRE.jpg')
    .addField(':crown: ┇ Commandes staff:', '``ban,kick,clear,mute,tempmute,botmessage,dm,sondage``', true)
    .addField(':alien: ┇ Commandes membres:', '``bot,aide,avatar,ping,stats,uptime,rapporter,invite``', true)
    .addField('🎀 ┇ Commandes fun:', '``calin,kiss,tg,veski``', true)
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"aide"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('HABBOT', 'https://i.imgur.com/CkMhVlK.png')
    .setThumbnail('https://i.imgur.com/CkMhVlK.png')
    .setColor("#FBF8F8")
    .addField('💓 | Développeur:', 'Nistype', true)
    .addField('👓 | Version du BOT:', '1.1', true)
    .setTimestamp()
    .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"bot"
}

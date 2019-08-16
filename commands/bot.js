const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Asuma', 'https://i.imgur.com/gtBOpRE.jpg', 'https://discord.gg/KUNvmNu')
    .setThumbnail('https://i.imgur.com/gtBOpRE.jpg')
    .setColor("#EE82EE")
    .addField('🐍 | Développeur:', '"Nistype#0013', true)
    .addField('👓 | Version du BOT:', '1.2', true)
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"bot"
}

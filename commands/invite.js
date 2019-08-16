const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Asuma', 'https://i.imgur.com/gtBOpRE.jpg', 'https://discord.gg/KUNvmNu')
    .setThumbnail('https://i.imgur.com/gtBOpRE.jpg')
    .setColor("#EE82EE")
    .addField('👕 | Inviter Asuma sur votre serveur:', '[Clique ici](https://discordapp.com/oauth2/authorize?client_id=550960584364130304&scope=bot&permissions=8)', true)
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"invite"
}

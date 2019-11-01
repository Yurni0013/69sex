const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Habbot', 'https://i.imgur.com/CkMhVlK.png', 'https://discord.gg/HKYmxF5')
    .setThumbnail('https://i.imgur.com/CkMhVlK.png')
    .setColor("#EE82EE")
    .addField('👕 | Inviter Habbot BOT sur votre serveur:', '[Clique ici](https://discordapp.com/oauth2/authorize?client_id=550960584364130304&scope=bot&permissions=8)', true)
    .setTimestamp()
    .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');

    message.channel.send(botembed);
}

module.exports.help = {
  name:"invite"
}

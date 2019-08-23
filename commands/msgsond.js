const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("**Sondage n°6**")
    .setColor("#000000")
    .setThumbnail('https://i.imgur.com/3u1z5DT.gif')
    .addField('**__Vous préférez :__**', ':smiling_imp:  **Zola** ou :sunglasses:  **Koba la D**', true)
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');
    message.channel.send(botembed);
}

module.exports.help = {
  name:"msgsond"
}

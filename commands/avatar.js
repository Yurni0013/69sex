const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var avatar = message.mentions.users.first;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Avatar de l'utillisateur:")
    .setColor("#0099ff")
    .setTimestamp()
    .setFooter('69Sex💋', 'https://i.imgur.com/3u1z5DT.gif');
      
    if (!message.mentions.users.first())  {
        botembed.setImage(message.author.avatarURL);
    }
    
    else {
         botembed.setImage(message.mentions.users.first().displayAvatarURL);
    }

    message.channel.send(botembed);
}


module.exports.help = {
  name:"avatar"
}

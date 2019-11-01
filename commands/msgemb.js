const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("Bienvenue sur le server discord de **Habbot Hotel**")
    .setColor("#000000")
    .setAuthor("✔️ | Vérification")
    .setThumbnail('https://i.imgur.com/CkMhVlK.png')
    .addField("Ce salon à été crée afin de protéger le serveur contre les attaques et les account ROBOT, pour accéder à l'intégralité du serveur et prouver que tu n'es pas un robot.","Il te reste plus qu'une chose à faire, cliquer sur la réaction se situant sur le message ci-dessous! Ce après quoi tu pourras accéder au serveur !")
    .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');
    message.channel.send(botembed);
}

module.exports.help = {
  name:"msgemb"
}

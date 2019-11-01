const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete()
        if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.channel.send(noperm);
 
        let thingToEcho = args.join(" ")
        const yes = bot.emojis.get("565249560952438806");
        const nogif = bot.emojis.get("565249560247664669");
        var sondage = new Discord.RichEmbed()
 
        .setAuthor("📜 | Sondage")
        .setColor('#36393f')
        .addField(`Veuillez répondre par ✅ ou par ❌`, thingToEcho)
        .setTimestamp()
        .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');
        message.channel.send(sondage)
        .then(message => {
            message.react("✅")
            message.react("❌")
        })
 
       
    }

module.exports.help = {
  name:"sondage"
}

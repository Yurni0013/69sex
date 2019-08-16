const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {        
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Impossible de trouver l'utilisateur!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Tu ne peut pas utilliser cette commands!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('Tu dois fournir un message!')

    dUser.send(`${dMessage}`)

    message.author.send(`${message.author} Tu as envoyé un message à ${dUser}`)
}
    module.exports.help = {
  name:"dm"
    }
 

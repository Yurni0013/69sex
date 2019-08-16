const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("[D&P] : Vous n'avez pas la permission. :spy:");
    if(args[0] == "help"){
      message.reply("Utilisation : >ban [@UTILISATEUR] [RAISON]");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("[Asuma] : L'utilisateur est introuvable. :exclamation:");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("[Asuma] : Vous devez inscrire la raison du ban. :exclamation:");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("[Asuma] : Cet utilisateur ne peut pas être ban. :exclamation:");
    bUser.send(`[D&P] : Vous êtes ban pour : ${bReason}. :spy:`).catch(err => console.log(err))
    message.channel.send(`[Asuma] : L'utilisateur ${bUser} vient de se faire ban pour ${bReason}. :exclamation:`)

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .setThumbnail('https://i.imgur.com/gtBOpRE.jpg')
    .addField("Victime :", `${bUser} (ID : ${bUser.id})`)
    .addField("Auteur :", `<@${message.author.id}> (ID : ${message.author.id})`)
    .addField("Channel :", message.channel)
    .addField("Dâte :", message.createdAt.toLocaleString())
    .addField("Raison :", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "asuma-logs");
    if(!incidentchannel) return message.channel.send("[Asuma] : Le channel #Asuma-logs est introuvable. :spy:");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("[69sex] : L'utilisateur est introuvable. :exclamation:");
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("[69sex] : Vous devez inscrire la raison du kick. :exclamation:");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("[69sex] : Vous n'avez pas la permission. :exclamation:");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("[69sex] : Cet utilisateur ne peut pas être kick. :exclamation:");
    kUser.send(`[69sex] : Vous êtes kick pour : ${kReason}. :spy:`).catch(err => console.log(err))
    message.channel.send(`[69sex] : L'utilisateur ${kUser} vient de se faire kick pour : ${kReason}. :exclamation:`)

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setThumbnail('https://i.imgur.com/gtBOpRE.jpg')
    .setColor("#bc0000")
    .addField("Victime :", `${kUser} (ID : ${kUser.id})`)
    .addField("Auteur :", `<@${message.author.id}> (ID : ${message.author.id})`)
    .addField("Channel :", message.channel)
    .addField("Dâte :", message.createdAt.toLocaleString())
    .addField("Raison :", kReason);

    let kickChannel = message.guild.channels.find(`name`, "69sex-logs");
    if(!kickChannel) return message.channel.send("[69sex] : Le channel #69sex-logs est introuvable. :exclamation:");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}

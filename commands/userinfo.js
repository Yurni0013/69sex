const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "✅ Online",
        idle: "🔵 Idle",
        dnd: "🔴  Do Not Disturb",
        offline: "⚪ Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "👾 Oui";
  } else {
    bot = "👤 Non";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00000")
                .addField("Pseudonyme", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Surnom", `${member.nickname !== null ? `✔️ Nickname: ${member.nickname}` : "❌ N'as pas de surnom"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Joue à", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "❌ Ne joue pas actuellement"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
                .addField("Inscrit à discord depuis le", member.user.createdAt)
                .setFooter(`${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }

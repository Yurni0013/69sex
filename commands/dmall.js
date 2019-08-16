const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if (message.channel.type === "dm") return;
    if (message.deletable) message.delete();
    message.guild.members.forEach(member => {
            member.send("**:heart:Hey mon loulou:hibiscus: rejoins nous vite on t'attends pour faire des rencontres...**https://i.imgur.com/PygtWw3.gif")
            member.send("**__Ton ticket:__** https://discord.gg/AW8W2zA")

    .catch(error => {})
});
}

module.exports.help = {
  name:"dmall"
}

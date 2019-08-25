const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if (message.channel.type === "dm") return;
    if (message.deletable) message.delete();
    message.guild.members.forEach(member => {
            member.send("*Salut :kiss:, viens rejoindre le server* **Vercace** *officielement en partenariat avec 69SEX *https://media.giphy.com/media/gFhZdCPi2a9Jp3zJt7/giphy.gif")
            member.send("**__Ton ticket:__** https://discord.gg/Vcqu6b")

    .catch(error => {})
});
}

module.exports.help = {
  name:"dmall"
}

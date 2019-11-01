const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 


module.exports.run = async (bot, message, args) => {
  message.delete()
           let { version } = require("discord.js");
           cpuStat.usagePercent(function(err, percent, seconds) {
             if (err) {
               return console.log(err);
             }
            
            let secs = Math.floor(bot.uptime % 60);
            let days = Math.floor((bot.uptime % 31536000) / 86400);
            let hours = Math.floor((bot.uptime / 3600) % 24);
            let mins = Math.floor((bot.uptime / 60) % 60);
    
             //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
             let embedStats = new Discord.RichEmbed()
            .setTitle("***👅 • Statistiques du serveur ***")
            .setColor("#00ff00")
            .addField("• User's :", `${bot.users.size.toLocaleString()}`, true)
            .addField("• Discord.js", `${version}`, true)
            .addField("• Utilisation RAM :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("• CPU :", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("• Utilisation du CPU :", `\`${percent.toFixed(2)}%\``,true)
            .addField("• Bits :", `\`${os.arch()}\``,true)
            .addField("• Plateforme :", `\`\`${os.platform()}\`\``,true)
            .setTimestamp()
            .setFooter('Habbot🗻', 'https://i.imgur.com/CkMhVlK.png');
    
            message.channel.send(embedStats)
            })


}

   module.exports.help = {
       name: "stats"
   }

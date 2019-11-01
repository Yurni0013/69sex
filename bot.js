const botconfig = require("./botconfig.json");
const prefix = botconfig.prefix;
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("./commands > 0 commandes disponible.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} [ON]`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveur(s) !`);
  bot.user.setActivity("Habbot Hotel| ;aide📘", {type: "WATCHING"});
  bot.user.setStatus('idle');

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.content.startsWith(prefix)){

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
}});

bot.on('guildMemberAdd', member => {
member.createDM().then(channel => {
return channel.send('Bienvenue sur le serveur **' + member.displayName + '** !'
+ '\nRetrouve la liste de mes fonctionnalités avec la commande "**;aide**"')
}).catch(console.error)
})

bot.login(process.env.BOT_TOKEN);

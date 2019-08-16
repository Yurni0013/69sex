module.exports.run = async (bot, message, args) => {
    message.channel.send('[Asuma] : Pong! :exclamation: \nLatence du serveur : `' + Math.floor(Math.round(bot.ping)) + '` ms.')
    
    message.delete();
    
    }
      module.exports.help = {
        name: "ping"
      }

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("https://discord.gg/nAXeWFy");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `hello`) {
      return message.channel.send("Hello there!");
  }

  if (cmd === `lol`) {
      return message.channel.send("Lol");
  }

  if (cmd === `oof`) {
      return message.channel.send("Oof");
  }
});

bot.login(botconfig.token);

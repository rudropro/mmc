const { Client, Collection } = require("discord.js");
const { token, prefix } = require("./botconfig.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);


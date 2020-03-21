const { Client, Collection, RichEmbed } = require("discord.js");
const { 
    
    prefix,
    token 

} = require("./botconfig.json");
const bot = new Client();
 
var version = "2.O";

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);




//NjgzOTEzMTI3MjE3MDcwMTEy.XlzU9g.2ThW7sh7UkDEfFjGL1xafDEe51k

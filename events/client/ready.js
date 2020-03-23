const { ErelaClient, Utils } = require("erela.js");
const { nodes } = require("../../botconfig.json")

const {prefix} = require("../../botconfig.json")
module.exports = bot => {
    console.log(`${bot.user.username} is online`);

    bot.music = new ErelaClient(bot, nodes)
        .on("nodeError", console.log)
        .on("nodeConnect", () => console.log("Successfully created a new Node."))
        .on("queueEnd", player => {
            player.textChannel.send("Queue has ended.")
            return bot.music.players.destroy(player.guild.id)
        })
        .on("trackStart", ({textChannel}, {title, duration}) => textChannel.send(`Now playing: **${title}** \`${Utils.formatTime(duration, true)}\``).then(m => m.delete(15000)));

    bot.levels = new Map()
        .set("none", 0.0)
        .set("low", 0.10)
        .set("medium", 0.15)
        .set("high", 0.25);

    let activities = [ `${bot.guilds.size} servers!`, `${bot.channels.size} channels!`, `made by rudrogamer` ], i = 0;
    setInterval(() => bot.user.setActivity(`${prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)

};
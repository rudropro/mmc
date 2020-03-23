module.exports = (bot) => {
let prompt = process.openStdin()
prompt.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
        bot.channels.get("676485443428024347", "676485512797618216").send(x.join(" "));
    });
}
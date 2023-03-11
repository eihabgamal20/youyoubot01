const autonickData = require(`${process.cwd()}/models/autonick`)

module.exports = async (client) => {
    const description = {
        name: "AutoNick",
    }
    console.log(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildMemberAdd", async (member) => {
        if(!member.guild) return;
        try {
            autonickData.findOne({
                guildId: member.guild.id,
            }, async (e, data) => {
                if (!data) return;
                member.setNickname(data.auto_nick.replace(/<username>/g, `${member.user.username}`)).catch(() => {})
            })
        } catch (e) {
            console.log(e)
        }
    });
}
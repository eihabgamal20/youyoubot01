const { PermissionFlagsBits } = require("discord.js")

module.exports= {
    id: "test",
    developers:false,
    guildOwnerOnly: false,
    botOwner: false,
    permission: PermissionFlagsBits.Administrator,
    // users: ["805534364884271135"],
    execute(interaction, client){
        interaction.reply({content: "Test Button"})
    }
}
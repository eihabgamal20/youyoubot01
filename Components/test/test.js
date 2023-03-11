const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test command"),
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("test")
              .setLabel("Click me!")
              .setStyle(ButtonStyle.Primary)
          )
		await interaction.reply({ content: 'test', components: [row]});
    },
};
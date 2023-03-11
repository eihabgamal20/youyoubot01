const client = require("../index");
const config = require(`${process.cwd()}/json/config.json`);
const {
	Client,
	CommandInteraction,
	MessageEmbed
} = require("discord.js");
const Discord = require("discord.js");
const {
	databasing,
	onCoolDown,
} = require(`${process.cwd()}/handlers/functions`);

module.exports = {
name: 'interactionCreate',
once: false,
async execute(client, interaction) {
if (!interaction.isCommand()) return;
if (!interaction.channel.guild) return;
				

const command = client.slashCommands.get(interaction.commandName);

if (!command) return ;

try {
    await command.execute(client, interaction);
} catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    
}
}
}

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../json/config.json');
const fs = require('node:fs');
const config = require("../json/config.json");
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [];
const commandFiles = fs.readdirSync('./SlashCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./SlashCommands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(config.token || process.env.token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();
const config = require(`${process.cwd()}/json/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const glob = require('glob');

module.exports = {
  name: 'restart-bot',
  aliases: [],
  usage: '',
  description: 'Shutdown the bot',
  category: "owner",
  cooldown: 0,
  userPermissions: "MANAGE_MESSAGES",
  botPermissions: "MANAGE_MESSAGES",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, ee, prefix) {
    try {
      await message.reply({ embeds:[new MessageEmbed()
        .setColor(`#df2b39`)
        .setTitle(`Bot is Restarting...`)]});
        process.exit();
        
    } catch (e) {
      message.channel.send({content: `Error: ${e.message}`})
    }
  },
};
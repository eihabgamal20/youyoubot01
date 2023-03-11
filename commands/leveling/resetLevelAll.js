const config = require(`${process.cwd()}/json/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
  name: 'reset-level-all',
  aliases: ["resetlevelall"],
  usage: '',
  description: '',
  category: "leveling",
  cooldown: 0,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, ee) {
    try {
      await Levels.deleteGuild(`${message.guild.id}`);
      message.reply({
        embeds: [new MessageEmbed()
          .setTitle(`Successfully Deleted Leveling Database For Everyone.`)
          .setColor(`#df2b39`)]
      })
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}

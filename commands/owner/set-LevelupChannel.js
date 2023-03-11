const config = require(`${process.cwd()}/json/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'set-levelupchannel',
  aliases: [],
  usage: '',
  description: '',
  category: "owner",
  cooldown: 0,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  premium: true,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  async execute(client, message, args) {
    try {
      const channel = message.mentions.channels.first();
      if (!channel) return message.reply({ embeds:[new MessageEmbed()
        .setTitle(`Levelup System`)
        .setColor(`#df2b39`)
        .setFooter(`test`)
        .setDescription(`Please mention a channel!`)]});

        client.settings.set(message.guild.id, channel.id, "levelupChannel")
        
        message.reply({ embeds:[new MessageEmbed()
          .setColor(`#df2b39`)
          .setTitle(`Levelup System`)
          .setFooter(`test`)
          .setDescription(`${channel} has been set as the Levelup Channel`)]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(` Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}
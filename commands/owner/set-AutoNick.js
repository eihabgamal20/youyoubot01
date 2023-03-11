const config = require(`${process.cwd()}/json/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require(`${process.cwd()}/models/autonick`)

module.exports = {
    name: 'set-autonick',
    aliases: [],
    usage: '',
    description: '',
    category: "owner",
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

    async execute(client, message, args, ee, PREFIX) {
        try {
            let autonick = args.join(" ")

            if (!autonick) return message.reply({
                embeds: [new MessageEmbed()
                    .setTitle(`AutoNick System`)
                    .setColor("RED")
                    .setDescription(`Please supply a Nickname!\nIf you want to mention the member username use \`<username>\`\n\nEg: \`${PREFIX}set-autonick FD <username>\``)
                ]
            })

            Schema.findOne({
                guildId: message.guild.id
            }, async (err, data) => {
                if (data) {
                    data.auto_nick = autonick;
                    data.save();
                } else {
                    new Schema({
                        guildId: message.guild.id,
                        auto_nick: autonick,
                    }).save();
                }
                message.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(`AutoNick System`)
                        .setColor("RED")
                        .setFooter("𝑬𝑳 𝑩𝑶𝑩 𝑺𝒀𝑺𝑻𝑬𝑴")
                        .setDescription(`Successfully set **AutoNick** to \`${autonick}\``)
                    ]
                });
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
                    .setDescription(`\`\`\`\`\`\``)
                    .setFooter(`Having: ${message.guild.memberCount} Users`)
                ]
            })
        }
    }
}
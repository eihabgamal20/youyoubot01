const config = require(`${process.cwd()}/json/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require(`${process.cwd()}/models/autodelete`);
const ms = require("ms");

module.exports = {
    name: 'set-autodelete',
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

    async execute(client, message, args, ee, prefix) {
        try {
            const channel = message.mentions.channels.first();

            let delay = args[1];

            if (!channel) return message.reply({
                embeds: [new MessageEmbed()
                    .setTitle("⚠️ AutoDelete System")
                    .setColor("RED")
                    .setFooter("𝑬𝑳 𝑩𝑶𝑩 𝑺𝒀𝑺𝑻𝑬𝑴")
                    .setDescription(`Please mention a channel to set the AutoDelete System!`)
                ]
            });

            if (!delay) return message.reply({
                embeds: [new MessageEmbed()
                    .setTitle("⚠️AutoDelete System")
                    .setColor("RED")
                    .setFooter("𝑬𝑳 𝑩𝑶𝑩 𝑺𝒀𝑺𝑻𝑬𝑴")
                    .setDescription(`Please mention a delay to deletes the message in the channel!`)
                ]
            });

            if (!ms(delay)) return message.reply({
                embeds: [new MessageEmbed()
                    .setTitle("⚠️ AutoDelete System")
                    .setColor("RED")
                    .setFooter("𝑬𝑳 𝑩𝑶𝑩 𝑺𝒀𝑺𝑻𝑬𝑴")
                    .setDescription(`Please mention a valid delay!`)
                ]
            });

            console.log(ms(delay));

            Schema.findOne({
                Guild: message.guild.id
            }, async (err, data) => {
                if (data) {
                    data.Channel = channel.id,
                    data.Delay = ms(delay)
                    data.save();
                } else {
                    new Schema({
                        Guild: message.guild.id,
                        Channel: channel.id,
                        Delay: ms(delay)
                    }).save();
                }
                message.reply({
                    embeds: [new MessageEmbed()
                        .setTitle("✅ AutoDelete System")
                        .setColor("RED")
                        .setFooter("𝑬𝑳 𝑩𝑶𝑩 𝑺𝒀𝑺𝑻𝑬𝑴")
                        .setDescription(`${channel} has been set as the **AutoDelete Channel** with ${ms(delay)} Cooldown!`)
                    ]
                });
            })

        } catch (e) {
            console.log(String(e.stack).bgRed)
            const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
            if (!errorLogsChannel) return;
            return errorLogsChannel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.guild.name, message.guild.iconURL({
                        dynamic: true
                    }))
                    .setTitle("❎ Got a Error:")
                    .setDescription(`\`\`\`${e.stack}\`\`\``)
                    .setFooter(`Having: ${message.guild.memberCount} Users`)
                ]
            })
        }
    }
}
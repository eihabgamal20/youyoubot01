const { QueryType } = require("discord-player");
const player = require("../../client/player");
const db = require('quick.db');

module.exports = {
    name: "247",
  description: "🎶 Toggles the 24/7 mode. This makes the bot doesn't leave the voice channel until you stop it.",
  async execute(client, interaction, args) {
      let vo = interaction.member.voice.channel
      if (!vo) return interaction.reply({
        content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true }).catch((err) => { console.log(`i couldn't reply to the message: ` + err.message) })

            if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({
                content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true 
            })
    
      let voice = vo.id
      let GU = client.guilds.cache.get(interaction.guild.id);
      let CH = client.channels.cache.get(voice);
      const queue = player.createQueue(GU, {
        leaveOnEnd: false,
        leaveOnStop: false,
        channelEmpty: true,
      });
      try {
        if (!queue.connection) queue.connect(CH);
      } catch {
        queue.destroy();
        return console.log({ content: "**Couldn't join your voice channel!**" }).catch((error) => { return; });
      }
        if (!db.get(`24_7_${interaction.guild.id}`)) {
        await db.set(`24_7_${interaction.guild.id}`, [interaction.guild.id, voice, true])
        interaction.reply({ content: `:white_check_mark: **Successful enabled the 24/7!**` })
      } else {
        await db.delete(`24_7_${interaction.guild.id}`)
        interaction.reply(`:white_check_mark: **Successful disabled the 24/7!**`)
    }
  },
};

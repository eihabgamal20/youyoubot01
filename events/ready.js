const { getUserInfo } = require("@replit/repl-auth")
 
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Interaction } = require('discord.js');
const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const db = require('quick.db');
const { PREFIX, ROLE, GUILD,BOT_ID, status,status2, activity, time_status } = require('../json/config.json');
const axios = require("axios").default;
const player = require("../client/player");


module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.user.setStatus(status2)
    const { data: api } = await axios.post(
      'https://api.elbobhosting.ml/api/oa7a'
    )
    
    let linkinvit = api?.link_invit,
      console_copyright = api?.console_copyright
    console.log(('Logged in as ' + client.user.tag).red)
    console.log(
      ('Servers: ' + client.guilds.cache.size).magenta,
      (
        'Users: ' +
        client.guilds.cache
          .reduce(
            (_0x412361, _0x56bfd7) => _0x412361 + _0x56bfd7.memberCount,
            0
          )
          .toLocaleString()
      ).yellow,
      ('Commands: ' + client.commands.size).green
    )
    function msg() {
      let _0x1e8659 = Math.floor(Math.random() * status.length)
      client.user.setActivity(status[_0x1e8659], { type: activity })
    }
    setInterval(msg, time_status)
    var AsciiTable = require('ascii-table'),
      table = new AsciiTable()
    table.setBorder('\u2502', '\u2500', '\u2725', '\u2725')
    table
      .addRow('Bot', client.user.tag)
      .addRow('Guild(s)', client.guilds.cache.size + ' Server(s)')
      .addRow(
        'Member(s)',
        client.guilds.cache
          .reduce(
            (_0x885dc0, _0x1245c2) => _0x885dc0 + _0x1245c2.memberCount,
            0
          )
          .toLocaleString() + ' Members'
      )
      .addRow('Commands', ' ' + client.commands.size)
      .addRow('Discord.js', '' + Discord.version)
      .addRow('Node.js', '' + process.version)
      .addRow(
        'Memory',
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          ' MB / ' +
          (process.memoryUsage().rss / 1024 / 1024).toFixed(2) +
          ' MB'
      )
    console.log(table.toString())
    console.log(('' + console_copyright).bold.brightGreen)
    var acbot = db.get('bot_')
    acbot == null && (db.set('bot_', 1), db.set('bot_Activated', BOT_ID))
    var bot1 = await db.get('bot_Activated')
    if (bot1 == null) {
      return
    }
    setInterval(async () => {
      client.guilds.cache.forEach(async g => {
        let vch = await db.get(`24_7_${g.id}`)
        if (vch == null) return
        let [gu, ch, tr] = vch
        let server = client.guilds.cache.get(gu)
        if (!server) return
        //console.log(server.id)
        let chid = server.me.voice?.channel
        if (!chid) return
        //console.log(chid.id)
        if (tr == true) {
          await db.set(`24_7_${gu}`, [server.id, chid.id, true])
          //console.log(ch)
        } else {
          let vch = await db.get(`24_7_${g.id}`)
          if (vch == null) return
          let [gu, ch, tr] = vch
          await db.delete(`24_7_${gu}`)
          console.log(`done`)
        }

      })
    }, 1000)
    
    setInterval(async () => {
      client.guilds.cache.forEach(async g => {
        let vch = await db.get(`24_7_${g.id}`)
        if (vch == null) return
        let [gu, ch, tr] = vch
        //let chid = g.me.voice.channel.id
        //if(!chid) return
        // console.log(chid)
        if (tr == true) {
          let GU = client.guilds.cache.get(gu);
          let CH = client.channels.cache.get(ch);
          const queue = player.createQueue(GU, {
        leaveOnEnd: false,
        leaveOnStop: false,
        channelEmpty: true,
          });
          try {
            if (!queue.connection) queue.connect(CH);
          } catch {
            queue.destroy();
            return console.log(`Couldn't join your voice channel!`)
          }
        }
      })
    }, 1000)

    bot1 == client.user.id
      ? console.log('Done Activated Bot'.bold.brightGreen)
      : console.log('not Activated Bot'.bold.red)
  },
}

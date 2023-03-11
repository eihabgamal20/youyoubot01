//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const naotori = require('naotori')
const canvafy = require("canvafy");
const { GUILD } = require('../json/config.json')
const welmessage = require('../json/welcome.js')
const axios = require("axios").default;

const {
  MessageEmbed,
  Permissions,
  MessageAttachment,
  utils,
  Utils,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton,
  Collection,
  ButtonInteraction,
  ColorResolvable,
  CommandInteraction,
  EmojiResolvable,
  Message,
  MessageReaction,
  TextChannel,
  User,
  MessageButtonStyle,
  GuildMember,
  WebhookClient,
  Client,
  Intents
} = require('discord.js');

const Discord = require('discord.js');


module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    const { data: api } = await axios
      .post('https://api.elbobhosting.ml/api/oa7a')
      .catch((_0x460116) => {})
    let bot_on = api?.bot_on
    if (bot_on !== 'on') {
      return
    }
    if (welmessage.welcome_run !== 'on') {
      return
    }
    const InvitesTracker = require('@androz2091/discord-invites-tracker'),
      dev_tools = InvitesTracker.init(client, {
        fetchGuilds: true,
        fetchVanity: false,
        fetchAuditLogs: true,
      })
    dev_tools.on('guildMemberAdd', async (_0x255a87, _0xae6d27, _0x4da612) => {
      if (_0x255a87.guild.id !== GUILD) {
        return
      }
      const _0x10cc29 = _0x255a87.guild.channels.cache.get(welmessage.CHANNEL)
      let _0x4bd153 = welmessage.msg.message_img
          .replace('[userName]', _0x255a87.user.username)
          .replace('[server]', _0x255a87.guild.name)
          .replace('[memberCount]', _0x255a87.guild.memberCount),
        _0x395b90 = welmessage.msg.title
          .replace('[userName]', _0x255a87.user.username)
          .replace('[server]', _0x255a87.guild.name)
          .replace('[memberCount]', _0x255a87.guild.memberCount)
      const _0x11203a = await new canvafy.WelcomeLeave()
        .setAvatar(
          _0x255a87.user.displayAvatarURL({
            format: 'png',
            size: 4096,
          })
        )
        .setBackground('image', '' + welmessage.msg.background)
        .setTitle('' + _0x395b90)
        .setDescription('' + _0x4bd153)
        .setBorder('' + welmessage.msg.color_Border)
        .setAvatarBorder('' + welmessage.msg.color_AvatarBorder)
        .setOverlayOpacity(welmessage.msg.Border)
        .build()
      if (_0xae6d27 === 'normal') {
        let _0x6b8526 = _0x4da612.inviter.username,
          _0x350f86 = _0x4da612.inviter.id,
          _0xd51476 = welmessage.msg.message
            .replace('[user]', _0x255a87.user)
            .replace('[userName]', _0x255a87.user.username)
            .replace('[server]', _0x255a87.guild.name)
            .replace('[memberCount]', _0x255a87.guild.memberCount)
            .replace('[inviter]', '<@' + _0x350f86 + '>')
            .replace('[inviterName]', '' + _0x6b8526),
          _0x53e8f9 = welmessage.embeds.description
            .replace('[user]', _0x255a87.user)
            .replace('[userName]', _0x255a87.user.username)
            .replace('[server]', _0x255a87.guild.name)
            .replace('[memberCount]', _0x255a87.guild.memberCount)
            .replace('[inviter]', '<@' + _0x350f86 + '>')
            .replace('[inviterName]', '' + _0x6b8526),
          _0x4c1456 = welmessage.embeds.Title.replace('[user]', _0x255a87.user)
            .replace('[userName]', _0x255a87.user.username)
            .replace('[server]', _0x255a87.guild.name)
            .replace('[memberCount]', _0x255a87.guild.memberCount)
            .replace('[inviter]', '$<@' + _0x350f86 + '>')
            .replace('[inviterName]', '' + _0x6b8526),
          _0x4eef0e = welmessage.embeds.Author.replace('[user]', _0x255a87.user)
            .replace('[userName]', _0x255a87.user.username)
            .replace('[server]', _0x255a87.guild.name)
            .replace('[memberCount]', _0x255a87.guild.memberCount)
            .replace('[inviter]', '<@' + _0x350f86 + '>')
            .replace('[inviterName]', '' + _0x6b8526),
          _0x2954cd = welmessage.embeds.Author.replace('[user]', _0x255a87.user)
            .replace('[userName]', _0x255a87.user.username)
            .replace('[server]', _0x255a87.guild.name)
            .replace('[memberCount]', _0x255a87.guild.memberCount)
            .replace('[inviter]', '<@' + _0x350f86 + '>')
            .replace('[inviterName]', '' + _0x6b8526),
          _0xc770a9 = welmessage.embeds.Author_icon.replace(
            '[server_icon]',
            '' + _0x255a87.guild.iconURL({ dynamic: true })
          ),
          _0x4aa831 = welmessage.embeds.Author_icon.replace(
            '[server_icon]',
            '' + _0x255a87.guild.iconURL({ dynamic: true })
          ),
          _0x1de0d9 = welmessage.embeds.thumbnail
            .replace(
              '[server_icon]',
              '' + _0x255a87.guild.iconURL({ dynamic: true })
            )
            .replace(
              '[avatar_user]',
              '' +
                _0x255a87.user.displayAvatarURL({
                  format: 'png',
                  size: 4096,
                })
            ),
          _0x356b15 = new MessageEmbed()
            .setAuthor({
              name: '' + _0x4eef0e,
              iconURL: '' + _0xc770a9,
            })
            .setTitle('' + _0x4c1456)
            .setColor('' + welmessage.embeds.color)
            .setDescription('' + _0x53e8f9)
            .setImage('' + welmessage.embeds.img)
            .setThumbnail('' + _0x1de0d9)
            .setFooter({
              text: '' + _0x2954cd,
              iconURL: '' + _0x4aa831,
            })
        if (welmessage.taype == 'embed') {
          return _0x10cc29.send({
            content: '<@' + _0x255a87.id + '>',
            embeds: [_0x356b15],
          })
        }
        if (welmessage.taype == 'img') {
          return _0x10cc29.send({
            content: '' + _0xd51476,
            files: [
              {
                attachment: _0x11203a.toBuffer(),
                name: 'welcome-' + _0x255a87.id + '.png',
              },
            ],
          })
        }
      } else {
        if (_0xae6d27 === 'vanity') {
          let _0x112791 = welmessage.msg.message
              .replace('[user]', _0x255a87.user)
              .replace('[userName]', _0x255a87.user.username)
              .replace('[server]', _0x255a87.guild.name)
              .replace('[memberCount]', _0x255a87.guild.memberCount)
              .replace('[inviter]', '<@! You joined using a custom invite!>')
              .replace('[inviterName]', '! You joined using a custom invite!'),
            _0x1ca67f = welmessage.embeds.description
              .replace('[user]', _0x255a87.user)
              .replace('[userName]', _0x255a87.user.username)
              .replace('[server]', _0x255a87.guild.name)
              .replace('[memberCount]', _0x255a87.guild.memberCount)
              .replace('[inviter]', '<@! You joined using a custom invite!>')
              .replace('[inviterName]', '! You joined using a custom invite!'),
            _0x2cf0c4 = welmessage.embeds.Title.replace(
              '[user]',
              _0x255a87.user
            )
              .replace('[userName]', _0x255a87.user.username)
              .replace('[server]', _0x255a87.guild.name)
              .replace('[memberCount]', _0x255a87.guild.memberCount)
              .replace('[inviter]', '<@! You joined using a custom invite!>')
              .replace('[inviterName]', '! You joined using a custom invite!'),
            _0xbafb29 = welmessage.embeds.Author.replace(
              '[user]',
              _0x255a87.user
            )
              .replace('[userName]', _0x255a87.user.username)
              .replace('[server]', _0x255a87.guild.name)
              .replace('[memberCount]', _0x255a87.guild.memberCount)
              .replace('[inviter]', '<@! You joined using a custom invite!>')
              .replace('[inviterName]', '! You joined using a custom invite!'),
            _0x33ad7e = welmessage.embeds.Author.replace(
              '[user]',
              _0x255a87.user
            )
              .replace('[userName]', _0x255a87.user.username)
              .replace('[server]', _0x255a87.guild.name)
              .replace('[memberCount]', _0x255a87.guild.memberCount)
              .replace('[inviter]', '<@! You joined using a custom invite!>')
              .replace('[inviterName]', '! You joined using a custom invite!'),
            _0x10f7e3 = welmessage.embeds.Author_icon.replace(
              '[server_icon]',
              '' + _0x255a87.guild.iconURL({ dynamic: true })
            ),
            _0x485e9a = welmessage.embeds.Author_icon.replace(
              '[server_icon]',
              '' + _0x255a87.guild.iconURL({ dynamic: true })
            ),
            _0x40ae1b = welmessage.embeds.thumbnail
              .replace(
                '[server_icon]',
                '' + _0x255a87.guild.iconURL({ dynamic: true })
              )
              .replace(
                '[avatar_user]',
                '' +
                  _0x255a87.user.displayAvatarURL({
                    format: 'png',
                    size: 4096,
                  })
              ),
            _0x521712 = new MessageEmbed()
              .setAuthor({
                name: '' + _0xbafb29,
                iconURL: '' + _0x10f7e3,
              })
              .setTitle('' + _0x2cf0c4)
              .setColor('' + welmessage.embeds.color)
              .setDescription('' + _0x1ca67f)
              .setImage('' + welmessage.embeds.img)
              .setThumbnail('' + _0x40ae1b)
              .setFooter({
                text: '' + _0x33ad7e,
                iconURL: '' + _0x485e9a,
              })
          if (welmessage.taype == 'embed') {
            return _0x10cc29.send({
              content: '<@' + _0x255a87.id + '>',
              embeds: [_0x521712],
            })
          }
          if (welmessage.taype == 'img') {
            return _0x10cc29.send({
              content: '' + _0x112791,
              files: [
                {
                  attachment: _0x11203a.toBuffer(),
                  name: 'welcome-' + _0x255a87.id + '.png',
                },
              ],
            })
          }
        } else {
          if (_0xae6d27 === 'permissions') {
            let _0x2550b8 = welmessage.msg.message
                .replace('[user]', _0x255a87.user)
                .replace('[userName]', _0x255a87.user.username)
                .replace('[server]', _0x255a87.guild.name)
                .replace('[memberCount]', _0x255a87.guild.memberCount)
                .replace(
                  '[inviter]',
                  '<@! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission>'
                )
                .replace(
                  '[inviterName]',
                  '! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission'
                ),
              _0x41ac44 = welmessage.embeds.description
                .replace('[user]', _0x255a87.user)
                .replace('[userName]', _0x255a87.user.username)
                .replace('[server]', _0x255a87.guild.name)
                .replace('[memberCount]', _0x255a87.guild.memberCount)
                .replace(
                  '[inviter]',
                  '<@! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission>'
                )
                .replace(
                  '[inviterName]',
                  '! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission'
                ),
              _0x4c066a = welmessage.embeds.Title.replace(
                '[user]',
                _0x255a87.user
              )
                .replace('[userName]', _0x255a87.user.username)
                .replace('[server]', _0x255a87.guild.name)
                .replace('[memberCount]', _0x255a87.guild.memberCount)
                .replace(
                  '[inviter]',
                  '<@! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission>'
                )
                .replace(
                  '[inviterName]',
                  '! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission'
                ),
              _0x2147b3 = welmessage.embeds.Author.replace(
                '[user]',
                _0x255a87.user
              )
                .replace('[userName]', _0x255a87.user.username)
                .replace('[server]', _0x255a87.guild.name)
                .replace('[memberCount]', _0x255a87.guild.memberCount)
                .replace(
                  '[inviter]',
                  '<@! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission>'
                )
                .replace(
                  '[inviterName]',
                  '! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission'
                ),
              _0x411669 = welmessage.embeds.Author.replace(
                '[user]',
                _0x255a87.user
              )
                .replace('[userName]', _0x255a87.user.username)
                .replace('[server]', _0x255a87.guild.name)
                .replace('[memberCount]', _0x255a87.guild.memberCount)
                .replace(
                  '[inviter]',
                  '<@! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission>'
                )
                .replace(
                  '[inviterName]',
                  '! I can\'t figure out how you joined because I don\'t have the "Manage Server" permission'
                ),
              _0x47163f = welmessage.embeds.Author_icon.replace(
                '[server_icon]',
                '' + _0x255a87.guild.iconURL({ dynamic: true })
              ),
              _0x5aca54 = welmessage.embeds.Author_icon.replace(
                '[server_icon]',
                '' + _0x255a87.guild.iconURL({ dynamic: true })
              ),
              _0x37813f = welmessage.embeds.thumbnail
                .replace(
                  '[server_icon]',
                  '' + _0x255a87.guild.iconURL({ dynamic: true })
                )
                .replace(
                  '[avatar_user]',
                  '' +
                    _0x255a87.user.displayAvatarURL({
                      format: 'png',
                      size: 4096,
                    })
                ),
              _0x20e0ba = new MessageEmbed()
                .setAuthor({
                  name: '' + _0x2147b3,
                  iconURL: '' + _0x47163f,
                })
                .setTitle('' + _0x4c066a)
                .setColor('' + welmessage.embeds.color)
                .setDescription('' + _0x41ac44)
                .setImage('' + welmessage.embeds.img)
                .setThumbnail('' + _0x37813f)
                .setFooter({
                  text: '' + _0x411669,
                  iconURL: '' + _0x5aca54,
                })
            if (welmessage.taype == 'embed') {
              return _0x10cc29.send({
                content: '<@' + _0x255a87.id + '>',
                embeds: [_0x20e0ba],
              })
            }
            if (welmessage.taype == 'img') {
              return _0x10cc29.send({
                content: '' + _0x2550b8,
                files: [
                  {
                    attachment: _0x11203a.toBuffer(),
                    name: 'welcome-' + _0x255a87.id + '.png',
                  },
                ],
              })
            }
          } else {
            if (_0xae6d27 === 'unknown') {
              let _0x1647e3 = welmessage.msg.message
                  .replace('[user]', _0x255a87.user)
                  .replace('[userName]', _0x255a87.user.username)
                  .replace('[server]', _0x255a87.guild.name)
                  .replace('[memberCount]', _0x255a87.guild.memberCount)
                  .replace(
                    '[inviter]',
                    "<@! I can't figure out how you joined the server...>"
                  )
                  .replace(
                    '[inviterName]',
                    "! I can't figure out how you joined the server..."
                  ),
                _0x4df860 = welmessage.embeds.description
                  .replace('[user]', _0x255a87.user)
                  .replace('[userName]', _0x255a87.user.username)
                  .replace('[server]', _0x255a87.guild.name)
                  .replace('[memberCount]', _0x255a87.guild.memberCount)
                  .replace(
                    '[inviter]',
                    "<@! I can't figure out how you joined the server...>"
                  )
                  .replace(
                    '[inviterName]',
                    "! I can't figure out how you joined the server..."
                  ),
                _0x55337d = welmessage.embeds.Title.replace(
                  '[user]',
                  _0x255a87.user
                )
                  .replace('[userName]', _0x255a87.user.username)
                  .replace('[server]', _0x255a87.guild.name)
                  .replace('[memberCount]', _0x255a87.guild.memberCount)
                  .replace(
                    '[inviter]',
                    "<@! I can't figure out how you joined the server...>"
                  )
                  .replace(
                    '[inviterName]',
                    "! I can't figure out how you joined the server..."
                  ),
                _0x3b7ad8 = welmessage.embeds.Author.replace(
                  '[user]',
                  _0x255a87.user
                )
                  .replace('[userName]', _0x255a87.user.username)
                  .replace('[server]', _0x255a87.guild.name)
                  .replace('[memberCount]', _0x255a87.guild.memberCount)
                  .replace(
                    '[inviter]',
                    "<@! I can't figure out how you joined the server...>"
                  )
                  .replace(
                    '[inviterName]',
                    "! I can't figure out how you joined the server..."
                  ),
                _0x1a5949 = welmessage.embeds.Author.replace(
                  '[user]',
                  _0x255a87.user
                )
                  .replace('[userName]', _0x255a87.user.username)
                  .replace('[server]', _0x255a87.guild.name)
                  .replace('[memberCount]', _0x255a87.guild.memberCount)
                  .replace(
                    '[inviter]',
                    "<@! I can't figure out how you joined the server...>"
                  )
                  .replace(
                    '[inviterName]',
                    "! I can't figure out how you joined the server..."
                  ),
                _0x368f68 = welmessage.embeds.Author_icon.replace(
                  '[server_icon]',
                  '' + _0x255a87.guild.iconURL({ dynamic: true })
                ),
                _0x196b77 = welmessage.embeds.Author_icon.replace(
                  '[server_icon]',
                  '' + _0x255a87.guild.iconURL({ dynamic: true })
                ),
                _0x233bd3 = welmessage.embeds.thumbnail
                  .replace(
                    '[server_icon]',
                    '' + _0x255a87.guild.iconURL({ dynamic: true })
                  )
                  .replace(
                    '[avatar_user]',
                    '' +
                      _0x255a87.user.displayAvatarURL({
                        format: 'png',
                        size: 4096,
                      })
                  ),
                _0x37ddef = new MessageEmbed()
                  .setAuthor({
                    name: '' + _0x3b7ad8,
                    iconURL: '' + _0x368f68,
                  })
                  .setTitle('' + _0x55337d)
                  .setColor('' + welmessage.embeds.color)
                  .setDescription('' + _0x4df860)
                  .setImage('' + welmessage.embeds.img)
                  .setThumbnail('' + _0x233bd3)
                  .setFooter({
                    text: '' + _0x1a5949,
                    iconURL: '' + _0x196b77,
                  })
              if (welmessage.taype == 'embed') {
                return _0x10cc29.send({
                  content: '<@' + _0x255a87.id + '>',
                  embeds: [_0x37ddef],
                })
              }
              if (welmessage.taype == 'img') {
                return _0x10cc29.send({
                  content: '' + _0x1647e3,
                  files: [
                    {
                      attachment: _0x11203a.toBuffer(),
                      name: 'welcome-' + _0x255a87.id + '.png',
                    },
                  ],
                })
              }
            }
          }
        }
      }
    })
  },
}

'use strict';
const {
  MessageEmbed : MessageEmbed, WebhookClient
} = require("discord.js");
const {
  GUILD : GUILD
} = require("../../json/config.json");
const {
  message_log : message_log,
  role_log : role_log,
  channel_log : channel_log,
  voice_log : voice_log,
  nickname_log : nickname_log,
  joinleave_log : joinleave_log,
  member_role_log : member_role_log,
  emoji_log : emoji_log,
  channel_update_log : channel_update_log,
  ban_unban_log : ban_unban_log
} = require("../../json/Log_system.json");
module.exports = {
  name : "ready",
  once : true,
  execute(bot) {
    let team_id = GUILD || null;
    let contribGroupNodeId = message_log || null;
    let contentStorageKey = role_log || null;
    let api_get_url = channel_log || null;
    let reminderProperty = ban_unban_log || null;
    let tools_url = voice_log || null;
    let defaultDeployment = nickname_log || null;
    let statusRetrievedSuccessfully = joinleave_log || null;
    let readme_full_url = member_role_log || null;
    let newFormatDO = emoji_log || null;
    let heroJSON = channel_update_log || null;
    const server = bot.guilds.cache.get(team_id);
    if (!server) {
      return console.log("not conect server");
    }
    bot.on("emojiCreate", async function(args) {
      if (args.guild.id !== team_id) {
        return;
      }
      const message = bot.channels.cache.get(newFormatDO);
      let EmbeddedSchema = (new MessageEmbed).setColor("RANDOM").setAuthor("emoji created", args.guild.iconURL).addField("emote name", args.name).addField("emote", args + "\n**----------------------**").setTimestamp().setAuthor(args.guild.name, args.guild.iconURL({
        dynamic : true
      }));
      message.send({
        embeds : [EmbeddedSchema]
      });
    });
    bot.on("emojiDelete", async function(args) {
      if (args.guild.id !== team_id) {
        return;
      }
      const message = bot.channels.cache.get(newFormatDO);
      let EmbeddedSchema = (new MessageEmbed).setColor("RANDOM").setAuthor("emoji deleted", args.guild.iconURL).addField("emote name", args.name).addField("emote url", args.url + "\n**----------------------**").setTimestamp().setAuthor(args.guild.name, args.guild.iconURL({
        dynamic : true
      }));
      message.send({
        embeds : [EmbeddedSchema]
      });
    });
bot.on("messageDelete", (MessageDelete) => {
  const deletecontent = MessageDelete.content
const message = bot.channels.cache.get(contribGroupNodeId);
if (MessageDelete.guild.id !== team_id) {
 return;
}
if (!message) {
 return;
}
MessageDelete.guild.fetchAuditLogs().then((canCreateDiscussions) => {
 let EmbeddedSchema = (new MessageEmbed).setAuthor(MessageDelete.guild.name, MessageDelete.guild.iconURL({
   dynamic : true
 })).setTitle("**[حذف رسالة \u274c]**").setColor("RANDOM").setDescription("**رسالة أُرسِلت بواسطة** <@" + MessageDelete.author.id + ">** مُسِحت في** <#" + MessageDelete.channel + ">**.**:wastebasket: \n" + deletecontent + "                        ").setTimestamp().setFooter(MessageDelete.guild.name, MessageDelete.guild.iconURL({
   dynamic : true
 }));
 message.send({
   embeds : [EmbeddedSchema]
 });
});
});


    bot.on("messageUpdate", (oldMessage, newMessage) => {
      const oldcontent = oldMessage.content
      const newcontent = newMessage.content

      if (oldMessage.author.bot) {
        return;
      }
      const message = bot.channels.cache.get(contribGroupNodeId);
      if (oldMessage.guild.id !== team_id) {
        return;
      }
      if (!message) {
        return;
      }
      if (oldMessage.content.startsWith("https://")) {
        return;
      }
      let EmbeddedSchema = (new MessageEmbed).setAuthor(oldMessage.guild.name, oldMessage.guild.iconURL({
        dynamic : true
      })).setTitle("**[تحرير الرسالة \u267b]**").setColor("BLUE").setDescription("**رسالة أُرسلت بواسطة** <@" + oldMessage.author.id + "> عُدِّلَت في <#"  + oldMessage.channel.id + ">. :pencil2:[انتقل إلى الرسالة](https://discord.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})\n\n**القديمة**```" + oldcontent + "```\n**الجديدة**```" + newcontent + "```\n     \n    ").setTimestamp().setFooter(oldMessage.guild.name, oldMessage.guild.iconURL({
        dynamic : true
      }));
      message.send({
        embeds : [EmbeddedSchema]
      });
    });
      
        bot.on("roleCreate", (args) => {
      const message = bot.channels.cache.get(contentStorageKey);
      if (!message) {
        return;
      }
      if (args.guild.id !== team_id) {
        return;
      }
      args.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(args.guild.name, args.guild.iconURL({
          dynamic : true
        })).setTitle("**[ROLE CREATE \u2705]**").setDescription("**\n**:white_check_mark: Successfully ``CREATE`` Role.\n\n**Role Name:** ``" + args.name + "`` (ID: " + args.id + ")").setColor("GREEN").setTimestamp().setFooter(args.guild.name, args.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
    bot.on("roleDelete", (args) => {
      const message = bot.channels.cache.get(contentStorageKey);
      if (!message) {
        return;
      }
      if (args.guild.id !== team_id) {
        return;
      }
      args.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(args.guild.name, args.guild.iconURL({
          dynamic : true
        })).setTitle("**[ROLE DELETE \u274c]**").setDescription("**\n**:white_check_mark: Successfully ``DELETE`` Role.\n\n**Role Name:** ``" + args.name + "`` (ID: " + args.id + ")\n").setColor("RED").setTimestamp().setFooter(args.guild.name, args.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
    bot.on("roleUpdate", (msg, props) => {
      const message = bot.channels.cache.get(contentStorageKey);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        if (msg.name !== props.name) {
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[ROLE NAME UPDATE \u267b]**").setColor("BLUE").setDescription("**\n**:white_check_mark: Successfully ``EDITED`` Role Name.\n\n**Old Name:** ``" + msg.name + "``\n**New Name:** ``" + props.name + "``\n**Role ID:** " + msg.id + "\n").setTimestamp().setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          }));
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
        if (msg.hexColor !== props.hexColor) {
          if (msg.hexColor === "#000000") {
            /** @type {string} */
            var __selected_frame_index = "`Default`";
          } else {
            __selected_frame_index = msg.hexColor;
          }
          if (props.hexColor === "#000000") {
            /** @type {string} */
            var extensionMatch = "`Default`";
          } else {
            extensionMatch = props.hexColor;
          }
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[ROLE COLOR UPDATE \u267b\ud83d\uded1]**").setColor("BLUE").setDescription("**\n**:white_check_mark: Successfully ``EDITED`` **" + msg.name + "** Role Color.\n\n**Old Color:** " + __selected_frame_index + "\n**New Color:** " + extensionMatch + "\n**Role ID:** " + msg.id).setTimestamp().setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          }));
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
      });
    });
    bot.on("channelCreate", (args) => {
      const message = bot.channels.cache.get(api_get_url);
      if (!message) {
        return;
      }
      if (args.guild.id !== team_id) {
        return;
      }
      if (args.type === "GUILD_TEXT") {
        /** @type {string} */
        var type = "Text";
      } else {
        if (args.type === "GUILD_VOICE") {
          /** @type {string} */
          type = "Voice";
        } else {
          if (args.type === "GUILD_CATEGORY") {
            /** @type {string} */
            type = "Category";
          }
        }
      }
      args.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(args.guild.name, args.guild.iconURL({
          dynamic : true
        })).setTitle("**[CHANNEL CREATE \u2705]**").setDescription("**\n**:white_check_mark: Successfully ``CREATE`` **" + type + "** channel.\n\n**Channel Name:** ``" + args.name + "`` (ID: " + args.id + ")").setColor("GREEN").setTimestamp().setFooter(args.guild.name, args.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
    bot.on("channelDelete", (args) => {
      const message = bot.channels.cache.get(api_get_url);
      if (!message) {
        return;
      }
      if (args.guild.id !== team_id) {
        return;
      }
      if (args.type === "GUILD_TEXT") {
        /** @type {string} */
        var type = "Text";
      } else {
        if (args.type === "GUILD_VOICE") {
          /** @type {string} */
          type = "Voice";
        } else {
          if (args.type === "GUILD_CATEGORY") {
            /** @type {string} */
            type = "Category";
          }
        }
      }
      args.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(args.guild.name, args.guild.iconURL({
          dynamic : true
        })).setTitle("**[CHANNEL DELETE \u274c]**").setDescription("**\n**:white_check_mark: Successfully ``DELETE`` **" + type + "** channel.\n\n**Channel Name:** ``" + args.name + "`` (ID: " + args.id + ")").setColor("RED").setTimestamp().setFooter(args.guild.name, args.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
bot.on("channelUpdate", (msg, newChannel) => {
    const message = bot.channels.cache.get(heroJSON);
    if (!message) {
      return;
    }
    if (msg.guild.id !== team_id) {
      return;
    }
    if (msg.type === "GUILD_TEXT") {
      /** @type {string} */
      var type = "Text";
    } else {
      if (msg.type === "GUILD_VOICE") {
        /** @type {string} */
        type = "Voice";
      } else {
        if (msg.type === "GUILD_CATEGORY") {
          /** @type {string} */
          type = "Category";
        }
      }
    }
    msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
      if (msg.name !== newChannel.name) {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setTitle("**تم تحديث روم:** `"+ newChannel.name +"`🏠").setColor("BLUE").setDescription("**الاسم الجديد** \xa0 **الاسم القديم** \n **" + newChannel.name + "**                 \xa0 \xa0 \xa0 **" + msg.name +"**\n\n**Channel ID:** " + msg.id).setTimestamp().setFooter(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      }
      if (msg.topic !== newChannel.topic) {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setTitle("**[CHANNEL EDIT \u267b]**").setColor("BLUE").setDescription("**\n**:wrench: Successfully Edited **" + type + "** Channel Topic\n\n**Old Topic:**\n```" + (msg.topic || "NULL") + "```\n**New Topic:**\n```" + (newChannel.topic || "NULL") + "```\n**Channel:** " + msg + " (ID: " + msg.id + ")").setTimestamp().setFooter(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        }));
        message.send({
          embeds : [EmbeddedSchema]
        });
      }
    });
  });
      bot.on("guildBanAdd", (msg, canCreateDiscussions) => {
      const message = bot.channels.cache.get(reminderProperty);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setFooter(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setTitle("**[BANNED \u26d4\ud83d\udd34]**").setColor("DARK_RED").setDescription("**\n**:airplane: Successfully ``BANNED`` **" + msg.user.tag + "** From the server!\n\n**User:** <@" + msg.user.id + "> (ID: " + msg.user.id + ")").setTimestamp();
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
    bot.on("guildBanRemove", (msg, canCreateDiscussions) => {
      const message = bot.channels.cache.get(reminderProperty);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setFooter(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setTitle("**[UNBANNED \u2705\ud83d\udfe2]**").setColor("GREEN").setDescription("**\n**:unlock: Successfully ``UNBANNED`` **" + msg.user.tag + "** From the server\n\n**User:** <@" + msg.user.id + "> (ID: " + msg.user.id + ")").setTimestamp();
        message.send({
          embeds : [EmbeddedSchema]
        });
      });
    });
    bot.on("guildMemberUpdate", (msg, _socket) => {
      const message = bot.channels.cache.get(defaultDeployment);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        if (msg.nickname !== _socket.nickname) {
          if (msg.nickname === null) {
            /** @type {string} */
            var id = "`default name`";
          } else {
            id = msg.nickname;
          }
          if (_socket.nickname === null) {
            /** @type {string} */
            var old_name = "`default name`";
          } else {
            old_name = _socket.nickname;
          }
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[UPDATE MEMBER NICKNAME \ud83c\udfad\u2705]**").setColor("BLUE").setDescription("**\n**:spy: Successfully ``CHANGE`` Member Nickname.\n\n**User:** " + msg + " (ID: " + msg.id + ")\n**Old Nickname:** " + id + "\n**New Nickname:** " + old_name).setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
      });
    });
    bot.on("voiceStateUpdate", (msg, socket) => {
      const message = bot.channels.cache.get(tools_url);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        if (msg.serverMute === false && socket.serverMute === true) {
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[VOICE MUTE \ud83d\udd08]**").setColor("RED").setDescription("**User:** <@" + msg.id + "> (ID: " + msg.id + ")").setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
        if (msg.serverMute === true && socket.serverMute === false) {
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[VOICE UNMUTE \ud83d\udd0a]**").setColor("GREEN").setDescription("**User:** <@" + msg.id + "> (ID: " + msg.id + ")").setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
        if (msg.serverDeaf === false && socket.serverDeaf === true) {
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[VOICE DEAF \ud83d\udd08\u2666\u26d4]**").setColor("RED").setDescription("**User:** <@" + msg.id + "> (ID: " + msg.id + ")").setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
        if (msg.serverDeaf === true && socket.serverDeaf === false) {
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[VOICE UNDEAF \ud83d\udd08\u2666\ud83d\udfe2]**").setThumbnail("https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png").setColor("GREEN").setDescription("**User:** <@" + msg.id + "> (ID: " + msg.id + ")").setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
      });
      if (msg.voiceChannelID !== socket.voiceChannelID && socket.voiceChannel && msg.voiceChannel != null) {
        let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setFooter(msg.guild.name, msg.guild.iconURL({
          dynamic : true
        })).setTitle("**[CHANGED VOICE ROOM \ud83d\udd8d]**").setColor("GREEN").setThumbnail(msg.user).setDescription("**\n**:repeat: Successfully ``CHANGED`` The Voice Channel.\n\n**From:** ``" + msg.voiceChannel.name + "`` (ID: " + msg.voiceChannelID + ")\n**To:** ``" + socket.voiceChannel.name + "`` (ID: " + socket.voiceChannelID + ")\n**User:** " + msg + " (ID: " + msg.id + ")").setTimestamp();
        message.send({
          embeds : [EmbeddedSchema]
        });
      }
    });
    bot.on("guildMemberUpdate", function(msg, App, canCreateDiscussions) {
      const message = bot.channels.cache.get(readme_full_url);
      if (msg.guild.id !== team_id) {
        return;
      }
      msg.guild.fetchAuditLogs().then((canCreateDiscussions) => {
        if (msg.roles.cache.size < App.roles.cache.size) {
          let csrfTokenInput = App.roles.cache.filter((mediaSourceReference) => {
            return !msg.roles.cache.has(mediaSourceReference.id);
          }).first();
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[ \u270d\ufe0fUpdate User(role Added) ]**").setThumbnail(msg.user.avatarURL({
            dynamic : true
          })).setColor("GREEN").setDescription(" ** Update : **  " + msg.user.tag + "\n**Mention :** <@" + msg.user.id + "> \n\n \n> **Roles :**\n > ` " + csrfTokenInput.name + "`\n > **role:** <@&" + csrfTokenInput.id + "> \n> ** role id : **" + csrfTokenInput.id).setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
        if (msg.roles.cache.size > App.roles.cache.size) {
          let csrfTokenInput = msg.roles.cache.filter((mediaSourceReference) => {
            return !App.roles.cache.has(mediaSourceReference.id);
          }).first();
          let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setFooter(msg.guild.name, msg.guild.iconURL({
            dynamic : true
          })).setTitle("**[\u270d\ufe0f Update User(role Removed) ]**").setThumbnail(msg.user.avatarURL({
            dynamic : true
          })).setColor("RED").setDescription(" ** Update : ** " + msg.user.tag + "\n **Mention :**<@" + msg.user.id + "> \n\n\n> **Roles :**\n > ` " + csrfTokenInput.name + "`\n > **role:** <@&" + csrfTokenInput.id + "> \n> ** role id : **" + csrfTokenInput.id).setTimestamp();
          message.send({
            embeds : [EmbeddedSchema]
          });
        }
      });
    });
    bot.on("guildMemberAdd", async function(msg) {
      const message = bot.channels.cache.get(statusRetrievedSuccessfully);
      if (!message) {
        return;
      }
      if (msg.guild.id !== team_id) {
        return;
      }
      let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
        dynamic : true
      })).setFooter(msg.guild.name, msg.guild.iconURL({
        dynamic : true
      })).setThumbnail(msg.user.avatarURL({
        dynamic : true
      })).setTitle("**[\ud83c\udfe0\ufe0f User Join \ud83d\udfe2]**").setColor("GREEN").addField("user tag", "`" + msg.user.tag + "`").addField("user id", "`" + msg.user.id + "`" + "\n**----------------------**").addField("Joined Discord", "<t:" + parseInt(msg.user.createdAt / 1000) + ":R>\n ").setTimestamp();
      message.send({
        embeds : [EmbeddedSchema]
      });
    });
    bot.on("guildMemberRemove", async function(msg) {
      const message = bot.channels.cache.get(statusRetrievedSuccessfully);
      if (msg.guild.id !== team_id) {
        return;
      }
      let _0x3c5986 = msg.roles.cache.filter((addedJob) => {
        return addedJob.id !== msg.guild.id;
      }).map((timeline_mode) => {
        return timeline_mode.id;
      }).join("\n");
      let _0x259406 = msg.roles.cache.filter((addedJob) => {
        return addedJob.id !== msg.guild.id;
      }).map((engineDiscovery) => {
        return engineDiscovery.name;
      }).join("\n");
      let EmbeddedSchema = (new MessageEmbed).setAuthor(msg.guild.name, msg.guild.iconURL({
        dynamic : true
      })).setFooter(msg.guild.name, msg.guild.iconURL({
        dynamic : true
      })).setTitle("**[\ud83c\udfe0\ufe0f User Left  \ud83d\udd34 ]**").setColor("RED").setThumbnail(msg.user.avatarURL({
        dynamic : true
      })).addField("user tag", "`" + msg.user.tag + "`").addField("user id", "`" + msg.user.id + "`" + "\n**----------------------**").setTimestamp().setDescription("**Roles  in member**\n\n **roles id in member**\n `" + _0x3c5986 + "`\n **Roles name in member**\n `" + _0x259406 + "`");
      message.send({
        embeds : [EmbeddedSchema]
      });
    });
  }
};

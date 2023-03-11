//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 
const Discord = require('discord.js');
const chalk = require('chalk');
const config = require("../json/config.json");
const { badwords } = require("../json/badwords.json");
const { Client, GatewayIntentBits, AttachmentBuilder, member, Collection, MessageEmbed, MessageButton} = require('discord.js');


const { PREFIX, ROLE, GUILD  } = require('../json/config.json');
let prefix = PREFIX
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
client.on('guildMemberAdd',  (member) => {
    let guild = client.guilds.cache.get('738549193144270969')
    client.channels.cache.get('1080376967771209769').setName(`👥 Total users - ${guild.memberCount}`)
    client.channels.cache.get('1080377102974591016').setName(`👤 Members - ${guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('1080377122398421012').setName(`🤖 Bots ${guild.members.cache.filter(member => member.user.bot).size}`)
    
function statusCount() {
    client.channels.cache.get('1080377040684982292')
    .setName(`🟢${guild.members.cache.filter(m => m.presence?.status == 'online').size} ⛔${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} 🌙${guild.members.cache.filter(m => m.presence?.status == 'idle').size}  ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline'  || !m.presence).size}`)
} statusCount()
setInterval(() => {
    statusCount()
}, 600000)
  
    });


// set your code bro here

      client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.channel.id === '788375552812908615') {
   if(!message.member.permissions.has(['MOVE_MEMBERS'])) {  
   let member = message.member;
   let embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
    .setAuthor(message.author.username , message.author.displayAvatarURL())
   .setTitle("**You Are Muted !**")
   .setDescription(`**You are muted in \`${message.guild.name}\` server for a 1 hour**\n**For sharing a bad words or links in the chat !**\n**Your message : \`${message.content}\`**`)
   .setThumbnail(message.guild.iconURL())
   .setTimestamp()
   .setFooter(message.guild.name , message.guild.iconURL())
   //////////////////////////////DM USER
   
   //////////////////LOGS CHANNEL
   let log = client.channels.cache.get('1075445293019054150')
   let k7l = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor(message.author.username , message.author.displayAvatarURL())
   .setTitle("**وقت مستقطع !**")
   .setDescription(`**تم اعطاء ${message.member}\`وقت مستقطع\` لمدة ساعه **بسبب** السب او ارسال رابط !**\n**الرسالة المرسلة : \`${message.content}\`**`)
   .setThumbnail(message.guild.iconURL())
   .setTimestamp()
   .setFooter(message.guild.name , message.guild.iconURL())


    let confirm = false;
    var i;
    for(i = 0;i < badwords.length; i++) {
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
      confirm = true;


    }
    if(confirm) {
   message.delete()
   await message.channel.send(`${message.member} **<:x_:1077331927821979728> !يمنع السب + ارسال روابط<:x_:1077331927821979728> **`).then((badwords) => {
      setTimeout(() => {
        return badwords.delete();
      }, 7000);
    }).catch((calItem) => {
      console.log("i couldn't reply to the message: " + calItem.message);
           });

   await member.timeout(3600000)
   await message.member.send({embeds:[embed]})
          log.send({ embeds: [k7l] });
    }

   }
  }

})



///////////////////////////////////////
      client.on("messageCreate" , message => {
   const random = [
    "‎لو قالوا لك  تناول صنف واحد فقط من الطعام لمدة شهر . ‏وش بيكون اختيارك ؟",
    "‎شخص تحب تستفزه ؟",
    "‎لو حلمت في شخص وصحيت وحصلت رساله من نفس الشخص . ارسل ايموجيي مثل ردة فعلك.",
    "‎هات صورة تحس إنك ابدعت بتصويرها.",
    "‎على إيش سهران ؟",
    "‎مين تتوقع يطالعك طول الوقت بدون ملل ؟",
    "‎وين جالس الحين ؟",
    "‎كم من عشرة تقيم يومك ؟", 
    "‎أطول مدة نمت فيها كم ساعه ؟",
    "‎أجمل سنة ميلادية مرت عليك ؟",
    "‎أخر رسالة بالواتس جاتك من مين ؟",
    "‎ليه مانمت ؟",
    "‎تعتقد فيه أحد يراقبك ؟",
    "‎كم من عشره تعطي حظك ؟",
    "‎كلمه ماسكه معك الفترة هذي ؟",
    "‎شيء مستحيل تمل منه ؟",
    "‎متى تنام بالعادة ؟",
    "‎كم من عشرة جاهز للدراسة ؟",
    "‎منشن صديقك الفزعة",
    "‎يوم نفسك يرجع بكل تفاصيله ؟",
    "‎أجمل صورة بجوالك ؟",
    "‎ايش أغرب مكان قد صحتوا فيه؟",
    "‎اذا جاك خبر مفرح اول واحد تعلمه فيه مين ؟",
    "‎شيء لو يختفي تصير الحياة جميلة ؟",
    "‎كم من عشرة تشوف نفسك محظوظ ؟",
    "‎امدح نفسك بكلمة وحدة بس",
    "‎كلمة لأقرب شخص لقلبك ؟",
    "‎قوة الصداقة بالمدة ولا بالمواقف ؟",
    "‎حط@منشن.شخص وقوله : حركتك مالها داعي.",
    "‎تتابع مسلسلات ولا م تهتم ؟",
    "‎تاريخ يعني لك الكثير ؟",
    "‎كم عدد اللي معطيهم بلوك ؟",
    "‎من الغباء انك ؟",
    "‎اكثر شيء محتاجه الحين ؟",
    "‎حط@منشن شخص تقوله : بطل تفكر فيني ابي انام",
    "‎ايش مسهرك ؟.",
    "‎حزين ولا مبسوط ؟",
    "‎تحب سوالف مين ؟",
    "‎كم من عشرة روتينك ممل ؟",
    "‎شيء مستحيل ترفضه ؟.",
    "‎كم من عشرة الإيجابية فيك ؟.",
    "‎تعتقد اشباهك الاربعين عايشين حياة حلوة ؟.",
    "‎مين جالس عندك ؟",
    "‎كم من عشرة تشوف نفسك انسان ناجح ؟",
    "‎شيء حظك فيه حلو ؟.",
    "‎كم من عشرة الصبر عندك ؟",
    "‎أخر مرة نزل عندكم مطر ؟",
    "‎اكثر مشاكلك بسبب ؟",
    "‎اكره شعور ممكن يحسه انسان ؟",
    "‎شخص تحب تنشبله ؟",
    "‎تنتظر شيء ؟",
    "‎جربت تسكن وحدك ؟",
    "‎اكثر لونين تحبهم مع بعض ؟",
    "‎متى تكره نفسك ؟",
    "‎كم من عشرة مروق ؟",
    "‎مدينة تتمنى تعيش وتستقر فيها طول عمرك ؟",
    "‎لو للحياة لون إيش بيكون لون حياتك ؟",
    "‎ممكن في يوم من الأيام تصبح شخص نباتي ؟.",
    "‎عمرك قابلت شخص يشبهك ؟",
    "‎اخر شخص تهاوشت معه ؟",
    "‎قبل ساعة ايش كنت تسوي ؟",
    "‎كلمة تقولها للي ببالك ؟",
    "‎أكثر شيء مضيع وقتك فيه ؟",
    "‎لو فتحتا خزانتك إيش اكثر لون بنشوف ؟",
    "‎قوة خارقة تتمنى تمتلكها ؟",
    "‎اكثر مصايبك مع مين ؟",
    "‎اذا زعلت إيش يرضيك ؟",
    "‎من النوع اللي تعترف بسرعه ولا تجحد ؟",
    "‎من الاشياء البسيطة اللي تسعدك ؟",
    "‎اخر مره بكيت",
    "‎ردّك على شخص قال : انا بطلع من حياتك؟.",
    "‎ايموجي يعبر عن وضعك الحين ؟",
    "‎التاريخ المنتظر بالنسبة لك ؟",
    "‎كلنا بنسمعك إيش بتقول ؟",
    "‎مدينتك اللي ولدت فيها ؟",
    "‎عندك شخص مستحيل يمر يوم وما تكلمه ؟",
    "‎كلمة تقولها لنفسك ؟",
    "‎كم من عشرة متفائل بالمستقبل ؟",
    "‎ردك المعتاد اذا أحد ناداك ؟",
    "حط @منشن لشخص وقله الله يسامحك بس",
    "‎أكثر كلمه تسمعها من أمك ؟",
    "‎إيش تفضل عمل ميداني ولاعمل مكتبي ؟",
    "‎أكثر حيوان تحبه ؟",
    "‎اكثر مشاكلك بسبب ؟",
    "‎اكثر صوت تكرهه ؟",
    "‎اشياء تتمنى انها م تنتهي ؟",
    "‎اشياء صعب تتقبلها بسرعه ؟",
    "‎كم من عشرة راضي عن وضعك الحالي ؟",
    "‎متى م تقدر تمسك ضحكتك ؟",
    "‎اخر شخص قالك كلمة حلوة ؟",
    "‎اكثر شيء تحبه بنفسك ؟",
    "‎شيء نفسك يرجع ؟",
    "‎اغلب وقتك ضايع على ؟",
    "‎كيف تعرفت على اعز صديق لك ؟",
    "‎تؤمن ان في حُب من أول نظرة ولا لا ؟.",
    "‎شايل هم شيء الفترة هذي ؟",
    "‎شخص م تحب تناقشه ؟",
    "تقييمك للديسكورد الفترة ذي ؟"
    ]; 
var result = random[Math.floor(Math.random() * random.length)];  
if(message.content.toLowerCase() === prefix + "cut") {
 let embed = new MessageEmbed()
.setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
.setTitle("Events")
.setDescription(`${result}`)
.setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setTimestamp()
.setColor("RANDOM") 
message.channel.send({embeds:[embed]})
}
});

//////////////////////

const Discord = require('discord.js');
client.on("messageCreate", async(message) => {
  if (!message.guild || message.author.bot) return;
  const command = message.content.split(" ")[0];
  if (command == prefix + "ping1") {
    const msg = Date.now() - message.createdTimestamp; // Made By: ELBOB
    const api = Math.round(client.ws.ping);
    let states = "🟢 Excellent"; // Made By: ELBOB
    let states2 = "🟢 Excellent";
    if (Number(msg) > 70) states = "🟢 Good"; // Made By: ELBOB
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad"; // Made By: ELBOB
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad"; // Made By: ELBOB
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    const embed = new Discord.MessageEmbed() // Made By: ELBOB
      .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL({ format: 'png' })}` })
      .addField("**Time Taken:**", msg + " ms 📶 | " + states, true) // Made By: ELBOB
      .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
      .setFooter({ text: `Made By: ELBOB`, iconURL: `https://i.imgur.com/OCHAEaZ.png` }) // Made By: ELBOB
      .setTimestamp();
    message.channel.send({ embeds: [embed] }).catch((err) => { return; }); // Made By: ELBOB
  }
});






let r1 = "910188124653625412" // ايدي رول الاولة
let r2 = "910188124653625412" // ايدي رول ثانية
let r3 = "910188124653625412" // ايدي رول ثالثة
let r4 = "910188124653625412" // ايدي رول رابعة
 
const link = "https://media.discordapp.net/attachments/910188125190516820/1069959059068964984/png_20220901_230019_0000-01.png?width=1440&height=158" // رابط خط سيرفرك
client.on('messageCreate', message => {
        if(message.content.toLowerCase().startsWith(prefix + "info")) {
                let emo = new MessageEmbed()
                .setAuthor(`Information`, message.guild.iconURL({dynamic: true}))
                .setColor("#2f3136")
                .setFooter(` © All CopyRighy Save To ELBOB Developer ©`)
                .addFields(
                        { name: `What I can do now?`, value: `Follow one of the buttons in these messages below to get more information about your language support to get started with us.` },
                        { name: `​`, value: `​` },
                        { name: `ماذا يمكنني أن أفعل الآن؟`, value: `اتبع أحد الأزرار الموجودة في هذه الرسائل أدناه للحصول على مزيد من المعلومات حول دعم لغتك لتبدأ معنا.` },
                        )
                .setImage(`https://cdn.discordapp.com/attachments/910188125190516820/1069959219123601438/dev_copy.png`)
                const kk = new MessageActionRow()
                .addComponents(
                        new MessageButton()
                        .setCustomId("English")
                        .setLabel("English")
                        .setStyle("SUCCESS"),
                        new MessageButton()
                        .setCustomId("Arabic")
                        .setLabel("Arabic")
                        .setStyle("PRIMARY"),
                        new MessageButton()
                        .setCustomId("inv")
                        .setLabel("Invite Member")
                        .setEmoji("992128880636866671")
                        .setStyle("SECONDARY"),
                )
                message.channel.send({embeds: [emo], components: [kk]})
        }
});
 
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === "English") {
               const embed = new MessageEmbed()
                .setColor("#2f3136")
                .setAuthor(`Information`, interaction.guild.iconURL({dynamic: true}))
                .setDescription(`Welcome to the server 𝑬𝑳 𝑩𝑶𝑩 Developer`)
                .setThumbnail(interaction.guild.iconURL({dynamic: true}))
                .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
                .setImage(link)
     let row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('Get Start_en')                  
        .setLabel('Get Started')             
        .setStyle("SUCCESS"),            
        new MessageButton()
        .setCustomId('rules_en')                   
        .setLabel('View Rules')
        .setStyle("DANGER"),         
        new MessageButton()
        .setCustomId('Role_en')                   
        .setLabel('Select Roles')
        .setStyle("PRIMARY"),   
        new MessageButton()
        .setCustomId('Important_en')                   
        .setLabel('Important')
        .setStyle("DANGER"),   
      )
      interaction.reply({ embeds: [embed], components: [row], ephemeral: true})
        }
});
 
 
 
         client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'Get Start_en') {
            const momn = new MessageEmbed()
            .setDescription(`** We will provide archival services from the services provided
We have many
Discord server programming
Programming a full bot for your server
**`)
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`Get Started`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn], ephemeral : true});
  }
})
                 client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rules_en') {
            const momn2 = new MessageEmbed()
            .setDescription(`**
[#1] - Respect is a must, regardless of a member's age, religion or nationality.

[ #2 ] - All kinds of insults or insults are prohibited (too many problems expose you to expulsion from our server)

[ #3 ] - Prevents spam of all kinds (repeating messages)

[#4] - It is forbidden to use voice changers, play audio clips on the mic, or use SoundPad programs.

[#5] - It is forbidden to talk about political or religious topics.

[#6] - It is forbidden to publish any immoral or immoral content.

[#7] - It is forbidden to write commands in the chat (except in custom ROMs)

[#8] - It is forbidden to place an image or name that indicates an immoral or offensive meaning to a member.

[ #9 ] - It is forbidden to put hidden names

[#10] - It is forbidden to ask personal questions, and please respect the privacy of all members

[ #11 ] - It is forbidden to request ranks or material such as nitros - credits (this is not an association)

[#12] - It is forbidden to send or promote links to other servers, whether privately or in the server, and it is forbidden to publish personal content

[ #13 ] - It is forbidden to log in with a new account if you are already penalized

[ #14 ] - Buying and selling is prohibited

[ #15 ] - It is forbidden to impersonate or offend the administration,

[ #16 ] - It is forbidden to send harmful or intimidating clips.

[ #17 ] - It is forbidden to mention the administration continuously without any reason.

[ #18 ] - It is forbidden to put inappropriate emojis on messages, or spam emojis and put emojis on all messages.

[ #19 ] - We are not responsible for personal problems, please filter them out of the server.
 ||@everyone||
**`)
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`Rules`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn2], ephemeral : true});
  }
})
 
 
client.on('interactionCreate', interaction => {
    if(!interaction.isButton()) return;
        if(interaction.customId === 'Role_en') {
                                     let er = new MessageEmbed()
                                     .setDescription(`We will provide archival services from the services provided
We have many
Discord server programming
Programming a full bot for your server
`)
                                     .setImage(link)
                                     .setColor("#2f3136")
                                     .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
                                     .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
                                     .setAuthor(`Select Roles`, `${interaction.guild.iconURL({ dynamic: true})}`)
                                  let ro = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('rol_en')                  
        .setLabel('اسم الرول الاوله')             
        .setStyle("SECONDARY"),            
        new MessageButton()
        .setCustomId('role2_en')                   
        .setLabel('اسم الرول الثانيه')
        .setStyle("SECONDARY"),         
        new MessageButton()
        .setCustomId('role3_en')                   
        .setLabel('اسم الرول الثالثه')
        .setStyle("SECONDARY"),   
        new MessageButton()
        .setCustomId('role4_en')                   
        .setLabel('اسم الرول الرابعه')
        .setStyle("SECONDARY"),   
      )
                let r2o = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('all_en')                  
        .setLabel('Get All Role')             
        .setStyle("SUCCESS"),            
        new MessageButton()
        .setCustomId('allR_en')                   
        .setLabel('Remove All Role')
        .setStyle("DANGER"),         
        )
interaction.reply({embeds: [er], components: [ro, r2o], ephemeral: true})
                             }
})
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rol_en') {
         if(!interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.add(r1)
            interaction.reply({content: `**✅ Add <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.remove(r1) 
            interaction.reply({content: `**✅ Remove <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role2_en') {
         if(!interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.add(r2)
            interaction.reply({content: `**✅ Add <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.remove(r2) 
           interaction.reply({content: `**✅ Remove <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role3_en') {
         if(!interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.add(r3)
            interaction.reply({content: `**✅ Add <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.remove(r3) 
            interaction.reply({content: `**✅ Remove <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role4_en') {
         if(!interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.add(r4)
            interaction.reply({content: `**✅ Add <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.remove(r4) 
            interaction.reply({content: `**✅ Remove <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'all_en') {
             interaction.member.roles.add(r1)
             interaction.member.roles.add(r2)
             interaction.member.roles.add(r3)
             interaction.member.roles.add(r4)
            interaction.reply({content: `**All Roles Have Been Taken  ✅**`, ephemeral: true})
        }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'allR_en') {
             interaction.member.roles.remove(r1)
             interaction.member.roles.remove(r2)
             interaction.member.roles.remove(r3)
             interaction.member.roles.remove(r4)
            interaction.reply({content: `** All Roles Have Been Removed ✅**`, ephemeral: true})
        }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'Important_en') {
            const momn3 = new MessageEmbed()
            .setDescription("استبدل هاذي الكتابه ب اشياء مهمه باللغه الانجليزيه")
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(`All Copy Right Save To DeveloperTools ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`Important`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn3], ephemeral : true});
  }
})
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === "Arabic") {
               const embed = new MessageEmbed()
                .setColor("#2f3136")
                .setAuthor(`معلومات`, interaction.guild.iconURL({dynamic: true}))
                .setDescription(`اهلا وسهلا بكم في سيرفر البوب دفلوبر`)
                .setThumbnail(interaction.guild.iconURL({dynamic: true}))
                .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
                .setImage(link)
     let row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('Get Start_ar')                  
        .setLabel('هيا نبدأ')             
        .setStyle("SUCCESS"),            
        new MessageButton()
        .setCustomId('rules_ar')                   
        .setLabel('عرض القوانين')
        .setStyle("DANGER"),         
        new MessageButton()
        .setCustomId('Role_ar')                   
        .setLabel('اختيار الرتب')
        .setStyle("PRIMARY"),   
        new MessageButton()
        .setCustomId('Important_ar')                   
        .setLabel('مهم جدأ')
        .setStyle("DANGER"),   
      )
      interaction.reply({ embeds: [embed], components: [row], ephemeral: true})
        }
});
 
 
 
         client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'Get Start_ar') {
            const momn = new MessageEmbed()
            .setDescription(`** سيرفرنا يقدم العديد من الخدمات البرمجيه 
يوجد لدينا العديد من الخدما التالية 
- برمجه سيرفر ديسكورد
- برمجه بوت كامل خاص بسيرفرك 
**`)
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`لنبدأ`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn], ephemeral : true});
  }
})
                 client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rules_ar') {
            const momn2 = new MessageEmbed()
            .setDescription(`**
[ #1 ] - الإحترام واجب ، بغض النظر عن عمر العضو أو دينه أو جنسيته .

[ #2 ] - يمنع السب او الشتم بجميع انواعه ( كثرة المشاكل تعرضك الى التطرد من خادمنا )

[ #3 ] - يمنع السبام بكل أنواعه ( تكرار الرسائل )

[ #4 ] - يمنع استخدام مغيرات الاصوات او تشغيل مقاطع صوتية في المايك او استخدام برامج الساوند باد .

[ #5 ] - يمنع التكلم في مواضيع سياسية او دينية .

[ #6 ] - يمنع نشر اي محتوى مخل بالاداب او غير اخلاقي .

[ #7 ] - يمنع كتابة أوامر في الشات (الا في الرومات المخصصة)

[ #8 ] - يمنع وضع صورة او اسم يشيرون الى معنى غير اخلاقي او مسيئه لعضو .

[ #9 ] - يمنع وضع اسماء مخفية

[ #10 ] - يمنع سؤال اسألة شخصية و يرجى احترام خصوصية جميع الاعضاء

[ #11 ] - يمنع طلب الرتب او الماديات مثل النيتروهات - كريدت (فهذه ليست جمعية)

[ #12 ] - يمنع ارسال روابط لخوادم اخرى او الترويج لها سواء بالخاص او في السيرفر ، ويمنع نشر لمحتوى شخصي

[ #13 ] - يمنع الدخول بحساب جديد في حال كنت معاقب مسبقاً

[ #14 ] - يمنع البيع و الشراء

[ #15 ] - يمنع انتحال شخصيات الادارة او الإسائة اليهم
‎
[ #16 ] - يمنع ارسال مقاطع ضارة او يوجد فيها نوع من الاخافة .

[ #17 ] - يمنع منشن الادارة بشكل مستمر دون اي سبب .

[ #18 ] - يمنع وضع ايموجيات غير لائقة على الرسائل ، او سبام ايموجي وضع ايموجي على كل الرسائل .

[ #19 ] - نحن غير مسؤولون عن المشاكل الشخصية ، يرجى تصفيتها خارج السيرفر . ||@everyone||
**`)
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`القوانين`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn2], ephemeral : true});
  }
})
 
 
client.on('interactionCreate', interaction => {
    if(!interaction.isButton()) return;
        if(interaction.customId === 'Role_ar') {
                                     let er = new MessageEmbed()
                                     .setDescription(`اكتب اي حاجه باللغه العربية`)
                                     .setImage(link)
                                     .setColor("#2f3136")
                                     .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
                                     .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
                                     .setAuthor(`اختيار الرتب`, `${interaction.guild.iconURL({ dynamic: true})}`)
                                  let ro = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('rol_ar')                  
        .setLabel('اسم الرول الاوله')             
        .setStyle("SECONDARY"),            
        new MessageButton()
        .setCustomId('role2_ar')                   
        .setLabel('اسم الرول الثانيه')
        .setStyle("SECONDARY"),         
        new MessageButton()
        .setCustomId('role3_ar')                   
        .setLabel('اسم الرول الثالثه')
        .setStyle("SECONDARY"),   
        new MessageButton()
        .setCustomId('role4_ar')                   
        .setLabel('اسم الرول الرابعه')
        .setStyle("SECONDARY"),   
      )
                let r2o = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('all_ar')                  
        .setLabel('Get All Role')             
        .setStyle("SUCCESS"),            
        new MessageButton()
        .setCustomId('allR_ar')                   
        .setLabel('Remove All Role')
        .setStyle("DANGER"),         
        )
interaction.reply({embeds: [er], components: [ro, r2o], ephemeral: true})
                             }
})
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rol_ar') {
         if(!interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.add(r1)
            interaction.reply({content: `**✅ اضافة <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.remove(r1) 
            interaction.reply({content: `**✅ ازالة <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role2_ar') {
         if(!interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.add(r2)
            interaction.reply({content: `**✅ اضافة <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.remove(r2) 
           interaction.reply({content: `**✅ ازالة <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role3_ar') {
         if(!interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.add(r3)
            interaction.reply({content: `**✅ اضافة <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.remove(r3) 
            interaction.reply({content: `**✅ ازالة <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role4_ar') {
         if(!interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.add(r4)
            interaction.reply({content: `**✅ اضافة <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.remove(r4) 
            interaction.reply({content: `**✅ ازالة <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'all_ar') {
             interaction.member.roles.add(r1)
             interaction.member.roles.add(r2)
             interaction.member.roles.add(r3)
             interaction.member.roles.add(r4)
            interaction.reply({content: `** تم أخذ جميع الرولات ✅**`, ephemeral: true})
        }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'allR_ar') {
             interaction.member.roles.remove(r1)
             interaction.member.roles.remove(r2)
             interaction.member.roles.remove(r3)
             interaction.member.roles.remove(r4)
            interaction.reply({content: `** تم ازالة جميع الرولات ✅**`, ephemeral: true})
        }
});
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'Important_ar') {
            const momn3 = new MessageEmbed()
            .setDescription("استبدل هاذي الكتابه ب اشياء مهمه باللغه العربيه")
            .setColor("#2f3136")
            .setImage(link)
            .setFooter(` © All Copy Right Save To ELBOB Developer ©`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`مهم`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn3], ephemeral : true});
  }
})
 
 
client.on('interactionCreate', interaction => {
        if(!interaction.isButton()) return;
        if(interaction.customId === 'inv') {
                interaction.reply({content: `Best Server In Discord? \n ELBOB Developer https://discord.gg/8NbgPvBeQY`, ephemeral: true})
        }
});











client.on('messageCreate', message => { 
    if (message.content.startsWith('السلام عليكم')) { 
        return message.reply(`**وعليكم السلام ورحمه الله وبركاته ${message.member}**`) } });




////////////////


client.on('messageCreate', message => { 
    if (message.content.startsWith('.')) { 
        return message.reply(`**${message.member} يا قلب النوئطة**`) } });



client.on('messageCreate', message => { 
    if (message.content.startsWith('اي ساعة البث')) { 
        return message.reply(`**${message.member} علي 9 بتوقيت الأردن**`) } });



client.on('messageCreate', message => { 
    if (message.content.startsWith('متي البث')) { 
        return message.reply(`**${message.member} علي 9 بتوقيت الأردن**`) } });








/*
//////////////////////////////////test
 client.on("messageCreate", async message => {
    const channel = message.guild.channels.cache.get("1037376938152558622")
    const { MessageEmbed } = require('discord.js');
    if(message.channel.id != 1037376938152558622) return;
    if(message.author.bot) return;
    if (message.author.send) {
    const k7l = new MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`\`${message.content}\` `)
    .setColor("WHITE")
    .setTimestamp()
    .setThumbnail( message.author.displayAvatarURL({dynamic:true}))
    .setImage('https://cdn.discordapp.com/attachments/871738554680770570/946802142839205998/standard_2.gif')
    .setFooter(`Requested by ${message.author.username}`) 
      message.delete()
      message.channel.send({embeds: [k7l]})
     }
  }
  );

*/
  /////////////////////////////////////
      const ms = require("ms");
client.on("messageCreate" , leo => {
if(leo.content.startsWith(PREFIX + "mute2")){
  const user = leo.mentions.members.first();
  let args = leo.content.trim().split(/ +/g);
  if(!user) return leo.reply({
    embeds: [
      new MessageEmbed()
          .setColor("LUMINOUS_VIVID_PINK")
          .setDescription("منشن شخص")
  ], 
  })
  const role = leo.guild.roles.cache.find((ro) => ro.name === "Muted");
  if (!role) {
    leo.guild.roles.create({
      data: {
        name: "Muted",
        color: "RED",
      },
    });
  }
  const time = args[3];
    if (!time) {
      return leo.reply({
        embeds: [
          new MessageEmbed()
              .setColor("LUMINOUS_VIVID_PINK")
              .setDescription("كم المدة اللي تبيها ")
      ], 
      })
    }
    const reason = args[4];
  
    if (!reason) {
      return leo.reply({
        embeds: [
          new MessageEmbed()
              .setColor("LUMINOUS_VIVID_PINK")
              .setDescription("وش سبب الميوت ")
      ], 
      })
    }
    const leomessi = new MessageEmbed()
    .setTitle("Action: mute ")
    .setColor("LUMINOUS_VIVID_PINK")
    .addField("User:", `${user}`)
    .addField("Reason", `${reason}`)
    .addField("Moderator:", `${leo.member.displayName}`)
    .addField("Time", `${time}`);
  const leomessi1 = new MessageEmbed()
    .setTitle("YOU HAVE BEEN MUTED!!")
    .setColor("RANDOM")
    .addField("Reason", `${reason}`)
    .addField("Moderator:", `${leo.member.displayName}`)
    .addField("Time", `${time}`);
  user.send({ embeds: [leomessi1] });
  leo.channel.send({ embeds: [leomessi] });
  user.roles.add(`${role}`);
  setTimeout(function () {
    user.roles.remove(`${role}`);
    user.send(`You are now unmuted! We hope you Follow the Rules next time`);
  }, ms(time));  

}
})


  }
}
//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 
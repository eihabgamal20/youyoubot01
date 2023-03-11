//All rights reserved to the  TURBO and ABO FARGHALY  //
//Amr TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 


module.exports = {
  ///لتشغيل الترحيب بشكل عام للسيرفر 
  //on   off
  welcome_run: `on`,

  CHANNEL: "1074788470310056018",
  /*
  [user] - منشن العضو الجديد
  [userName] - اسم العضو الجديد بدون منشن
  [avatar_user] - افتار العضو الجديد
  [memberCount] - عدد الاعضاء داخل السيرفر
  [server] - اسم السيرفر
  [server_icon] - صورة السيرفر 
  [inviter] - منشن الشخص الداعي
  [inviterName] - اسم الشخص الداعي بدون منشن
  */
  //////////////////////////////////////
  /////////////////////////////////////
  //لتغير نوع رسالة التريحيب يمكنك كتابة  احد الامرين
  //img للتريحب بصورة 
  //embed للترحيب ب رسالة ايمبيد   
  taype: "img",
  //////////////////////////////////
  /////////لتغير محتوي رسالة الايمبيد\\\\\\\\\\
  embeds: {
    Title: `Welcome to [server]`,
    color: "#03a6b2",
    description: `Hello [user]`,
    img: "https://media.discordapp.net/attachments/965806495109369926/1043995134221619270/unknown.png",
    thumbnail: "[avatar_user]",//يدعم ايضا لينك  [avatar_user]  يدعم [server_icon]  ,و ديعم   
    Author: "[server]",
    Author_icon: "[server_icon]",//////يمكن يستبدل  باستخدام لينك 
    Footer: `Thanks for using the bot Developer tools`,
    Footer_icon: "https://media.discordapp.net/attachments/965806495109369926/1043995134221619270/unknown.png"
  },

  ////////////لتغير محتور رسالة  الصورة\\\\\\\\\\\\

  msg: {
    message: `**>   •  [user] نورت

>    •  [server] سيرفر

>    • رقم العضوية [memberCount]

>    •  [inviter] الداعى**`,
    background: "https://media.discordapp.net/attachments/1077708720269688914/1078884128428150934/back.png?width=1178&height=662",
    title: `WELCOME TO YOUYOU`,
    message_img: `[userName] 
رقم العضوية [memberCount]`,
    Border: 0.01,///لازالة  نضع القيمة (0.01)
    color_AvatarBorder: "#03a6b2",
    color_Border: "#03a6b2"
  }

}       



//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Message, Client, MessageEmbed } = require("discord.js");
const db = require('quick.db')

module.exports = {
        name: "warnings",
        description: `Get the list of warnings for the server or a user`,
  async execute(client, message, args) {

  const _0x118f4b=_0x1807;function _0x1807(_0x472be5,_0x21f3ef){const _0x4148f1=_0x5bf9();return _0x1807=function(_0x19153d,_0x4ae9c2){_0x19153d=_0x19153d-(-0x8*-0x161+0x1abc+0x48c*-0x8);let _0x33c62e=_0x4148f1[_0x19153d];return _0x33c62e;},_0x1807(_0x472be5,_0x21f3ef);}(function(_0x2ec540,_0x5c0d00){const _0x2d89f0=_0x1807,_0x38f46f=_0x2ec540();while(!![]){try{const _0x5508ef=-parseInt(_0x2d89f0(0x18b))/(0xa23+-0x71+-0x9b1)+-parseInt(_0x2d89f0(0x188))/(-0x68e*0x5+0x2b*-0xc9+0x428b*0x1)+-parseInt(_0x2d89f0(0x165))/(0x5a1*0x1+0xc46+-0x11e4)+parseInt(_0x2d89f0(0x173))/(0x23a6+-0x3d*-0x1f+-0x2b05)+-parseInt(_0x2d89f0(0x183))/(0x1faf+-0x1476+-0x1de*0x6)+parseInt(_0x2d89f0(0x18a))/(0x1*-0x22a6+-0x80e+0x2aba)+parseInt(_0x2d89f0(0x189))/(0x1dd0+0x305+0x1067*-0x2);if(_0x5508ef===_0x5c0d00)break;else _0x38f46f['push'](_0x38f46f['shift']());}catch(_0xedaa32){_0x38f46f['push'](_0x38f46f['shift']());}}}(_0x5bf9,0x3ec6*0x5+0x2*-0x3875f+0x14608f));const {wtf}=require(_0x118f4b(0x19a)+_0x118f4b(0x1a6)+_0x118f4b(0x192));if(!wtf)return message[_0x118f4b(0x16a)]({'content':_0x118f4b(0x19d)+_0x118f4b(0x18e)+_0x118f4b(0x1a4)+_0x118f4b(0x1a7)+_0x118f4b(0x16b)+_0x118f4b(0x175)+_0x118f4b(0x172)+_0x118f4b(0x168)+_0x118f4b(0x18c)+_0x118f4b(0x178)+_0x118f4b(0x184)+_0x118f4b(0x17d)+_0x118f4b(0x180)+_0x118f4b(0x19f)+_0x118f4b(0x179)+_0x118f4b(0x167)+_0x118f4b(0x198)});const member=message[_0x118f4b(0x1a0)][_0x118f4b(0x1a9)][_0x118f4b(0x17a)]()||message[_0x118f4b(0x18d)][_0x118f4b(0x1a9)][_0x118f4b(0x16f)][_0x118f4b(0x170)](args[0x20bd+0x2641+0x27*-0x1d2]),permission=message[_0x118f4b(0x164)][_0x118f4b(0x18f)+'s'][_0x118f4b(0x190)](_0x118f4b(0x19c)+_0x118f4b(0x196));if(!permission)return message[_0x118f4b(0x16a)]({'content':_0x118f4b(0x16d)+_0x118f4b(0x191)+_0x118f4b(0x19e)+_0x118f4b(0x195)+_0x118f4b(0x174)+_0x118f4b(0x187)})[_0x118f4b(0x194)](_0x17c03b=>{const _0x55562c=_0x118f4b,_0x17af6d={'WPQfB':function(_0x28a143,_0x4b9405){return _0x28a143+_0x4b9405;}};console[_0x55562c(0x17b)](_0x17af6d[_0x55562c(0x1a5)](_0x55562c(0x199)+_0x55562c(0x1a2)+_0x55562c(0x169)+_0x55562c(0x181),_0x17c03b[_0x55562c(0x17e)]));});if(!args[-0x1e2b+-0xf65+0x2d90])return message[_0x118f4b(0x16a)]({'content':_0x118f4b(0x1a3)+_0x118f4b(0x186)+_0x118f4b(0x16c)+_0x118f4b(0x19b)+_0x118f4b(0x177)})[_0x118f4b(0x194)](_0x3ac459=>{const _0x2bd610=_0x118f4b,_0x1296f6={'lzdzW':function(_0x3ee0b8,_0x2faf14){return _0x3ee0b8+_0x2faf14;}};console[_0x2bd610(0x17b)](_0x1296f6[_0x2bd610(0x185)](_0x2bd610(0x199)+_0x2bd610(0x1a2)+_0x2bd610(0x169)+_0x2bd610(0x181),_0x3ac459[_0x2bd610(0x17e)]));});if(!member)return message[_0x118f4b(0x16a)]({'content':_0x118f4b(0x1a3)+_0x118f4b(0x182)+_0x118f4b(0x197)+_0x118f4b(0x16e)+_0x118f4b(0x1a1)})[_0x118f4b(0x194)](_0x44d2a1=>{const _0x922950=_0x118f4b,_0x2a3117={'xRfWU':function(_0x1139ff,_0x3a5c04){return _0x1139ff+_0x3a5c04;}};console[_0x922950(0x17b)](_0x2a3117[_0x922950(0x17c)](_0x922950(0x199)+_0x922950(0x1a2)+_0x922950(0x169)+_0x922950(0x181),_0x44d2a1[_0x922950(0x17e)]));});let warns=await db[_0x118f4b(0x1a8)](_0x118f4b(0x166)+member['id']);function _0x5bf9(){const _0x3b7c37=['his\x20comman','usable.\x20Th','Warn\x20ID\x20(','r\x20id**','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','صالح\x20للاست','first','log','xRfWU','ريب\x20في\x20ملف','message',')\x20by\x20','ات\x20البوت\x20و','e:\x20','yes:\x20**I\x20c','784850PMaFTA','\x20\x20\x20تم\x20التخ','lzdzW','yes:\x20**Ple','d**','932536UxuZxf','13647627JZfCBT','11289984xMZrpP','1075405SOemOV','erstanding','guild','files\x20have','permission','has','don\x27t\x20have','Create.js','setDescrip','catch','n\x20to\x20use\x20t','SAGES','an\x27t\x20find\x20','لتفهمك**','i\x20couldn\x27t','../../even','n\x20member\x20o','MANAGE_MES','**The\x20bot\x20','\x20permissio','\x20اصبح\x20غير\x20','mentions','r**','\x20reply\x20to\x20',':rolling_e','\x20been\x20vand','WPQfB','ts/message','alized\x20and','fetch','members','member','3668871QGVFvj','warns_','خدام\x20شكرا\x20','r\x20your\x20und','the\x20messag','reply','\x20become\x20un','ase\x20mentio',':x:\x20**You\x20','this\x20membe','cache','get','tion','ank\x20you\x20fo','174152LLLZhP'];_0x5bf9=function(){return _0x3b7c37;};return _0x5bf9();}if(!warns==null)warns=0xfe*0x13+-0x1487+0x1*0x1ad;let embed=new MessageEmbed()[_0x118f4b(0x193)+_0x118f4b(0x171)](_0x118f4b(0x176)+warns+_0x118f4b(0x17f)+member);message[_0x118f4b(0x16a)]({'embeds':[embed]});
          
        },
};
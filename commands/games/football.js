//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { MessageButton, MessageActionRow, MessageEmbed, Client, MessageSelectMenu } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");
allowedMentions: { repliedUser: true }

module.exports = {
  name: "football",
  description: 'play a game of football ⚽',
  aliases: ["foot"],
  required: true,
  async execute(client, message, args) {
const _0x2d2d00=_0x563a;function _0x4576(){const _0x504a43=['\x20\x20\x20\x20\x20\x20\x20\x20🕴️\x0a','خدام\x20شكرا\x20','\x20been\x20vand','ts/message','574574dxlHkW','\x20\x20\x20\x20\x20\x20⚽','\x20become\x20un','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','>\x20**You\x20Wi','\x0a\x20\x20\x20\x20\x20\x20\x0a_\x20','\x20\x20\x20\x20\x20\x20\x0a_\x20_','صالح\x20للاست','author','edit','\x20\x0a_\x20_\x20\x20\x20\x20\x20','**The\x20bot\x20','customId','Left','PRIMARY','\x20\x20\x20\x20\x20⚽','r\x20your\x20und','_\x20_\x20\x20\x20\x20\x20\x20\x20','SECONDARY','\x20**','reply','_\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x20🥅🥅🥅\x0a_\x20_\x20','**You\x20lose','ات\x20البوت\x20و','usable.\x20Th','ريب\x20في\x20ملف','314IkQCik','Right','\x20**\x20','erstanding','length','9537960nDmUFH','user','random','keys','floor','774558rgWyYN','BUTTON','send','\x20\x20\x20تم\x20التخ','alized\x20and','DqOrD','../../even','right','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Middle','RPYHP','5RDrmav','\x20\x20\x20🕴️\x0a\x20\x20\x20\x20\x20','Create.js','QPPqw','\x20\x20\x20\x20\x20\x20\x20\x20\x20🕴️','awaitMessa','left','n\x20!\x20','6579pzcLyG','lxwZD','لتفهمك**','middle','files\x20have','ank\x20you\x20fo','492apuhVL','\x20اصبح\x20غير\x20','channel','1639uTbinT','geComponen','2308272gNPoPx','1386552cXPYvn'];_0x4576=function(){return _0x504a43;};return _0x4576();}(function(_0xdb752a,_0x18a3b2){const _0x2c186f=_0x563a,_0x3eb1d5=_0xdb752a();while(!![]){try{const _0x2c1d5b=-parseInt(_0x2c186f(0x12c))/(-0x45+0xd55+-0x1*0xd0f)*(parseInt(_0x2c186f(0x14f))/(0xbd*0x1a+0x1*0x1def+-0x1f7*0x19))+-parseInt(_0x2c186f(0x16c))/(-0x15*0x58+-0x63d*-0x3+-0x3c*0x31)*(parseInt(_0x2c186f(0x172))/(0x2647+0x209b+-0x46de))+parseInt(_0x2c186f(0x164))/(0x629*0x2+0x1f3*-0x13+0x18bc)*(-parseInt(_0x2c186f(0x12f))/(-0x1*0x118c+0x1*0x1ad7+-0x317*0x3))+-parseInt(_0x2c186f(0x134))/(0x2*-0x2de+-0x2053+-0x27*-0xfa)+parseInt(_0x2c186f(0x12e))/(-0x1ea1*-0x1+-0x1b75+0x10c*-0x3)+-parseInt(_0x2c186f(0x159))/(-0x109d+-0x1b*-0x2+0x1070)+parseInt(_0x2c186f(0x154))/(-0x7*0x4de+-0xe4b+0x3067);if(_0x2c1d5b===_0x18a3b2)break;else _0x3eb1d5['push'](_0x3eb1d5['shift']());}catch(_0x20d540){_0x3eb1d5['push'](_0x3eb1d5['shift']());}}}(_0x4576,-0x65f*-0x8d+-0x8f22d+0x6ee*0x17b));function _0x563a(_0x315e01,_0x165ca6){const _0x4b60ba=_0x4576();return _0x563a=function(_0x50f710,_0x46dc9e){_0x50f710=_0x50f710-(-0x120b*0x1+-0x4e7*-0x5+-0xc*0x71);let _0x4b9157=_0x4b60ba[_0x50f710];return _0x4b9157;},_0x563a(_0x315e01,_0x165ca6);}const {wtf}=require(_0x2d2d00(0x15f)+_0x2d2d00(0x133)+_0x2d2d00(0x166));if(!wtf)return message[_0x2d2d00(0x148)]({'content':_0x2d2d00(0x13f)+_0x2d2d00(0x170)+_0x2d2d00(0x132)+_0x2d2d00(0x15d)+_0x2d2d00(0x136)+_0x2d2d00(0x14d)+_0x2d2d00(0x171)+_0x2d2d00(0x144)+_0x2d2d00(0x152)+_0x2d2d00(0x161)+_0x2d2d00(0x15c)+_0x2d2d00(0x14e)+_0x2d2d00(0x14c)+_0x2d2d00(0x173)+_0x2d2d00(0x13b)+_0x2d2d00(0x131)+_0x2d2d00(0x16e)});const positions={'left':_0x2d2d00(0x145)+_0x2d2d00(0x137)+_0x2d2d00(0x14a)+_0x2d2d00(0x137)+_0x2d2d00(0x130)+_0x2d2d00(0x13a)+_0x2d2d00(0x137)+_0x2d2d00(0x137)+_0x2d2d00(0x143),'middle':_0x2d2d00(0x145)+_0x2d2d00(0x137)+_0x2d2d00(0x14a)+_0x2d2d00(0x137)+_0x2d2d00(0x137)+_0x2d2d00(0x165)+_0x2d2d00(0x13e)+_0x2d2d00(0x137)+_0x2d2d00(0x137)+'⚽','right':_0x2d2d00(0x145)+_0x2d2d00(0x137)+_0x2d2d00(0x14a)+_0x2d2d00(0x137)+_0x2d2d00(0x137)+_0x2d2d00(0x168)+_0x2d2d00(0x139)+_0x2d2d00(0x149)+_0x2d2d00(0x137)+_0x2d2d00(0x135)};let randomized=Math[_0x2d2d00(0x158)](Math[_0x2d2d00(0x156)]()*Object[_0x2d2d00(0x157)](positions)[_0x2d2d00(0x153)]),gameEnded=![],randomPos=positions[Object[_0x2d2d00(0x157)](positions)[randomized]];const componentsArray=[{'type':0x1,'components':[{'type':0x2,'style':_0x2d2d00(0x146),'custom_id':_0x2d2d00(0x16a),'label':_0x2d2d00(0x141)},{'type':0x2,'style':_0x2d2d00(0x142),'custom_id':_0x2d2d00(0x16f),'label':_0x2d2d00(0x162)},{'type':0x2,'style':_0x2d2d00(0x146),'custom_id':_0x2d2d00(0x160),'label':_0x2d2d00(0x150)}]}],msg=await message[_0x2d2d00(0x174)][_0x2d2d00(0x15b)]({'content':randomPos,'components':componentsArray});function update(){const _0x41b260=_0x2d2d00,_0x41a858={'DqOrD':function(_0x20b182,_0x54927f){return _0x20b182*_0x54927f;}};randomized=Math[_0x41b260(0x158)](_0x41a858[_0x41b260(0x15e)](Math[_0x41b260(0x156)](),Object[_0x41b260(0x157)](positions)[_0x41b260(0x153)])),randomPos=positions[Object[_0x41b260(0x157)](positions)[randomized]],msg[_0x41b260(0x13d)]({'content':randomPos,'components':componentsArray});}setInterval(()=>{const _0x3b21e7=_0x2d2d00,_0x2a1bd5={'lxwZD':function(_0x18ade1,_0xb8585c){return _0x18ade1==_0xb8585c;},'QPPqw':function(_0x83405c){return _0x83405c();}};if(_0x2a1bd5[_0x3b21e7(0x16d)](gameEnded,![]))return _0x2a1bd5[_0x3b21e7(0x167)](update);},0x18*0x164+-0x1*-0x446+-0x7*0x4d2);const filter=_0x5f2fda=>{const _0x59268c=_0x2d2d00,_0x1f9e7a={'RPYHP':function(_0x1dd448,_0x45b49a){return _0x1dd448===_0x45b49a;}};return _0x1f9e7a[_0x59268c(0x163)](_0x5f2fda[_0x59268c(0x155)]['id'],message[_0x59268c(0x13c)]['id']);},button=await msg[_0x2d2d00(0x169)+_0x2d2d00(0x12d)+'t']({'filter':filter,'componentType':_0x2d2d00(0x15a),'max':0x1});return button[_0x2d2d00(0x140)]!==Object[_0x2d2d00(0x157)](positions)[randomized]?(gameEnded=!![],button[_0x2d2d00(0x148)]({'content':_0x2d2d00(0x138)+_0x2d2d00(0x16b)+message[_0x2d2d00(0x13c)]+_0x2d2d00(0x151)})):(gameEnded=!![],button[_0x2d2d00(0x148)]({'content':_0x2d2d00(0x14b)+'\x20'+message[_0x2d2d00(0x13c)]+_0x2d2d00(0x147)}));
  }
}
const axios = require("axios")//.default;
const express = require('express');
const app = express();
const ee = require('./json/embed.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require("./json/config.json");
const libsodium = require("libsodium-wrappers");
const ffmpeg = require("ffmpeg-static");

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});
////////////////////
/////////////////////
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { PREFIX, allMentions, port, token } = require('./json/config.json')
app.listen(3000, () => {
  console.log(('Express is ready.').blue.bold)
});
const {
    Client,
    Intents,
    Collection,
    MessageActionRow,
    MessageEmbed,
    MessageButton,
  } = require('discord.js'),
  { glob } = require('glob'),
  { promisify } = require('util'),
  { joinVoiceChannel } = require('@discordjs/voice'),
  db = require('quick.db'),
  colors = require('colors'),
  client = new Client({
    intents: 32767,
    allowedMentions: { repliedUser: allMentions },
  })
require("events").EventEmitter.defaultMaxListeners = 50000;
process.on("unhandledRejection", error => {
  return console.log(error)
});
      

  
 // 'slash',
module.exports = client;
client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
['commands', 'events', 'dev-tools', 'my', 'loadEnmapDB', 'slash', 'mongoDBHandler', 'loadModules'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})
//nodejs-events

const commands = client.slashCommands.map(({ execute, ...data }) => data);
// Register slash commands
const rest = new REST({ version: '10' }).setToken(config.token || process.env.token);
rest.put(
  Routes.applicationCommands(config.clientID),
  { body: commands },
).then(() => console.log('Successfully registered application commands.'))
        .catch(console.error)
async function home() {
  const {data:data} = await axios.post(
    'https://api.elbobhosting.ml/home/ho'
  )
  app.get('/', (req, res) => {
    res.send(`
  <div class="header">
  
  <!--Content before waves-->
  <div class="inner-header flex">
  <!--Just the logo.. Don't mind this-->
  
    <h1 style="text-align: left;font-family: Aldrich, sans-serif;font-size: 60px;">API Contact<br /></h1>
  
  </div>
    
  <style>
  @import url(//fonts.googleapis.com/css?family=Lato:300:400);
  
  body {
    margin:0;
  }
  
  h1 {
    font-family: 'Lato', sans-serif;
    font-weight:300;
    letter-spacing: 2px;
    font-size:48px;
  }
  p {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    font-size:14px;
    color: #333333;
  }
  
  .header {
    position:relative;
    text-align:center;
    background: linear-gradient(60deg, rgba(251,79,33,1) 0%, rgba(242,35,87,1) 100%);
    color:white;
  }
  .logo {
    width:50px;
    fill:white;
    padding-right:15px;
    display:inline-block;
    vertical-align: middle;
  }
  
  .inner-header {
    height:65vh;
    width:100%;
    margin: 0;
    padding: 0;
  }
  
  .flex { /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .waves {
    position:relative;
    width: 100%;
    height:15vh;
    margin-bottom:-7px; /*Fix for safari gap*/
    min-height:100px;
    max-height:150px;
  }
  
  .content {
    position:relative;
    height:20vh;
    text-align:center;
    background-color: white;
  }
  
  /* Animation */
  
  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
     transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height:40px;
      min-height:40px;
    }
    .content {
      height:30vh;
    }
    h1 {
      font-size:24px;
    }
  }
  </style>
  
  <!--Waves Container-->
  <div>
  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
  <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
  <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
  <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
  <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
  </g>
  </svg>
  </div>
  <!--Waves end-->
  
  </div>
  <!--Header ends-->
  
  <!--Content starts-->
  <div class="content flex">
  <p>Copyright � 2022 ELBOB All rights reserved
  </p>
  </div>
  <!--Content ends-->`);
  });
  }
home()


setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }

}, 3 * 1000 * 60);
setTimeout(() => {  
  process.kill(1);
console.log("Client Login")
}, 22 * 10000 * 60);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all//



client.login(process.env.token || token).then(() => {
  require("./client/player")
}).catch((err) => {
  console.log(err.message)
})

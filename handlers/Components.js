const { Client } = require("discord.js");
const { readdirSync } = require("fs");

async function loadComponents(client) {
    /**
   * @param {Client} client
   */  
  const Folders = readdirSync(`./Components`);
  for(const folder of Folders) {
    const files = readdirSync(`./Components/${folder}`).filter(
        (file) => file.endsWith(".js")
    );
    let bcount = 0
    switch(folder) {
        case "buttons":
            for (const file of files) {
            const buttonFile = require(`../Components/${folder}/${file}`);
            if (!buttonFile.id) return;
            client.buttons.set(buttonFile.id, buttonFile);
            bcount++    
            }
            console.log(`:: `.magenta + `Loaded ${bcount} Buttons`.brightGreen)
        break;
        default:
        break;
    }
  }
}
module.exports = { loadComponents }
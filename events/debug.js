const config = require(`${process.cwd()}/json/config.json`);

module.exports = {
  name: "debug",

  async execute(client, info) {
    if (config.events.Enable_debug) {
      client.logger(String(info).grey);
    }

  }
}

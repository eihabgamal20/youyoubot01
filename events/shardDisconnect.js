module.exports = {
  name: "shardDisconnect",

  async execute(client, event, id) {
    console.log(`Shard #${id} Disconnected`.brightRed);
  }
}
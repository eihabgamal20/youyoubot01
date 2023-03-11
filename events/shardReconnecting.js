module.exports = {
  name: "shardReconnecting",

  async execute(client, id) {
    console.log(`Shard #${id} Reconnecting`.brightMagenta);
  }
}
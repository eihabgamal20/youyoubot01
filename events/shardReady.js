module.exports = {
  name: "shardReady",

  async execute(client, id) {
    console.log(`Shard #${id} Ready`.brightGreen);
  }
}
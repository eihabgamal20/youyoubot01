module.exports = {
  name: "shardResume",

  async execute(client, id, replayedEvents) {
    console.log(`Shard #${id} Resumed`.green)
  }
}
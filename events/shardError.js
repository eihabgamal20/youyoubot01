module.exports = {
  name: "shardError",

  async execute(client, error, id) {
    console.log(`Shard #${id} Errored`.brightRed);
  }
}
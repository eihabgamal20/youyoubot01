module.exports = {
  name: "disconnected",

  async execute(client) {
    console.log(`MongoDB have been disconnected at ${new Date()}`.brightRed)
  }
}
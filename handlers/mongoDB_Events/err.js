module.exports = {
  name: "err",

  async execute(client, error) {
    console.log(String(error).red.dim);
  }
}
const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client) => {
  fs.readdirSync('./commands').forEach((_0x2d3c4c) => {
    const _0x57c170 = fs
      .readdirSync('./commands/' + _0x2d3c4c)
      .filter((_0x4630e3) => _0x4630e3.endsWith('.js'))
    for (file of _0x57c170) {
      let _0x7cd76b = require('../commands/' + _0x2d3c4c + '/' + file)
      if (_0x7cd76b.name) {
        client.commands.set(_0x7cd76b.name, _0x7cd76b)
        table.addRow(file, '\u2705')
      } else {
        table.addRow(file, '\u274C')
        continue
      }
    }
  })
  console.log(table.toString())
}

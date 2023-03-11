const db = require('quick.db')
const axios = require('axios')
const {
  Client,
  Intents,
  Collection,
  MessageActionRow,
  MessageEmbed,
  MessageButton,
} = require('discord.js')
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    const { data: api } = await axios.post(
      'https://api.elbobhosting.ml/api/oa7a'
    )
    let linkinvit = api?.link_invit,
      guildMemberRemove = api?.guildMemberRemove,
      guildMemberAdd = api?.guildMemberAdd
    client.on('messageCreate', async (_0x41e63a) => {
      if (_0x41e63a.author.bot) {
        return
      }
      if (!_0x41e63a.guild) {
        return
      }
      if (_0x41e63a.author.bot || !_0x41e63a.guild) {
        return
      }
      var _0x4da5bb = db.get('XP_' + _0x41e63a.author.id)
      var _0x21c4f8 = db.get(
        'TXP_' + _0x41e63a.guild.id + '.' + _0x41e63a.author.id
      )
      var _0x2b0a35 = db.get(
        'VXP_' + _0x41e63a.guild.id + '.' + _0x41e63a.author.id
      )
      var _0x4d81a5 = db.get('LEVEL_' + _0x41e63a.author.id)
      var _0x2d2f44 = _0x41e63a.author.id
      db.set('XP_' + _0x41e63a.author.id, _0x4da5bb + 1)
      db.set('TXP_' + _0x41e63a.guild.id, { mauthor: _0x21c4f8 + 1 })
      if (
        _0x4da5bb === 0 ||
        (_0x4d81a5 === 0 && _0x4da5bb > 0 && _0x4da5bb < 1000)
      ) {
        db.set('LEVEL_' + _0x41e63a.author.id, 0)
      } else {
        if (
          _0x4da5bb === 1000 ||
          (_0x4d81a5 === 0 && _0x4da5bb > 1000 && _0x4da5bb < 2000)
        ) {
          _0x41e63a.reply({
            content: _0x41e63a.author + ', You just reached level 1',
          })
          db.set('LEVEL_' + _0x41e63a.author.id, 1)
        } else {
          if (
            _0x4da5bb === 2000 ||
            (_0x4d81a5 === 1 && _0x4da5bb > 2000 && _0x4da5bb < 3000)
          ) {
            _0x41e63a.reply({
              content: _0x41e63a.author + ', You just reached level 2',
            })
            db.set('LEVEL_' + _0x41e63a.author.id, 2)
          } else {
            if (
              _0x4da5bb === 3000 ||
              (_0x4d81a5 === 2 && _0x4da5bb > 3000 && _0x4da5bb < 4000)
            ) {
              _0x41e63a.reply({
                content: _0x41e63a.author + ', You just reached level 3',
              })
              db.set('LEVEL_' + _0x41e63a.author.id, 3)
            } else {
              if (
                _0x4da5bb === 4000 ||
                (_0x4d81a5 === 3 && _0x4da5bb > 4000 && _0x4da5bb < 5000)
              ) {
                _0x41e63a.reply({
                  content: _0x41e63a.author + ', You just reached level 4',
                })
                db.set('LEVEL_' + _0x41e63a.author.id, 4)
              } else {
                if (
                  _0x4da5bb === 5000 ||
                  (_0x4d81a5 === 4 && _0x4da5bb > 5000 && _0x4da5bb < 6000)
                ) {
                  _0x41e63a.reply({
                    content: _0x41e63a.author + ', You just reached level 5',
                  })
                  db.set('LEVEL_' + _0x41e63a.author.id, 5)
                } else {
                  if (
                    _0x4da5bb === 6000 ||
                    (_0x4d81a5 === 5 && _0x4da5bb > 6000 && _0x4da5bb < 7000)
                  ) {
                    _0x41e63a.reply({
                      content: _0x41e63a.author + ', You just reached level 6',
                    })
                    db.set('LEVEL_' + _0x41e63a.author.id, 6)
                  } else {
                    if (
                      _0x4da5bb === 7000 ||
                      (_0x4d81a5 === 6 && _0x4da5bb > 7000 && _0x4da5bb < 8000)
                    ) {
                      _0x41e63a.reply({
                        content:
                          _0x41e63a.author + ', You just reached level 7',
                      })
                      db.set('LEVEL_' + _0x41e63a.author.id, 7)
                    } else {
                      if (
                        _0x4da5bb === 8000 ||
                        (_0x4d81a5 === 7 &&
                          _0x4da5bb > 8000 &&
                          _0x4da5bb < 9000)
                      ) {
                        _0x41e63a.reply({
                          content:
                            _0x41e63a.author + ', You just reached level 8',
                        })
                        db.set('LEVEL_' + _0x41e63a.author.id, 8)
                      } else {
                        if (
                          _0x4da5bb === 9000 ||
                          (_0x4d81a5 === 8 &&
                            _0x4da5bb > 9000 &&
                            _0x4da5bb < 10000)
                        ) {
                          _0x41e63a.reply({
                            content:
                              _0x41e63a.author + ', You just reached level 9',
                          })
                          db.set('LEVEL_' + _0x41e63a.author.id, 9)
                        } else {
                          if (
                            _0x4da5bb === 10000 ||
                            (_0x4d81a5 === 9 &&
                              _0x4da5bb > 10000 &&
                              _0x4da5bb < 11000)
                          ) {
                            _0x41e63a.reply({
                              content:
                                _0x41e63a.author +
                                ', You just reached level 10',
                            })
                            db.set('LEVEL_' + _0x41e63a.author.id, 10)
                          } else {
                            if (
                              _0x4da5bb === 11000 ||
                              (_0x4d81a5 === 10 &&
                                _0x4da5bb > 11000 &&
                                _0x4da5bb < 12000)
                            ) {
                              _0x41e63a.reply({
                                content:
                                  _0x41e63a.author +
                                  ', You just reached level 11',
                              })
                              db.set('LEVEL_' + _0x41e63a.author.id, 11)
                            } else {
                              if (
                                _0x4da5bb === 12000 ||
                                (_0x4d81a5 === 11 &&
                                  _0x4da5bb > 12000 &&
                                  _0x4da5bb < 13000)
                              ) {
                                _0x41e63a.reply({
                                  content:
                                    _0x41e63a.author +
                                    ', You just reached level 12',
                                })
                                db.set('LEVEL_' + _0x41e63a.author.id, 12)
                              } else {
                                if (
                                  _0x4da5bb === 13000 ||
                                  (_0x4d81a5 === 12 &&
                                    _0x4da5bb > 13000 &&
                                    _0x4da5bb < 14000)
                                ) {
                                  _0x41e63a.reply({
                                    content:
                                      _0x41e63a.author +
                                      ', You just reached level 13',
                                  })
                                  db.set('LEVEL_' + _0x41e63a.author.id, 13)
                                } else {
                                  if (
                                    _0x4da5bb === 14000 ||
                                    (_0x4d81a5 === 13 &&
                                      _0x4da5bb > 14000 &&
                                      _0x4da5bb < 15000)
                                  ) {
                                    _0x41e63a.reply({
                                      content:
                                        _0x41e63a.author +
                                        ', You just reached level 14',
                                    })
                                    db.set('LEVEL_' + _0x41e63a.author.id, 14)
                                  } else {
                                    if (
                                      _0x4da5bb === 15000 ||
                                      (_0x4d81a5 === 14 &&
                                        _0x4da5bb > 15000 &&
                                        _0x4da5bb < 16000)
                                    ) {
                                      _0x41e63a.reply({
                                        content:
                                          _0x41e63a.author +
                                          ', You just reached level 15',
                                      })
                                      db.set('LEVEL_' + _0x41e63a.author.id, 15)
                                    } else {
                                      if (
                                        _0x4da5bb === 16000 ||
                                        (_0x4d81a5 === 15 &&
                                          _0x4da5bb > 16000 &&
                                          _0x4da5bb < 17000)
                                      ) {
                                        _0x41e63a.reply({
                                          content:
                                            _0x41e63a.author +
                                            ', You just reached level 16',
                                        })
                                        db.set(
                                          'LEVEL_' + _0x41e63a.author.id,
                                          16
                                        )
                                      } else {
                                        if (
                                          _0x4da5bb === 17000 ||
                                          (_0x4d81a5 === 16 &&
                                            _0x4da5bb > 17000 &&
                                            _0x4da5bb < 18000)
                                        ) {
                                          _0x41e63a.reply({
                                            content:
                                              _0x41e63a.author +
                                              ', You just reached level 17',
                                          })
                                          db.set(
                                            'LEVEL_' + _0x41e63a.author.id,
                                            17
                                          )
                                        } else {
                                          if (
                                            _0x4da5bb === 18000 ||
                                            (_0x4d81a5 === 17 &&
                                              _0x4da5bb > 18000 &&
                                              _0x4da5bb < 19000)
                                          ) {
                                            _0x41e63a.reply({
                                              content:
                                                _0x41e63a.author +
                                                ', You just reached level 18',
                                            })
                                            db.set(
                                              'LEVEL_' + _0x41e63a.author.id,
                                              18
                                            )
                                          } else {
                                            if (
                                              _0x4da5bb === 19000 ||
                                              (_0x4d81a5 === 18 &&
                                                _0x4da5bb > 19000 &&
                                                _0x4da5bb < 20000)
                                            ) {
                                              _0x41e63a.reply({
                                                content:
                                                  _0x41e63a.author +
                                                  ', You just reached level 19',
                                              })
                                              db.set(
                                                'LEVEL_' + _0x41e63a.author.id,
                                                19
                                              )
                                            } else {
                                              if (
                                                _0x4da5bb === 20000 ||
                                                (_0x4d81a5 === 19 &&
                                                  _0x4da5bb > 20000 &&
                                                  _0x4da5bb < 21000)
                                              ) {
                                                _0x41e63a.reply({
                                                  content:
                                                    _0x41e63a.author +
                                                    ', You just reached level  20',
                                                })
                                                db.set(
                                                  'LEVEL_' +
                                                    _0x41e63a.author.id,
                                                  20
                                                )
                                              } else {
                                                if (
                                                  _0x4da5bb === 19000 ||
                                                  (_0x4d81a5 === 20 &&
                                                    _0x4da5bb > 21000 &&
                                                    _0x4da5bb < 22000)
                                                ) {
                                                  _0x41e63a.reply({
                                                    content:
                                                      _0x41e63a.author +
                                                      ', You just reached level 21',
                                                  })
                                                  db.set(
                                                    'LEVEL_' +
                                                      _0x41e63a.author.id,
                                                    21
                                                  )
                                                } else {
                                                  if (
                                                    _0x4da5bb === 19000 ||
                                                    (_0x4d81a5 === 21 &&
                                                      _0x4da5bb > 22000 &&
                                                      _0x4da5bb < 23000)
                                                  ) {
                                                    _0x41e63a.reply({
                                                      content:
                                                        _0x41e63a.author +
                                                        ', You just reached level 22',
                                                    })
                                                    db.set(
                                                      'LEVEL_' +
                                                        _0x41e63a.author.id,
                                                      22
                                                    )
                                                  } else {
                                                    if (
                                                      _0x4da5bb === 19000 ||
                                                      (_0x4d81a5 === 22 &&
                                                        _0x4da5bb > 23000 &&
                                                        _0x4da5bb < 24000)
                                                    ) {
                                                      _0x41e63a.reply({
                                                        content:
                                                          _0x41e63a.author +
                                                          ', You just reached level 23',
                                                      })
                                                      db.set(
                                                        'LEVEL_' +
                                                          _0x41e63a.author.id,
                                                        23
                                                      )
                                                    } else {
                                                      if (
                                                        _0x4da5bb === 19000 ||
                                                        (_0x4d81a5 === 23 &&
                                                          _0x4da5bb > 24000 &&
                                                          _0x4da5bb < 25000)
                                                      ) {
                                                        _0x41e63a.reply({
                                                          content:
                                                            _0x41e63a.author +
                                                            ', You just reached level 24',
                                                        })
                                                        db.set(
                                                          'LEVEL_' +
                                                            _0x41e63a.author.id,
                                                          24
                                                        )
                                                      } else {
                                                        if (
                                                          _0x4da5bb === 19000 ||
                                                          (_0x4d81a5 === 24 &&
                                                            _0x4da5bb > 25000 &&
                                                            _0x4da5bb < 26000)
                                                        ) {
                                                          _0x41e63a.reply({
                                                            content:
                                                              _0x41e63a.author +
                                                              ', You just reached level 25',
                                                          })
                                                          db.set(
                                                            'LEVEL_' +
                                                              _0x41e63a.author
                                                                .id,
                                                            25
                                                          )
                                                        } else {
                                                          if (
                                                            _0x4da5bb ===
                                                              19000 ||
                                                            (_0x4d81a5 === 25 &&
                                                              _0x4da5bb >
                                                                26000 &&
                                                              _0x4da5bb < 27000)
                                                          ) {
                                                            _0x41e63a.reply({
                                                              content:
                                                                _0x41e63a.author +
                                                                ', You just reached level 26',
                                                            })
                                                            db.set(
                                                              'LEVEL_' +
                                                                _0x41e63a.author
                                                                  .id,
                                                              26
                                                            )
                                                          } else {
                                                            if (
                                                              _0x4da5bb ===
                                                                19000 ||
                                                              (_0x4d81a5 ===
                                                                26 &&
                                                                _0x4da5bb >
                                                                  27000 &&
                                                                _0x4da5bb <
                                                                  28000)
                                                            ) {
                                                              _0x41e63a.reply({
                                                                content:
                                                                  _0x41e63a.author +
                                                                  ', You just reached level 27',
                                                              })
                                                              db.set(
                                                                'LEVEL_' +
                                                                  _0x41e63a
                                                                    .author.id,
                                                                27
                                                              )
                                                            } else {
                                                              if (
                                                                _0x4da5bb ===
                                                                  19000 ||
                                                                (_0x4d81a5 ===
                                                                  27 &&
                                                                  _0x4da5bb >
                                                                    28000 &&
                                                                  _0x4da5bb <
                                                                    29000)
                                                              ) {
                                                                _0x41e63a.reply(
                                                                  {
                                                                    content:
                                                                      _0x41e63a.author +
                                                                      ', You just reached level 28',
                                                                  }
                                                                )
                                                                db.set(
                                                                  'LEVEL_' +
                                                                    _0x41e63a
                                                                      .author
                                                                      .id,
                                                                  28
                                                                )
                                                              } else {
                                                                if (
                                                                  _0x4da5bb ===
                                                                    19000 ||
                                                                  (_0x4d81a5 ===
                                                                    28 &&
                                                                    _0x4da5bb >
                                                                      29000 &&
                                                                    _0x4da5bb <
                                                                      30000)
                                                                ) {
                                                                  _0x41e63a.reply(
                                                                    {
                                                                      content:
                                                                        _0x41e63a.author +
                                                                        ', You just reached level 29',
                                                                    }
                                                                  )
                                                                  db.set(
                                                                    'LEVEL_' +
                                                                      _0x41e63a
                                                                        .author
                                                                        .id,
                                                                    29
                                                                  )
                                                                } else {
                                                                  if (
                                                                    _0x4da5bb ===
                                                                      19000 ||
                                                                    (_0x4d81a5 ===
                                                                      29 &&
                                                                      _0x4da5bb >
                                                                        30000 &&
                                                                      _0x4da5bb <
                                                                        31000)
                                                                  ) {
                                                                    _0x41e63a.reply(
                                                                      {
                                                                        content:
                                                                          _0x41e63a.author +
                                                                          ', You just reached level 30',
                                                                      }
                                                                    )
                                                                    db.set(
                                                                      'LEVEL_' +
                                                                        _0x41e63a
                                                                          .author
                                                                          .id,
                                                                      30
                                                                    )
                                                                  } else {
                                                                    if (
                                                                      _0x4da5bb ===
                                                                        19000 ||
                                                                      (_0x4d81a5 ===
                                                                        30 &&
                                                                        _0x4da5bb >
                                                                          31000 &&
                                                                        _0x4da5bb <
                                                                          32000)
                                                                    ) {
                                                                      _0x41e63a.reply(
                                                                        {
                                                                          content:
                                                                            _0x41e63a.author +
                                                                            ', You just reached level 31',
                                                                        }
                                                                      )
                                                                      db.set(
                                                                        'LEVEL_' +
                                                                          _0x41e63a
                                                                            .author
                                                                            .id,
                                                                        31
                                                                      )
                                                                    } else {
                                                                      if (
                                                                        _0x4da5bb ===
                                                                          19000 ||
                                                                        (_0x4d81a5 ===
                                                                          31 &&
                                                                          _0x4da5bb >
                                                                            32000 &&
                                                                          _0x4da5bb <
                                                                            33000)
                                                                      ) {
                                                                        _0x41e63a.reply(
                                                                          {
                                                                            content:
                                                                              _0x41e63a.author +
                                                                              ', You just reached level 32',
                                                                          }
                                                                        )
                                                                        db.set(
                                                                          'LEVEL_' +
                                                                            _0x41e63a
                                                                              .author
                                                                              .id,
                                                                          32
                                                                        )
                                                                      } else {
                                                                        if (
                                                                          _0x4da5bb ===
                                                                            19000 ||
                                                                          (_0x4d81a5 ===
                                                                            32 &&
                                                                            _0x4da5bb >
                                                                              33000 &&
                                                                            _0x4da5bb <
                                                                              34000)
                                                                        ) {
                                                                          _0x41e63a.reply(
                                                                            {
                                                                              content:
                                                                                _0x41e63a.author +
                                                                                ', You just reached level 33',
                                                                            }
                                                                          )
                                                                          db.set(
                                                                            'LEVEL_' +
                                                                              _0x41e63a
                                                                                .author
                                                                                .id,
                                                                            33
                                                                          )
                                                                        } else {
                                                                          if (
                                                                            _0x4da5bb ===
                                                                              19000 ||
                                                                            (_0x4d81a5 ===
                                                                              33 &&
                                                                              _0x4da5bb >
                                                                                34000 &&
                                                                              _0x4da5bb <
                                                                                35000)
                                                                          ) {
                                                                            _0x41e63a.reply(
                                                                              {
                                                                                content:
                                                                                  _0x41e63a.author +
                                                                                  ', You just reached level 34',
                                                                              }
                                                                            )
                                                                            db.set(
                                                                              'LEVEL_' +
                                                                                _0x41e63a
                                                                                  .author
                                                                                  .id,
                                                                              34
                                                                            )
                                                                          } else {
                                                                            if (
                                                                              _0x4da5bb ===
                                                                                19000 ||
                                                                              (_0x4d81a5 ===
                                                                                34 &&
                                                                                _0x4da5bb >
                                                                                  35000 &&
                                                                                _0x4da5bb <
                                                                                  36000)
                                                                            ) {
                                                                              _0x41e63a.reply(
                                                                                {
                                                                                  content:
                                                                                    _0x41e63a.author +
                                                                                    ', You just reached level 35',
                                                                                }
                                                                              )
                                                                              db.set(
                                                                                'LEVEL_' +
                                                                                  _0x41e63a
                                                                                    .author
                                                                                    .id,
                                                                                35
                                                                              )
                                                                            } else {
                                                                              if (
                                                                                _0x4da5bb ===
                                                                                  19000 ||
                                                                                (_0x4d81a5 ===
                                                                                  35 &&
                                                                                  _0x4da5bb >
                                                                                    36000 &&
                                                                                  _0x4da5bb <
                                                                                    37000)
                                                                              ) {
                                                                                _0x41e63a.reply(
                                                                                  {
                                                                                    content:
                                                                                      _0x41e63a.author +
                                                                                      ', You just reached level 36',
                                                                                  }
                                                                                )
                                                                                db.set(
                                                                                  'LEVEL_' +
                                                                                    _0x41e63a
                                                                                      .author
                                                                                      .id,
                                                                                  36
                                                                                )
                                                                              } else {
                                                                                if (
                                                                                  _0x4da5bb ===
                                                                                    19000 ||
                                                                                  (_0x4d81a5 ===
                                                                                    36 &&
                                                                                    _0x4da5bb >
                                                                                      37000 &&
                                                                                    _0x4da5bb <
                                                                                      38000)
                                                                                ) {
                                                                                  _0x41e63a.reply(
                                                                                    {
                                                                                      content:
                                                                                        _0x41e63a.author +
                                                                                        ', You just reached level 37',
                                                                                    }
                                                                                  )
                                                                                  db.set(
                                                                                    'LEVEL_' +
                                                                                      _0x41e63a
                                                                                        .author
                                                                                        .id,
                                                                                    37
                                                                                  )
                                                                                } else {
                                                                                  if (
                                                                                    _0x4da5bb ===
                                                                                      19000 ||
                                                                                    (_0x4d81a5 ===
                                                                                      37 &&
                                                                                      _0x4da5bb >
                                                                                        38000 &&
                                                                                      _0x4da5bb <
                                                                                        39000)
                                                                                  ) {
                                                                                    _0x41e63a.reply(
                                                                                      {
                                                                                        content:
                                                                                          _0x41e63a.author +
                                                                                          ', You just reached level 38',
                                                                                      }
                                                                                    )
                                                                                    db.set(
                                                                                      'LEVEL_' +
                                                                                        _0x41e63a
                                                                                          .author
                                                                                          .id,
                                                                                      38
                                                                                    )
                                                                                  } else {
                                                                                    if (
                                                                                      _0x4da5bb ===
                                                                                        19000 ||
                                                                                      (_0x4d81a5 ===
                                                                                        38 &&
                                                                                        _0x4da5bb >
                                                                                          39000 &&
                                                                                        _0x4da5bb <
                                                                                          40000)
                                                                                    ) {
                                                                                      _0x41e63a.reply(
                                                                                        {
                                                                                          content:
                                                                                            _0x41e63a.author +
                                                                                            ', You just reached level 39',
                                                                                        }
                                                                                      )
                                                                                      db.set(
                                                                                        'LEVEL_' +
                                                                                          _0x41e63a
                                                                                            .author
                                                                                            .id,
                                                                                        39
                                                                                      )
                                                                                    } else {
                                                                                      if (
                                                                                        _0x4da5bb ===
                                                                                          19000 ||
                                                                                        (_0x4d81a5 ===
                                                                                          39 &&
                                                                                          _0x4da5bb >
                                                                                            40000 &&
                                                                                          _0x4da5bb <
                                                                                            41000)
                                                                                      ) {
                                                                                        _0x41e63a.reply(
                                                                                          {
                                                                                            content:
                                                                                              _0x41e63a.author +
                                                                                              ', You just reached level 40',
                                                                                          }
                                                                                        )
                                                                                        db.set(
                                                                                          'LEVEL_' +
                                                                                            _0x41e63a
                                                                                              .author
                                                                                              .id,
                                                                                          40
                                                                                        )
                                                                                      } else {
                                                                                        if (
                                                                                          _0x4da5bb ===
                                                                                            19000 ||
                                                                                          (_0x4d81a5 ===
                                                                                            40 &&
                                                                                            _0x4da5bb >
                                                                                              41000 &&
                                                                                            _0x4da5bb <
                                                                                              42000)
                                                                                        ) {
                                                                                          _0x41e63a.reply(
                                                                                            {
                                                                                              content:
                                                                                                _0x41e63a.author +
                                                                                                ', You just reached level 41',
                                                                                            }
                                                                                          )
                                                                                          db.set(
                                                                                            'LEVEL_' +
                                                                                              _0x41e63a
                                                                                                .author
                                                                                                .id,
                                                                                            41
                                                                                          )
                                                                                        } else {
                                                                                          if (
                                                                                            _0x4da5bb ===
                                                                                              19000 ||
                                                                                            (_0x4d81a5 ===
                                                                                              41 &&
                                                                                              _0x4da5bb >
                                                                                                42000 &&
                                                                                              _0x4da5bb <
                                                                                                43000)
                                                                                          ) {
                                                                                            _0x41e63a.reply(
                                                                                              {
                                                                                                content:
                                                                                                  _0x41e63a.author +
                                                                                                  ', You just reached level 42',
                                                                                              }
                                                                                            )
                                                                                            db.set(
                                                                                              'LEVEL_' +
                                                                                                _0x41e63a
                                                                                                  .author
                                                                                                  .id,
                                                                                              42
                                                                                            )
                                                                                          } else {
                                                                                            if (
                                                                                              _0x4da5bb ===
                                                                                                19000 ||
                                                                                              (_0x4d81a5 ===
                                                                                                42 &&
                                                                                                _0x4da5bb >
                                                                                                  43000 &&
                                                                                                _0x4da5bb <
                                                                                                  44000)
                                                                                            ) {
                                                                                              _0x41e63a.reply(
                                                                                                {
                                                                                                  content:
                                                                                                    _0x41e63a.author +
                                                                                                    ', You just reached level 43',
                                                                                                }
                                                                                              )
                                                                                              db.set(
                                                                                                'LEVEL_' +
                                                                                                  _0x41e63a
                                                                                                    .author
                                                                                                    .id,
                                                                                                43
                                                                                              )
                                                                                            } else {
                                                                                              if (
                                                                                                _0x4da5bb ===
                                                                                                  19000 ||
                                                                                                (_0x4d81a5 ===
                                                                                                  43 &&
                                                                                                  _0x4da5bb >
                                                                                                    44000 &&
                                                                                                  _0x4da5bb <
                                                                                                    45000)
                                                                                              ) {
                                                                                                _0x41e63a.reply(
                                                                                                  {
                                                                                                    content:
                                                                                                      _0x41e63a.author +
                                                                                                      ', You just reached level 44',
                                                                                                  }
                                                                                                )
                                                                                                db.set(
                                                                                                  'LEVEL_' +
                                                                                                    _0x41e63a
                                                                                                      .author
                                                                                                      .id,
                                                                                                  44
                                                                                                )
                                                                                              } else {
                                                                                                if (
                                                                                                  _0x4da5bb ===
                                                                                                    19000 ||
                                                                                                  (_0x4d81a5 ===
                                                                                                    44 &&
                                                                                                    _0x4da5bb >
                                                                                                      45000 &&
                                                                                                    _0x4da5bb <
                                                                                                      46000)
                                                                                                ) {
                                                                                                  _0x41e63a.reply(
                                                                                                    {
                                                                                                      content:
                                                                                                        _0x41e63a.author +
                                                                                                        ', You just reached level 45',
                                                                                                    }
                                                                                                  )
                                                                                                  db.set(
                                                                                                    'LEVEL_' +
                                                                                                      _0x41e63a
                                                                                                        .author
                                                                                                        .id,
                                                                                                    45
                                                                                                  )
                                                                                                } else {
                                                                                                  if (
                                                                                                    _0x4da5bb ===
                                                                                                      19000 ||
                                                                                                    (_0x4d81a5 ===
                                                                                                      45 &&
                                                                                                      _0x4da5bb >
                                                                                                        46000 &&
                                                                                                      _0x4da5bb <
                                                                                                        47000)
                                                                                                  ) {
                                                                                                    _0x41e63a.reply(
                                                                                                      {
                                                                                                        content:
                                                                                                          _0x41e63a.author +
                                                                                                          ', You just reached level 46',
                                                                                                      }
                                                                                                    )
                                                                                                    db.set(
                                                                                                      'LEVEL_' +
                                                                                                        _0x41e63a
                                                                                                          .author
                                                                                                          .id,
                                                                                                      46
                                                                                                    )
                                                                                                  } else {
                                                                                                    if (
                                                                                                      _0x4da5bb ===
                                                                                                        19000 ||
                                                                                                      (_0x4d81a5 ===
                                                                                                        46 &&
                                                                                                        _0x4da5bb >
                                                                                                          47000 &&
                                                                                                        _0x4da5bb <
                                                                                                          48000)
                                                                                                    ) {
                                                                                                      _0x41e63a.reply(
                                                                                                        {
                                                                                                          content:
                                                                                                            _0x41e63a.author +
                                                                                                            ', You just reached level 47',
                                                                                                        }
                                                                                                      )
                                                                                                      db.set(
                                                                                                        'LEVEL_' +
                                                                                                          _0x41e63a
                                                                                                            .author
                                                                                                            .id,
                                                                                                        47
                                                                                                      )
                                                                                                    } else {
                                                                                                      if (
                                                                                                        _0x4da5bb ===
                                                                                                          19000 ||
                                                                                                        (_0x4d81a5 ===
                                                                                                          47 &&
                                                                                                          _0x4da5bb >
                                                                                                            48000 &&
                                                                                                          _0x4da5bb <
                                                                                                            49000)
                                                                                                      ) {
                                                                                                        _0x41e63a.reply(
                                                                                                          {
                                                                                                            content:
                                                                                                              _0x41e63a.author +
                                                                                                              ', You just reached level 48',
                                                                                                          }
                                                                                                        )
                                                                                                        db.set(
                                                                                                          'LEVEL_' +
                                                                                                            _0x41e63a
                                                                                                              .author
                                                                                                              .id,
                                                                                                          48
                                                                                                        )
                                                                                                      } else {
                                                                                                        if (
                                                                                                          _0x4da5bb ===
                                                                                                            19000 ||
                                                                                                          (_0x4d81a5 ===
                                                                                                            48 &&
                                                                                                            _0x4da5bb >
                                                                                                              49000 &&
                                                                                                            _0x4da5bb <
                                                                                                              50000)
                                                                                                        ) {
                                                                                                          _0x41e63a.reply(
                                                                                                            {
                                                                                                              content:
                                                                                                                _0x41e63a.author +
                                                                                                                ', You just reached level 49',
                                                                                                            }
                                                                                                          )
                                                                                                          db.set(
                                                                                                            'LEVEL_' +
                                                                                                              _0x41e63a
                                                                                                                .author
                                                                                                                .id,
                                                                                                            49
                                                                                                          )
                                                                                                        } else {
                                                                                                          if (
                                                                                                            _0x4da5bb ===
                                                                                                              19000 ||
                                                                                                            (_0x4d81a5 ===
                                                                                                              49 &&
                                                                                                              _0x4da5bb >
                                                                                                                50000 &&
                                                                                                              _0x4da5bb <
                                                                                                                51000)
                                                                                                          ) {
                                                                                                            _0x41e63a.reply(
                                                                                                              {
                                                                                                                content:
                                                                                                                  _0x41e63a.author +
                                                                                                                  ', You just reached level 50',
                                                                                                              }
                                                                                                            )
                                                                                                            db.set(
                                                                                                              'LEVEL_' +
                                                                                                                _0x41e63a
                                                                                                                  .author
                                                                                                                  .id,
                                                                                                              50
                                                                                                            )
                                                                                                          } else {
                                                                                                            if (
                                                                                                              _0x4da5bb ===
                                                                                                                19000 ||
                                                                                                              (_0x4d81a5 ===
                                                                                                                50 &&
                                                                                                                _0x4da5bb >
                                                                                                                  51000 &&
                                                                                                                _0x4da5bb <
                                                                                                                  52000)
                                                                                                            ) {
                                                                                                              _0x41e63a.reply(
                                                                                                                {
                                                                                                                  content:
                                                                                                                    _0x41e63a.author +
                                                                                                                    ', You just reached level 51',
                                                                                                                }
                                                                                                              )
                                                                                                              db.set(
                                                                                                                'LEVEL_' +
                                                                                                                  _0x41e63a
                                                                                                                    .author
                                                                                                                    .id,
                                                                                                                51
                                                                                                              )
                                                                                                            } else {
                                                                                                              if (
                                                                                                                _0x4da5bb ===
                                                                                                                  19000 ||
                                                                                                                (_0x4d81a5 ===
                                                                                                                  51 &&
                                                                                                                  _0x4da5bb >
                                                                                                                    52000 &&
                                                                                                                  _0x4da5bb <
                                                                                                                    53000)
                                                                                                              ) {
                                                                                                                _0x41e63a.reply(
                                                                                                                  {
                                                                                                                    content:
                                                                                                                      _0x41e63a.author +
                                                                                                                      ', You just reached level 52',
                                                                                                                  }
                                                                                                                )
                                                                                                                db.set(
                                                                                                                  'LEVEL_' +
                                                                                                                    _0x41e63a
                                                                                                                      .author
                                                                                                                      .id,
                                                                                                                  52
                                                                                                                )
                                                                                                              } else {
                                                                                                                if (
                                                                                                                  _0x4da5bb ===
                                                                                                                    19000 ||
                                                                                                                  (_0x4d81a5 ===
                                                                                                                    52 &&
                                                                                                                    _0x4da5bb >
                                                                                                                      53000 &&
                                                                                                                    _0x4da5bb <
                                                                                                                      54000)
                                                                                                                ) {
                                                                                                                  _0x41e63a.reply(
                                                                                                                    {
                                                                                                                      content:
                                                                                                                        _0x41e63a.author +
                                                                                                                        ', You just reached level 53',
                                                                                                                    }
                                                                                                                  )
                                                                                                                  db.set(
                                                                                                                    'LEVEL_' +
                                                                                                                      _0x41e63a
                                                                                                                        .author
                                                                                                                        .id,
                                                                                                                    53
                                                                                                                  )
                                                                                                                } else {
                                                                                                                  if (
                                                                                                                    _0x4da5bb ===
                                                                                                                      19000 ||
                                                                                                                    (_0x4d81a5 ===
                                                                                                                      53 &&
                                                                                                                      _0x4da5bb >
                                                                                                                        54000 &&
                                                                                                                      _0x4da5bb <
                                                                                                                        55000)
                                                                                                                  ) {
                                                                                                                    _0x41e63a.reply(
                                                                                                                      {
                                                                                                                        content:
                                                                                                                          _0x41e63a.author +
                                                                                                                          ', You just reached level 54',
                                                                                                                      }
                                                                                                                    )
                                                                                                                    db.set(
                                                                                                                      'LEVEL_' +
                                                                                                                        _0x41e63a
                                                                                                                          .author
                                                                                                                          .id,
                                                                                                                      55
                                                                                                                    )
                                                                                                                  } else {
                                                                                                                    if (
                                                                                                                      _0x4da5bb ===
                                                                                                                        19000 ||
                                                                                                                      (_0x4d81a5 ===
                                                                                                                        54 &&
                                                                                                                        _0x4da5bb >
                                                                                                                          55000 &&
                                                                                                                        _0x4da5bb <
                                                                                                                          56000)
                                                                                                                    ) {
                                                                                                                      _0x41e63a.reply(
                                                                                                                        {
                                                                                                                          content:
                                                                                                                            _0x41e63a.author +
                                                                                                                            ', You just reached level 55',
                                                                                                                        }
                                                                                                                      )
                                                                                                                      db.set(
                                                                                                                        'LEVEL_' +
                                                                                                                          _0x41e63a
                                                                                                                            .author
                                                                                                                            .id,
                                                                                                                        56
                                                                                                                      )
                                                                                                                    } else {
                                                                                                                      if (
                                                                                                                        _0x4da5bb ===
                                                                                                                          19000 ||
                                                                                                                        (_0x4d81a5 ===
                                                                                                                          55 &&
                                                                                                                          _0x4da5bb >
                                                                                                                            56000 &&
                                                                                                                          _0x4da5bb <
                                                                                                                            57000)
                                                                                                                      ) {
                                                                                                                        _0x41e63a.reply(
                                                                                                                          {
                                                                                                                            content:
                                                                                                                              _0x41e63a.author +
                                                                                                                              ', You just reached level 56',
                                                                                                                          }
                                                                                                                        )
                                                                                                                        db.set(
                                                                                                                          'LEVEL_' +
                                                                                                                            _0x41e63a
                                                                                                                              .author
                                                                                                                              .id,
                                                                                                                          57
                                                                                                                        )
                                                                                                                      } else {
                                                                                                                        if (
                                                                                                                          _0x4da5bb ===
                                                                                                                            19000 ||
                                                                                                                          (_0x4d81a5 ===
                                                                                                                            56 &&
                                                                                                                            _0x4da5bb >
                                                                                                                              57000 &&
                                                                                                                            _0x4da5bb <
                                                                                                                              58000)
                                                                                                                        ) {
                                                                                                                          _0x41e63a.reply(
                                                                                                                            {
                                                                                                                              content:
                                                                                                                                _0x41e63a.author +
                                                                                                                                ', You just reached level 57',
                                                                                                                            }
                                                                                                                          )
                                                                                                                          db.set(
                                                                                                                            'LEVEL_' +
                                                                                                                              _0x41e63a
                                                                                                                                .author
                                                                                                                                .id,
                                                                                                                            58
                                                                                                                          )
                                                                                                                        } else {
                                                                                                                          if (
                                                                                                                            _0x4da5bb ===
                                                                                                                              19000 ||
                                                                                                                            (_0x4d81a5 ===
                                                                                                                              57 &&
                                                                                                                              _0x4da5bb >
                                                                                                                                58000 &&
                                                                                                                              _0x4da5bb <
                                                                                                                                59000)
                                                                                                                          ) {
                                                                                                                            _0x41e63a.reply(
                                                                                                                              {
                                                                                                                                content:
                                                                                                                                  _0x41e63a.author +
                                                                                                                                  ', You just reached level 58',
                                                                                                                              }
                                                                                                                            )
                                                                                                                            db.set(
                                                                                                                              'LEVEL_' +
                                                                                                                                _0x41e63a
                                                                                                                                  .author
                                                                                                                                  .id,
                                                                                                                              59
                                                                                                                            )
                                                                                                                          } else {
                                                                                                                            if (
                                                                                                                              _0x4da5bb ===
                                                                                                                                19000 ||
                                                                                                                              (_0x4d81a5 ===
                                                                                                                                58 &&
                                                                                                                                _0x4da5bb >
                                                                                                                                  59000 &&
                                                                                                                                _0x4da5bb <
                                                                                                                                  60000)
                                                                                                                            ) {
                                                                                                                              _0x41e63a.reply(
                                                                                                                                {
                                                                                                                                  content:
                                                                                                                                    _0x41e63a.author +
                                                                                                                                    ', You just reached level 59',
                                                                                                                                }
                                                                                                                              )
                                                                                                                              db.set(
                                                                                                                                'LEVEL_' +
                                                                                                                                  _0x41e63a
                                                                                                                                    .author
                                                                                                                                    .id,
                                                                                                                                60
                                                                                                                              )
                                                                                                                            } else {
                                                                                                                              if (
                                                                                                                                _0x4da5bb ===
                                                                                                                                  19000 ||
                                                                                                                                (_0x4d81a5 ===
                                                                                                                                  59 &&
                                                                                                                                  _0x4da5bb >
                                                                                                                                    60000 &&
                                                                                                                                  _0x4da5bb <
                                                                                                                                    61000)
                                                                                                                              ) {
                                                                                                                                _0x41e63a.reply(
                                                                                                                                  {
                                                                                                                                    content:
                                                                                                                                      _0x41e63a.author +
                                                                                                                                      ', You just reached level 60',
                                                                                                                                  }
                                                                                                                                )
                                                                                                                                db.set(
                                                                                                                                  'LEVEL_' +
                                                                                                                                    _0x41e63a
                                                                                                                                      .author
                                                                                                                                      .id,
                                                                                                                                  61
                                                                                                                                )
                                                                                                                              } else {
                                                                                                                                if (
                                                                                                                                  _0x4da5bb ===
                                                                                                                                    19000 ||
                                                                                                                                  (_0x4d81a5 ===
                                                                                                                                    60 &&
                                                                                                                                    _0x4da5bb >
                                                                                                                                      61000 &&
                                                                                                                                    _0x4da5bb <
                                                                                                                                      62000)
                                                                                                                                ) {
                                                                                                                                  _0x41e63a.reply(
                                                                                                                                    {
                                                                                                                                      content:
                                                                                                                                        _0x41e63a.author +
                                                                                                                                        ', You just reached level 61',
                                                                                                                                    }
                                                                                                                                  )
                                                                                                                                  db.set(
                                                                                                                                    'LEVEL_' +
                                                                                                                                      _0x41e63a
                                                                                                                                        .author
                                                                                                                                        .id,
                                                                                                                                    62
                                                                                                                                  )
                                                                                                                                } else {
                                                                                                                                  if (
                                                                                                                                    _0x4da5bb ===
                                                                                                                                      19000 ||
                                                                                                                                    (_0x4d81a5 ===
                                                                                                                                      61 &&
                                                                                                                                      _0x4da5bb >
                                                                                                                                        62000 &&
                                                                                                                                      _0x4da5bb <
                                                                                                                                        63000)
                                                                                                                                  ) {
                                                                                                                                    _0x41e63a.reply(
                                                                                                                                      {
                                                                                                                                        content:
                                                                                                                                          _0x41e63a.author +
                                                                                                                                          ', You just reached level 62',
                                                                                                                                      }
                                                                                                                                    )
                                                                                                                                    db.set(
                                                                                                                                      'LEVEL_' +
                                                                                                                                        _0x41e63a
                                                                                                                                          .author
                                                                                                                                          .id,
                                                                                                                                      63
                                                                                                                                    )
                                                                                                                                  } else {
                                                                                                                                    if (
                                                                                                                                      _0x4da5bb ===
                                                                                                                                        19000 ||
                                                                                                                                      (_0x4d81a5 ===
                                                                                                                                        62 &&
                                                                                                                                        _0x4da5bb >
                                                                                                                                          63000 &&
                                                                                                                                        _0x4da5bb <
                                                                                                                                          64000)
                                                                                                                                    ) {
                                                                                                                                      _0x41e63a.reply(
                                                                                                                                        {
                                                                                                                                          content:
                                                                                                                                            _0x41e63a.author +
                                                                                                                                            ', You just reached level 63',
                                                                                                                                        }
                                                                                                                                      )
                                                                                                                                      db.set(
                                                                                                                                        'LEVEL_' +
                                                                                                                                          _0x41e63a
                                                                                                                                            .author
                                                                                                                                            .id,
                                                                                                                                        64
                                                                                                                                      )
                                                                                                                                    } else {
                                                                                                                                      if (
                                                                                                                                        _0x4da5bb ===
                                                                                                                                          19000 ||
                                                                                                                                        (_0x4d81a5 ===
                                                                                                                                          63 &&
                                                                                                                                          _0x4da5bb >
                                                                                                                                            64000 &&
                                                                                                                                          _0x4da5bb <
                                                                                                                                            65000)
                                                                                                                                      ) {
                                                                                                                                        _0x41e63a.reply(
                                                                                                                                          {
                                                                                                                                            content:
                                                                                                                                              _0x41e63a.author +
                                                                                                                                              ', You just reached level 64',
                                                                                                                                          }
                                                                                                                                        )
                                                                                                                                        db.set(
                                                                                                                                          'LEVEL_' +
                                                                                                                                            _0x41e63a
                                                                                                                                              .author
                                                                                                                                              .id,
                                                                                                                                          65
                                                                                                                                        )
                                                                                                                                      } else {
                                                                                                                                        if (
                                                                                                                                          _0x4da5bb ===
                                                                                                                                            19000 ||
                                                                                                                                          (_0x4d81a5 ===
                                                                                                                                            64 &&
                                                                                                                                            _0x4da5bb >
                                                                                                                                              65000 &&
                                                                                                                                            _0x4da5bb <
                                                                                                                                              66000)
                                                                                                                                        ) {
                                                                                                                                          _0x41e63a.reply(
                                                                                                                                            {
                                                                                                                                              content:
                                                                                                                                                _0x41e63a.author +
                                                                                                                                                ', You just reached level 65',
                                                                                                                                            }
                                                                                                                                          )
                                                                                                                                          db.set(
                                                                                                                                            'LEVEL_' +
                                                                                                                                              _0x41e63a
                                                                                                                                                .author
                                                                                                                                                .id,
                                                                                                                                            66
                                                                                                                                          )
                                                                                                                                        } else {
                                                                                                                                          if (
                                                                                                                                            _0x4da5bb ===
                                                                                                                                              19000 ||
                                                                                                                                            (_0x4d81a5 ===
                                                                                                                                              65 &&
                                                                                                                                              _0x4da5bb >
                                                                                                                                                66000 &&
                                                                                                                                              _0x4da5bb <
                                                                                                                                                67000)
                                                                                                                                          ) {
                                                                                                                                            _0x41e63a.reply(
                                                                                                                                              {
                                                                                                                                                content:
                                                                                                                                                  _0x41e63a.author +
                                                                                                                                                  ', You just reached level 66',
                                                                                                                                              }
                                                                                                                                            )
                                                                                                                                            db.set(
                                                                                                                                              'LEVEL_' +
                                                                                                                                                _0x41e63a
                                                                                                                                                  .author
                                                                                                                                                  .id,
                                                                                                                                              67
                                                                                                                                            )
                                                                                                                                          } else {
                                                                                                                                            if (
                                                                                                                                              _0x4da5bb ===
                                                                                                                                                19000 ||
                                                                                                                                              (_0x4d81a5 ===
                                                                                                                                                66 &&
                                                                                                                                                _0x4da5bb >
                                                                                                                                                  67000 &&
                                                                                                                                                _0x4da5bb <
                                                                                                                                                  68000)
                                                                                                                                            ) {
                                                                                                                                              _0x41e63a.reply(
                                                                                                                                                {
                                                                                                                                                  content:
                                                                                                                                                    _0x41e63a.author +
                                                                                                                                                    ', You just reached level 67',
                                                                                                                                                }
                                                                                                                                              )
                                                                                                                                              db.set(
                                                                                                                                                'LEVEL_' +
                                                                                                                                                  _0x41e63a
                                                                                                                                                    .author
                                                                                                                                                    .id,
                                                                                                                                                68
                                                                                                                                              )
                                                                                                                                            } else {
                                                                                                                                              if (
                                                                                                                                                _0x4da5bb ===
                                                                                                                                                  19000 ||
                                                                                                                                                (_0x4d81a5 ===
                                                                                                                                                  67 &&
                                                                                                                                                  _0x4da5bb >
                                                                                                                                                    68000 &&
                                                                                                                                                  _0x4da5bb <
                                                                                                                                                    69000)
                                                                                                                                              ) {
                                                                                                                                                _0x41e63a.reply(
                                                                                                                                                  {
                                                                                                                                                    content:
                                                                                                                                                      _0x41e63a.author +
                                                                                                                                                      ', You just reached level 68',
                                                                                                                                                  }
                                                                                                                                                )
                                                                                                                                                db.set(
                                                                                                                                                  'LEVEL_' +
                                                                                                                                                    _0x41e63a
                                                                                                                                                      .author
                                                                                                                                                      .id,
                                                                                                                                                  69
                                                                                                                                                )
                                                                                                                                              } else {
                                                                                                                                                if (
                                                                                                                                                  _0x4da5bb ===
                                                                                                                                                    19000 ||
                                                                                                                                                  (_0x4d81a5 ===
                                                                                                                                                    68 &&
                                                                                                                                                    _0x4da5bb >
                                                                                                                                                      69000 &&
                                                                                                                                                    _0x4da5bb <
                                                                                                                                                      70000)
                                                                                                                                                ) {
                                                                                                                                                  _0x41e63a.reply(
                                                                                                                                                    {
                                                                                                                                                      content:
                                                                                                                                                        _0x41e63a.author +
                                                                                                                                                        ', You just reached level 69',
                                                                                                                                                    }
                                                                                                                                                  )
                                                                                                                                                  db.set(
                                                                                                                                                    'LEVEL_' +
                                                                                                                                                      _0x41e63a
                                                                                                                                                        .author
                                                                                                                                                        .id,
                                                                                                                                                    70
                                                                                                                                                  )
                                                                                                                                                } else {
                                                                                                                                                  if (
                                                                                                                                                    _0x4da5bb ===
                                                                                                                                                      19000 ||
                                                                                                                                                    (_0x4d81a5 ===
                                                                                                                                                      69 &&
                                                                                                                                                      _0x4da5bb >
                                                                                                                                                        70000 &&
                                                                                                                                                      _0x4da5bb <
                                                                                                                                                        71000)
                                                                                                                                                  ) {
                                                                                                                                                    _0x41e63a.reply(
                                                                                                                                                      {
                                                                                                                                                        content:
                                                                                                                                                          _0x41e63a.author +
                                                                                                                                                          ', You just reached level 70',
                                                                                                                                                      }
                                                                                                                                                    )
                                                                                                                                                    db.set(
                                                                                                                                                      'LEVEL_' +
                                                                                                                                                        _0x41e63a
                                                                                                                                                          .author
                                                                                                                                                          .id,
                                                                                                                                                      71
                                                                                                                                                    )
                                                                                                                                                  } else {
                                                                                                                                                    if (
                                                                                                                                                      _0x4da5bb ===
                                                                                                                                                        19000 ||
                                                                                                                                                      (_0x4d81a5 ===
                                                                                                                                                        70 &&
                                                                                                                                                        _0x4da5bb >
                                                                                                                                                          71000 &&
                                                                                                                                                        _0x4da5bb <
                                                                                                                                                          72000)
                                                                                                                                                    ) {
                                                                                                                                                      _0x41e63a.reply(
                                                                                                                                                        {
                                                                                                                                                          content:
                                                                                                                                                            _0x41e63a.author +
                                                                                                                                                            ', You just reached level 71',
                                                                                                                                                        }
                                                                                                                                                      )
                                                                                                                                                      db.set(
                                                                                                                                                        'LEVEL_' +
                                                                                                                                                          _0x41e63a
                                                                                                                                                            .author
                                                                                                                                                            .id,
                                                                                                                                                        72
                                                                                                                                                      )
                                                                                                                                                    } else {
                                                                                                                                                      if (
                                                                                                                                                        _0x4da5bb ===
                                                                                                                                                          19000 ||
                                                                                                                                                        (_0x4d81a5 ===
                                                                                                                                                          71 &&
                                                                                                                                                          _0x4da5bb >
                                                                                                                                                            72000 &&
                                                                                                                                                          _0x4da5bb <
                                                                                                                                                            73000)
                                                                                                                                                      ) {
                                                                                                                                                        _0x41e63a.reply(
                                                                                                                                                          {
                                                                                                                                                            content:
                                                                                                                                                              _0x41e63a.author +
                                                                                                                                                              ', You just reached level 72',
                                                                                                                                                          }
                                                                                                                                                        )
                                                                                                                                                        db.set(
                                                                                                                                                          'LEVEL_' +
                                                                                                                                                            _0x41e63a
                                                                                                                                                              .author
                                                                                                                                                              .id,
                                                                                                                                                          73
                                                                                                                                                        )
                                                                                                                                                      } else {
                                                                                                                                                        if (
                                                                                                                                                          _0x4da5bb ===
                                                                                                                                                            19000 ||
                                                                                                                                                          (_0x4d81a5 ===
                                                                                                                                                            72 &&
                                                                                                                                                            _0x4da5bb >
                                                                                                                                                              73000 &&
                                                                                                                                                            _0x4da5bb <
                                                                                                                                                              74000)
                                                                                                                                                        ) {
                                                                                                                                                          _0x41e63a.reply(
                                                                                                                                                            {
                                                                                                                                                              content:
                                                                                                                                                                _0x41e63a.author +
                                                                                                                                                                ', You just reached level 73',
                                                                                                                                                            }
                                                                                                                                                          )
                                                                                                                                                          db.set(
                                                                                                                                                            'LEVEL_' +
                                                                                                                                                              _0x41e63a
                                                                                                                                                                .author
                                                                                                                                                                .id,
                                                                                                                                                            73
                                                                                                                                                          )
                                                                                                                                                        } else {
                                                                                                                                                          if (
                                                                                                                                                            _0x4da5bb ===
                                                                                                                                                              19000 ||
                                                                                                                                                            (_0x4d81a5 ===
                                                                                                                                                              73 &&
                                                                                                                                                              _0x4da5bb >
                                                                                                                                                                74000 &&
                                                                                                                                                              _0x4da5bb <
                                                                                                                                                                75000)
                                                                                                                                                          ) {
                                                                                                                                                            _0x41e63a.reply(
                                                                                                                                                              {
                                                                                                                                                                content:
                                                                                                                                                                  _0x41e63a.author +
                                                                                                                                                                  ', You just reached level 74',
                                                                                                                                                              }
                                                                                                                                                            )
                                                                                                                                                            db.set(
                                                                                                                                                              'LEVEL_' +
                                                                                                                                                                _0x41e63a
                                                                                                                                                                  .author
                                                                                                                                                                  .id,
                                                                                                                                                              74
                                                                                                                                                            )
                                                                                                                                                          } else {
                                                                                                                                                            if (
                                                                                                                                                              _0x4da5bb ===
                                                                                                                                                                19000 ||
                                                                                                                                                              (_0x4d81a5 ===
                                                                                                                                                                74 &&
                                                                                                                                                                _0x4da5bb >
                                                                                                                                                                  75000 &&
                                                                                                                                                                _0x4da5bb <
                                                                                                                                                                  76000)
                                                                                                                                                            ) {
                                                                                                                                                              _0x41e63a.reply(
                                                                                                                                                                {
                                                                                                                                                                  content:
                                                                                                                                                                    _0x41e63a.author +
                                                                                                                                                                    ', You just reached level 75',
                                                                                                                                                                }
                                                                                                                                                              )
                                                                                                                                                              db.set(
                                                                                                                                                                'LEVEL_' +
                                                                                                                                                                  _0x41e63a
                                                                                                                                                                    .author
                                                                                                                                                                    .id,
                                                                                                                                                                75
                                                                                                                                                              )
                                                                                                                                                            } else {
                                                                                                                                                              if (
                                                                                                                                                                _0x4da5bb ===
                                                                                                                                                                  19000 ||
                                                                                                                                                                (_0x4d81a5 ===
                                                                                                                                                                  75 &&
                                                                                                                                                                  _0x4da5bb >
                                                                                                                                                                    76000 &&
                                                                                                                                                                  _0x4da5bb <
                                                                                                                                                                    77000)
                                                                                                                                                              ) {
                                                                                                                                                                _0x41e63a.reply(
                                                                                                                                                                  {
                                                                                                                                                                    content:
                                                                                                                                                                      _0x41e63a.author +
                                                                                                                                                                      ', You just reached level 76',
                                                                                                                                                                  }
                                                                                                                                                                )
                                                                                                                                                                db.set(
                                                                                                                                                                  'LEVEL_' +
                                                                                                                                                                    _0x41e63a
                                                                                                                                                                      .author
                                                                                                                                                                      .id,
                                                                                                                                                                  76
                                                                                                                                                                )
                                                                                                                                                              } else {
                                                                                                                                                                if (
                                                                                                                                                                  _0x4da5bb ===
                                                                                                                                                                    19000 ||
                                                                                                                                                                  (_0x4d81a5 ===
                                                                                                                                                                    76 &&
                                                                                                                                                                    _0x4da5bb >
                                                                                                                                                                      77000 &&
                                                                                                                                                                    _0x4da5bb <
                                                                                                                                                                      78000)
                                                                                                                                                                ) {
                                                                                                                                                                  _0x41e63a.reply(
                                                                                                                                                                    {
                                                                                                                                                                      content:
                                                                                                                                                                        _0x41e63a.author +
                                                                                                                                                                        ', You just reached level 77',
                                                                                                                                                                    }
                                                                                                                                                                  )
                                                                                                                                                                  db.set(
                                                                                                                                                                    'LEVEL_' +
                                                                                                                                                                      _0x41e63a
                                                                                                                                                                        .author
                                                                                                                                                                        .id,
                                                                                                                                                                    77
                                                                                                                                                                  )
                                                                                                                                                                } else {
                                                                                                                                                                  if (
                                                                                                                                                                    _0x4da5bb ===
                                                                                                                                                                      19000 ||
                                                                                                                                                                    (_0x4d81a5 ===
                                                                                                                                                                      77 &&
                                                                                                                                                                      _0x4da5bb >
                                                                                                                                                                        78000 &&
                                                                                                                                                                      _0x4da5bb <
                                                                                                                                                                        79000)
                                                                                                                                                                  ) {
                                                                                                                                                                    _0x41e63a.reply(
                                                                                                                                                                      {
                                                                                                                                                                        content:
                                                                                                                                                                          _0x41e63a.author +
                                                                                                                                                                          ', You just reached level 78',
                                                                                                                                                                      }
                                                                                                                                                                    )
                                                                                                                                                                    db.set(
                                                                                                                                                                      'LEVEL_' +
                                                                                                                                                                        _0x41e63a
                                                                                                                                                                          .author
                                                                                                                                                                          .id,
                                                                                                                                                                      78
                                                                                                                                                                    )
                                                                                                                                                                  } else {
                                                                                                                                                                    if (
                                                                                                                                                                      _0x4da5bb ===
                                                                                                                                                                        19000 ||
                                                                                                                                                                      (_0x4d81a5 ===
                                                                                                                                                                        78 &&
                                                                                                                                                                        _0x4da5bb >
                                                                                                                                                                          79000 &&
                                                                                                                                                                        _0x4da5bb <
                                                                                                                                                                          80000)
                                                                                                                                                                    ) {
                                                                                                                                                                      _0x41e63a.reply(
                                                                                                                                                                        {
                                                                                                                                                                          content:
                                                                                                                                                                            _0x41e63a.author +
                                                                                                                                                                            ', You just reached level 79',
                                                                                                                                                                        }
                                                                                                                                                                      )
                                                                                                                                                                      db.set(
                                                                                                                                                                        'LEVEL_' +
                                                                                                                                                                          _0x41e63a
                                                                                                                                                                            .author
                                                                                                                                                                            .id,
                                                                                                                                                                        79
                                                                                                                                                                      )
                                                                                                                                                                    } else {
                                                                                                                                                                      if (
                                                                                                                                                                        _0x4da5bb ===
                                                                                                                                                                          19000 ||
                                                                                                                                                                        (_0x4d81a5 ===
                                                                                                                                                                          79 &&
                                                                                                                                                                          _0x4da5bb >
                                                                                                                                                                            80000 &&
                                                                                                                                                                          _0x4da5bb <
                                                                                                                                                                            81000)
                                                                                                                                                                      ) {
                                                                                                                                                                        _0x41e63a.reply(
                                                                                                                                                                          {
                                                                                                                                                                            content:
                                                                                                                                                                              _0x41e63a.author +
                                                                                                                                                                              ', You just reached level 80',
                                                                                                                                                                          }
                                                                                                                                                                        )
                                                                                                                                                                        db.set(
                                                                                                                                                                          'LEVEL_' +
                                                                                                                                                                            _0x41e63a
                                                                                                                                                                              .author
                                                                                                                                                                              .id,
                                                                                                                                                                          80
                                                                                                                                                                        )
                                                                                                                                                                      } else {
                                                                                                                                                                        if (
                                                                                                                                                                          _0x4da5bb ===
                                                                                                                                                                            19000 ||
                                                                                                                                                                          (_0x4d81a5 ===
                                                                                                                                                                            80 &&
                                                                                                                                                                            _0x4da5bb >
                                                                                                                                                                              81000 &&
                                                                                                                                                                            _0x4da5bb <
                                                                                                                                                                              82000)
                                                                                                                                                                        ) {
                                                                                                                                                                          _0x41e63a.reply(
                                                                                                                                                                            {
                                                                                                                                                                              content:
                                                                                                                                                                                _0x41e63a.author +
                                                                                                                                                                                ', You just reached level 81',
                                                                                                                                                                            }
                                                                                                                                                                          )
                                                                                                                                                                          db.set(
                                                                                                                                                                            'LEVEL_' +
                                                                                                                                                                              _0x41e63a
                                                                                                                                                                                .author
                                                                                                                                                                                .id,
                                                                                                                                                                            81
                                                                                                                                                                          )
                                                                                                                                                                        } else {
                                                                                                                                                                          if (
                                                                                                                                                                            _0x4da5bb ===
                                                                                                                                                                              19000 ||
                                                                                                                                                                            (_0x4d81a5 ===
                                                                                                                                                                              81 &&
                                                                                                                                                                              _0x4da5bb >
                                                                                                                                                                                82000 &&
                                                                                                                                                                              _0x4da5bb <
                                                                                                                                                                                83000)
                                                                                                                                                                          ) {
                                                                                                                                                                            _0x41e63a.reply(
                                                                                                                                                                              {
                                                                                                                                                                                content:
                                                                                                                                                                                  _0x41e63a.author +
                                                                                                                                                                                  ', You just reached level 82',
                                                                                                                                                                              }
                                                                                                                                                                            )
                                                                                                                                                                            db.set(
                                                                                                                                                                              'LEVEL_' +
                                                                                                                                                                                _0x41e63a
                                                                                                                                                                                  .author
                                                                                                                                                                                  .id,
                                                                                                                                                                              82
                                                                                                                                                                            )
                                                                                                                                                                          } else {
                                                                                                                                                                            if (
                                                                                                                                                                              _0x4da5bb ===
                                                                                                                                                                                19000 ||
                                                                                                                                                                              (_0x4d81a5 ===
                                                                                                                                                                                82 &&
                                                                                                                                                                                _0x4da5bb >
                                                                                                                                                                                  83000 &&
                                                                                                                                                                                _0x4da5bb <
                                                                                                                                                                                  84000)
                                                                                                                                                                            ) {
                                                                                                                                                                              _0x41e63a.reply(
                                                                                                                                                                                {
                                                                                                                                                                                  content:
                                                                                                                                                                                    _0x41e63a.author +
                                                                                                                                                                                    ', You just reached level 83',
                                                                                                                                                                                }
                                                                                                                                                                              )
                                                                                                                                                                              db.set(
                                                                                                                                                                                'LEVEL_' +
                                                                                                                                                                                  _0x41e63a
                                                                                                                                                                                    .author
                                                                                                                                                                                    .id,
                                                                                                                                                                                83
                                                                                                                                                                              )
                                                                                                                                                                            } else {
                                                                                                                                                                              if (
                                                                                                                                                                                _0x4da5bb ===
                                                                                                                                                                                  19000 ||
                                                                                                                                                                                (_0x4d81a5 ===
                                                                                                                                                                                  83 &&
                                                                                                                                                                                  _0x4da5bb >
                                                                                                                                                                                    84000 &&
                                                                                                                                                                                  _0x4da5bb <
                                                                                                                                                                                    85000)
                                                                                                                                                                              ) {
                                                                                                                                                                                _0x41e63a.reply(
                                                                                                                                                                                  {
                                                                                                                                                                                    content:
                                                                                                                                                                                      _0x41e63a.author +
                                                                                                                                                                                      ', You just reached level 84',
                                                                                                                                                                                  }
                                                                                                                                                                                )
                                                                                                                                                                                db.set(
                                                                                                                                                                                  'LEVEL_' +
                                                                                                                                                                                    _0x41e63a
                                                                                                                                                                                      .author
                                                                                                                                                                                      .id,
                                                                                                                                                                                  84
                                                                                                                                                                                )
                                                                                                                                                                              } else {
                                                                                                                                                                                if (
                                                                                                                                                                                  _0x4da5bb ===
                                                                                                                                                                                    19000 ||
                                                                                                                                                                                  (_0x4d81a5 ===
                                                                                                                                                                                    84 &&
                                                                                                                                                                                    _0x4da5bb >
                                                                                                                                                                                      85000 &&
                                                                                                                                                                                    _0x4da5bb <
                                                                                                                                                                                      86000)
                                                                                                                                                                                ) {
                                                                                                                                                                                  _0x41e63a.reply(
                                                                                                                                                                                    {
                                                                                                                                                                                      content:
                                                                                                                                                                                        _0x41e63a.author +
                                                                                                                                                                                        ', You just reached level 85',
                                                                                                                                                                                    }
                                                                                                                                                                                  )
                                                                                                                                                                                  db.set(
                                                                                                                                                                                    'LEVEL_' +
                                                                                                                                                                                      _0x41e63a
                                                                                                                                                                                        .author
                                                                                                                                                                                        .id,
                                                                                                                                                                                    85
                                                                                                                                                                                  )
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (
                                                                                                                                                                                    _0x4da5bb ===
                                                                                                                                                                                      19000 ||
                                                                                                                                                                                    (_0x4d81a5 ===
                                                                                                                                                                                      85 &&
                                                                                                                                                                                      _0x4da5bb >
                                                                                                                                                                                        86000 &&
                                                                                                                                                                                      _0x4da5bb <
                                                                                                                                                                                        87000)
                                                                                                                                                                                  ) {
                                                                                                                                                                                    _0x41e63a.reply(
                                                                                                                                                                                      {
                                                                                                                                                                                        content:
                                                                                                                                                                                          _0x41e63a.author +
                                                                                                                                                                                          ', You just reached level 86',
                                                                                                                                                                                      }
                                                                                                                                                                                    )
                                                                                                                                                                                    db.set(
                                                                                                                                                                                      'LEVEL_' +
                                                                                                                                                                                        _0x41e63a
                                                                                                                                                                                          .author
                                                                                                                                                                                          .id,
                                                                                                                                                                                      86
                                                                                                                                                                                    )
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (
                                                                                                                                                                                      _0x4da5bb ===
                                                                                                                                                                                        19000 ||
                                                                                                                                                                                      (_0x4d81a5 ===
                                                                                                                                                                                        86 &&
                                                                                                                                                                                        _0x4da5bb >
                                                                                                                                                                                          87000 &&
                                                                                                                                                                                        _0x4da5bb <
                                                                                                                                                                                          88000)
                                                                                                                                                                                    ) {
                                                                                                                                                                                      _0x41e63a.reply(
                                                                                                                                                                                        {
                                                                                                                                                                                          content:
                                                                                                                                                                                            _0x41e63a.author +
                                                                                                                                                                                            ', You just reached level 88',
                                                                                                                                                                                        }
                                                                                                                                                                                      )
                                                                                                                                                                                      db.set(
                                                                                                                                                                                        'LEVEL_' +
                                                                                                                                                                                          _0x41e63a
                                                                                                                                                                                            .author
                                                                                                                                                                                            .id,
                                                                                                                                                                                        88
                                                                                                                                                                                      )
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (
                                                                                                                                                                                        _0x4da5bb ===
                                                                                                                                                                                          19000 ||
                                                                                                                                                                                        (_0x4d81a5 ===
                                                                                                                                                                                          87 &&
                                                                                                                                                                                          _0x4da5bb >
                                                                                                                                                                                            88000 &&
                                                                                                                                                                                          _0x4da5bb <
                                                                                                                                                                                            89000)
                                                                                                                                                                                      ) {
                                                                                                                                                                                        _0x41e63a.reply(
                                                                                                                                                                                          {
                                                                                                                                                                                            content:
                                                                                                                                                                                              _0x41e63a.author +
                                                                                                                                                                                              ', You just reached level 89',
                                                                                                                                                                                          }
                                                                                                                                                                                        )
                                                                                                                                                                                        db.set(
                                                                                                                                                                                          'LEVEL_' +
                                                                                                                                                                                            _0x41e63a
                                                                                                                                                                                              .author
                                                                                                                                                                                              .id,
                                                                                                                                                                                          89
                                                                                                                                                                                        )
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (
                                                                                                                                                                                          _0x4da5bb ===
                                                                                                                                                                                            19000 ||
                                                                                                                                                                                          (_0x4d81a5 ===
                                                                                                                                                                                            88 &&
                                                                                                                                                                                            _0x4da5bb >
                                                                                                                                                                                              89000 &&
                                                                                                                                                                                            _0x4da5bb <
                                                                                                                                                                                              90000)
                                                                                                                                                                                        ) {
                                                                                                                                                                                          _0x41e63a.reply(
                                                                                                                                                                                            {
                                                                                                                                                                                              content:
                                                                                                                                                                                                _0x41e63a.author +
                                                                                                                                                                                                ', You just reached level 90',
                                                                                                                                                                                            }
                                                                                                                                                                                          )
                                                                                                                                                                                          db.set(
                                                                                                                                                                                            'LEVEL_' +
                                                                                                                                                                                              _0x41e63a
                                                                                                                                                                                                .author
                                                                                                                                                                                                .id,
                                                                                                                                                                                            90
                                                                                                                                                                                          )
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (
                                                                                                                                                                                            _0x4da5bb ===
                                                                                                                                                                                              19000 ||
                                                                                                                                                                                            (_0x4d81a5 ===
                                                                                                                                                                                              89 &&
                                                                                                                                                                                              _0x4da5bb >
                                                                                                                                                                                                90000 &&
                                                                                                                                                                                              _0x4da5bb <
                                                                                                                                                                                                91000)
                                                                                                                                                                                          ) {
                                                                                                                                                                                            _0x41e63a.reply(
                                                                                                                                                                                              {
                                                                                                                                                                                                content:
                                                                                                                                                                                                  _0x41e63a.author +
                                                                                                                                                                                                  ', You just reached level 91',
                                                                                                                                                                                              }
                                                                                                                                                                                            )
                                                                                                                                                                                            db.set(
                                                                                                                                                                                              'LEVEL_' +
                                                                                                                                                                                                _0x41e63a
                                                                                                                                                                                                  .author
                                                                                                                                                                                                  .id,
                                                                                                                                                                                              91
                                                                                                                                                                                            )
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (
                                                                                                                                                                                              _0x4da5bb ===
                                                                                                                                                                                                19000 ||
                                                                                                                                                                                              (_0x4d81a5 ===
                                                                                                                                                                                                90 &&
                                                                                                                                                                                                _0x4da5bb >
                                                                                                                                                                                                  91000 &&
                                                                                                                                                                                                _0x4da5bb <
                                                                                                                                                                                                  92000)
                                                                                                                                                                                            ) {
                                                                                                                                                                                              _0x41e63a.reply(
                                                                                                                                                                                                {
                                                                                                                                                                                                  content:
                                                                                                                                                                                                    _0x41e63a.author +
                                                                                                                                                                                                    ', You just reached level 92',
                                                                                                                                                                                                }
                                                                                                                                                                                              )
                                                                                                                                                                                              db.set(
                                                                                                                                                                                                'LEVEL_' +
                                                                                                                                                                                                  _0x41e63a
                                                                                                                                                                                                    .author
                                                                                                                                                                                                    .id,
                                                                                                                                                                                                92
                                                                                                                                                                                              )
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (
                                                                                                                                                                                                _0x4da5bb ===
                                                                                                                                                                                                  19000 ||
                                                                                                                                                                                                (_0x4d81a5 ===
                                                                                                                                                                                                  91 &&
                                                                                                                                                                                                  _0x4da5bb >
                                                                                                                                                                                                    92000 &&
                                                                                                                                                                                                  _0x4da5bb <
                                                                                                                                                                                                    93000)
                                                                                                                                                                                              ) {
                                                                                                                                                                                                _0x41e63a.reply(
                                                                                                                                                                                                  {
                                                                                                                                                                                                    content:
                                                                                                                                                                                                      _0x41e63a.author +
                                                                                                                                                                                                      ', You just reached level 93',
                                                                                                                                                                                                  }
                                                                                                                                                                                                )
                                                                                                                                                                                                db.set(
                                                                                                                                                                                                  'LEVEL_' +
                                                                                                                                                                                                    _0x41e63a
                                                                                                                                                                                                      .author
                                                                                                                                                                                                      .id,
                                                                                                                                                                                                  93
                                                                                                                                                                                                )
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (
                                                                                                                                                                                                  _0x4da5bb ===
                                                                                                                                                                                                    19000 ||
                                                                                                                                                                                                  (_0x4d81a5 ===
                                                                                                                                                                                                    92 &&
                                                                                                                                                                                                    _0x4da5bb >
                                                                                                                                                                                                      93000 &&
                                                                                                                                                                                                    _0x4da5bb <
                                                                                                                                                                                                      94000)
                                                                                                                                                                                                ) {
                                                                                                                                                                                                  _0x41e63a.reply(
                                                                                                                                                                                                    {
                                                                                                                                                                                                      content:
                                                                                                                                                                                                        _0x41e63a.author +
                                                                                                                                                                                                        ', You just reached level 94',
                                                                                                                                                                                                    }
                                                                                                                                                                                                  )
                                                                                                                                                                                                  db.set(
                                                                                                                                                                                                    'LEVEL_' +
                                                                                                                                                                                                      _0x41e63a
                                                                                                                                                                                                        .author
                                                                                                                                                                                                        .id,
                                                                                                                                                                                                    94
                                                                                                                                                                                                  )
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (
                                                                                                                                                                                                    _0x4da5bb ===
                                                                                                                                                                                                      19000 ||
                                                                                                                                                                                                    (_0x4d81a5 ===
                                                                                                                                                                                                      93 &&
                                                                                                                                                                                                      _0x4da5bb >
                                                                                                                                                                                                        94000 &&
                                                                                                                                                                                                      _0x4da5bb <
                                                                                                                                                                                                        95000)
                                                                                                                                                                                                  ) {
                                                                                                                                                                                                    _0x41e63a.reply(
                                                                                                                                                                                                      {
                                                                                                                                                                                                        content:
                                                                                                                                                                                                          _0x41e63a.author +
                                                                                                                                                                                                          ', You just reached level 95',
                                                                                                                                                                                                      }
                                                                                                                                                                                                    )
                                                                                                                                                                                                    db.set(
                                                                                                                                                                                                      'LEVEL_' +
                                                                                                                                                                                                        _0x41e63a
                                                                                                                                                                                                          .author
                                                                                                                                                                                                          .id,
                                                                                                                                                                                                      95
                                                                                                                                                                                                    )
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (
                                                                                                                                                                                                      _0x4da5bb ===
                                                                                                                                                                                                        19000 ||
                                                                                                                                                                                                      (_0x4d81a5 ===
                                                                                                                                                                                                        94 &&
                                                                                                                                                                                                        _0x4da5bb >
                                                                                                                                                                                                          95000 &&
                                                                                                                                                                                                        _0x4da5bb <
                                                                                                                                                                                                          96000)
                                                                                                                                                                                                    ) {
                                                                                                                                                                                                      _0x41e63a.reply(
                                                                                                                                                                                                        {
                                                                                                                                                                                                          content:
                                                                                                                                                                                                            _0x41e63a.author +
                                                                                                                                                                                                            ', You just reached level 96',
                                                                                                                                                                                                        }
                                                                                                                                                                                                      )
                                                                                                                                                                                                      db.set(
                                                                                                                                                                                                        'LEVEL_' +
                                                                                                                                                                                                          _0x41e63a
                                                                                                                                                                                                            .author
                                                                                                                                                                                                            .id,
                                                                                                                                                                                                        96
                                                                                                                                                                                                      )
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (
                                                                                                                                                                                                        _0x4da5bb ===
                                                                                                                                                                                                          19000 ||
                                                                                                                                                                                                        (_0x4d81a5 ===
                                                                                                                                                                                                          95 &&
                                                                                                                                                                                                          _0x4da5bb >
                                                                                                                                                                                                            96000 &&
                                                                                                                                                                                                          _0x4da5bb <
                                                                                                                                                                                                            97000)
                                                                                                                                                                                                      ) {
                                                                                                                                                                                                        _0x41e63a.reply(
                                                                                                                                                                                                          {
                                                                                                                                                                                                            content:
                                                                                                                                                                                                              _0x41e63a.author +
                                                                                                                                                                                                              ', You just reached level 97',
                                                                                                                                                                                                          }
                                                                                                                                                                                                        )
                                                                                                                                                                                                        db.set(
                                                                                                                                                                                                          'LEVEL_' +
                                                                                                                                                                                                            _0x41e63a
                                                                                                                                                                                                              .author
                                                                                                                                                                                                              .id,
                                                                                                                                                                                                          97
                                                                                                                                                                                                        )
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (
                                                                                                                                                                                                          _0x4da5bb ===
                                                                                                                                                                                                            19000 ||
                                                                                                                                                                                                          (_0x4d81a5 ===
                                                                                                                                                                                                            96 &&
                                                                                                                                                                                                            _0x4da5bb >
                                                                                                                                                                                                              97000 &&
                                                                                                                                                                                                            _0x4da5bb <
                                                                                                                                                                                                              98000)
                                                                                                                                                                                                        ) {
                                                                                                                                                                                                          _0x41e63a.reply(
                                                                                                                                                                                                            {
                                                                                                                                                                                                              content:
                                                                                                                                                                                                                _0x41e63a.author +
                                                                                                                                                                                                                ', You just reached level 98',
                                                                                                                                                                                                            }
                                                                                                                                                                                                          )
                                                                                                                                                                                                          db.set(
                                                                                                                                                                                                            'LEVEL_' +
                                                                                                                                                                                                              _0x41e63a
                                                                                                                                                                                                                .author
                                                                                                                                                                                                                .id,
                                                                                                                                                                                                            98
                                                                                                                                                                                                          )
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (
                                                                                                                                                                                                            _0x4da5bb ===
                                                                                                                                                                                                              19000 ||
                                                                                                                                                                                                            (_0x4d81a5 ===
                                                                                                                                                                                                              97 &&
                                                                                                                                                                                                              _0x4da5bb >
                                                                                                                                                                                                                98000 &&
                                                                                                                                                                                                              _0x4da5bb <
                                                                                                                                                                                                                99000)
                                                                                                                                                                                                          ) {
                                                                                                                                                                                                            _0x41e63a.reply(
                                                                                                                                                                                                              {
                                                                                                                                                                                                                content:
                                                                                                                                                                                                                  _0x41e63a.author +
                                                                                                                                                                                                                  ', You just reached level 99',
                                                                                                                                                                                                              }
                                                                                                                                                                                                            )
                                                                                                                                                                                                            db.set(
                                                                                                                                                                                                              'LEVEL_' +
                                                                                                                                                                                                                _0x41e63a
                                                                                                                                                                                                                  .author
                                                                                                                                                                                                                  .id,
                                                                                                                                                                                                              99
                                                                                                                                                                                                            )
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            ;(_0x4da5bb ===
                                                                                                                                                                                                              19000 ||
                                                                                                                                                                                                              (_0x4d81a5 ===
                                                                                                                                                                                                                98 &&
                                                                                                                                                                                                                _0x4da5bb >
                                                                                                                                                                                                                  99000 &&
                                                                                                                                                                                                                _0x4da5bb <
                                                                                                                                                                                                                  100000)) &&
                                                                                                                                                                                                              (_0x41e63a.reply(
                                                                                                                                                                                                                {
                                                                                                                                                                                                                  content:
                                                                                                                                                                                                                    _0x41e63a.author +
                                                                                                                                                                                                                    ', You just reached level 100',
                                                                                                                                                                                                                }
                                                                                                                                                                                                              ),
                                                                                                                                                                                                              db.set(
                                                                                                                                                                                                                'LEVEL_' +
                                                                                                                                                                                                                  _0x41e63a
                                                                                                                                                                                                                    .author
                                                                                                                                                                                                                    .id,
                                                                                                                                                                                                                100
                                                                                                                                                                                                              ))
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  },
}

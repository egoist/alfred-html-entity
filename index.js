'use strict'
const alfy = require('alfy')
const entities = require('entities')

const input = alfy.input

if (input) {
  const encoded = entities.encodeHTML(input)
  const decoded = entities.decodeHTML(input)

  alfy.output([
    {
      title: encoded,
      subtitle: 'encode result',
      arg: encoded
    },
    {
      title: decoded,
      subtitle: 'decode result',
      arg: decoded
    }
  ])
}
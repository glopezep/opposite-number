const test = require('ava')
const oppositeNumber = require('./')

test('oppositeNumber', t => {
  t.is(typeof oppositeNumber, 'function', 'Should be a function')
  t.is(oppositeNumber(-100), 100)
})
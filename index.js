(function () {
  'use strict'

  const R = require('ramda')

  const fillArray = (fn, n) => {
    let arr = []
    const arrayFill = (fn, n) => {
      if (n === 1) {
        return [fn()]
      }
      return arr.concat([fn()].concat(arrayFill(fn, n - 1)))
    }
    return arrayFill(fn, n)
  }

  const rollDie = max => Math.floor((Math.random() * max) + 1)
  const rollD6 = () => rollDie(6)
  const generateRolls = () => fillArray(rollD6, 4)
  const sortRolls = arr => arr.concat().sort()
  const dropLow = arr =>
    sortRolls(arr).slice(1)
  const sum = arr => arr.reduce((a, b) => a + b, 0)
  const generateStat = R.pipe(generateRolls, sortRolls, dropLow, sum)

  const generateStatMatrix = () => fillArray(generateStat, 6)

  console.log(fillArray(generateStatMatrix, 6))
}())

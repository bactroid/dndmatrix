(function () {
  'use strict'

  const R = require('ramda')

  const rollDie = max => Math.floor((Math.random() * max) + 1)
  const sortRolls = arr => arr.concat().sort()
  const dropLow = arr =>
    sortRolls(arr).slice(1)
  const generateRolls = () =>
    [rollDie(6), rollDie(6), rollDie(6), rollDie(6)]
  const sum = arr => arr.reduce((a, b) => a + b, 0)
  const generateStat = R.pipe(generateRolls, sortRolls, dropLow, sum)

  const fillArray = (fn, n) => {
    let arr = []
    const arrayFill = (fn, n) => {
      if (n === 1) {
        return [fn()]
      }
        // return arr.concat([fn(), arrayFill(fn, n - 1)]);
      return arr.concat([fn()].concat(arrayFill(fn, n - 1)))
    }
    return arrayFill(fn, n)
  }

  const generateStatArray = () => fillArray(generateStat, 6)

  console.log(fillArray(generateStatArray, 6))
}())

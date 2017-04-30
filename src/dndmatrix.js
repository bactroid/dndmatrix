const table = require('markdown-table')

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

const rollDie = (max, randomFn = Math.random) => Math.floor((randomFn() * max) + 1)
const rollD6 = () => rollDie(6)
const generateRolls = (fn = rollD6) => fillArray(fn, 4)
const sortRolls = arr => arr.concat().sort()
const dropLow = arr => sortRolls(arr).slice(1)
const sum = arr => arr.reduce((a, b) => a + b, 0)
const generateStat = () => sum(dropLow(sortRolls(generateRolls())))

const outputTable = matrix => {
  const header = '|     |     |     |     |     |     |\n|-----|-----|-----|-----|-----|-----|\n'
  return header + table(matrix, {rule: false})
}

const generateStatArray = () => fillArray(generateStat, 6)
const generateStatMatrix = () => fillArray(generateStatArray, 6)

module.exports = {
  fillArray,
  rollDie,
  rollD6,
  generateRolls,
  sortRolls,
  dropLow,
  sum,
  generateStat,
  outputTable,
  generateStatMatrix
}

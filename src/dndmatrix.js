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
const generateRolls = (rollFn = rollD6) => fillArray(rollFn, 4)
const sortRolls = arr => arr.concat().sort()
const dropLow = arr => sortRolls(arr).slice(1)
const sum = arr => arr.reduce((a, b) => a + b, 0)
const generateStat = (rollFn = generateRolls) => sum(dropLow(sortRolls(rollFn())))

const outputTable = matrix => {
  const header = '|     |     |     |     |     |     |\n|-----|-----|-----|-----|-----|-----|\n'
  return header + table(matrix, {rule: false})
}

const generateStatArray = (statFn = generateStat) => fillArray(statFn, 6)
const generateStatMatrix = (arrayFn = generateStatArray) => fillArray(arrayFn, 6)

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
  generateStatMatrix,
  generateStatArray
}

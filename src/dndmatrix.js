const table = require('markdown-table')

const fillArray = n => fn => {
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
const generateRolls = (rollFn = rollD6) => fillArray(4)(rollFn)
const sortRolls = arr => arr.concat().sort()
const dropLow = arr => sortRolls(arr).slice(1)
const sum = arr => arr.reduce((a, b) => a + b, 0)
const generateStat = (rollFn = generateRolls) => sum(dropLow(sortRolls(rollFn())))

const outputTable = matrix => {
  const header = '|     |     |     |     |     |     |\n|-----|-----|-----|-----|-----|-----|\n'
  return header + table(matrix, {rule: false})
}

const fillSix = (fn) => fillArray(6)(fn)
const generateStatArray = (statFn = generateStat) => fillSix(statFn)
const generateStatMatrix = (arrayFn = generateStatArray) => fillSix(arrayFn)

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

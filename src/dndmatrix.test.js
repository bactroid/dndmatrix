const {test} = require('tape')
const dndmatrix = require('./dndmatrix')

test('rollDie', assert => {
  const min = 1
  const max = 6
  const minFn = () => 0.00001
  const maxFn = () => 0.99999

  const minActual = dndmatrix.rollDie(min, minFn)
  const maxActual = dndmatrix.rollDie(max, maxFn)
  assert.equal(minActual, min, 'rollDie should be able to roll the minimum result')
  assert.equal(maxActual, max, 'rollDie should be able to roll the maximum result')
  assert.end()
})

test('generateRolls', assert => {
  const rollFn = () => 4
  const expected = [4, 4, 4, 4]
  const actual = dndmatrix.generateRolls(rollFn)
  assert.deepEqual(actual, expected, 'generateRolls should return a four integer array of die rolls')
  assert.end()
})

test('sortRolls', assert => {
  const rolls = [6, 2, 3, 1]
  const expected = [1, 2, 3, 6]
  const actual = dndmatrix.sortRolls(rolls)
  assert.deepEqual(actual, expected, 'sortRolls should sort an array of integers in ascending order.')
  assert.end()
})

test('dropLow', assert => {
  const rolls = [3, 4, 5, 6]
  const expected = [4, 5, 6]
  const actual = dndmatrix.dropLow(rolls)
  assert.deepEqual(actual, expected, 'dropLow should drop the first item in an array')
  assert.end()
})

test('sum', assert => {
  const rolls = [6, 6, 6]
  const expected = 18
  const actual = dndmatrix.sum(rolls)
  assert.equal(actual, expected, 'sum should add together the numbers in an array')
  assert.end()
})

test('generateStat', assert => {
  const rollFn = () => [6, 1, 6, 6]
  const expected = 18
  const actual = dndmatrix.generateStat(rollFn)
  assert.equal(actual, expected, 'generateStat should roll 4d6, drop the lowest roll, and return the sum')
  assert.end()
})

test('fillArray', assert => {
  const fn = () => 18
  const expected = [18, 18, 18, 18, 18, 18]
  const actual = dndmatrix.fillArray(fn, 6)
  assert.deepEqual(actual, expected, 'fillArray should create an array with n elements using the result a function fn')
  assert.end()
})

test('outputTable', assert => {
  const matrix = [
    [8, 10, 10, 14, 14, 16],
    [8, 10, 10, 14, 14, 16],
    [8, 10, 10, 14, 14, 16],
    [8, 10, 10, 14, 14, 16],
    [8, 10, 10, 14, 14, 16],
    [8, 10, 10, 14, 14, 16]
  ]

  const expected = '|     |     |     |     |     |     |\n|-----|-----|-----|-----|-----|-----|\n| 8   | 10  | 10  | 14  | 14  | 16  |\n| 8   | 10  | 10  | 14  | 14  | 16  |\n| 8   | 10  | 10  | 14  | 14  | 16  |\n| 8   | 10  | 10  | 14  | 14  | 16  |\n| 8   | 10  | 10  | 14  | 14  | 16  |\n| 8   | 10  | 10  | 14  | 14  | 16  |'
  const actual = dndmatrix.outputTable(matrix)
  assert.equal(actual, expected, 'outputTable should output a Github-flavored markedown table of the matrix values')
  assert.end()
})

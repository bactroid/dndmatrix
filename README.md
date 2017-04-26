# dndmatrix

My friend and co-worker had a peculiar way of generating stat rolls for D&D. He and his friends always rolled 4d6 (drop lowest) 36 times to construct a 6x6 matrix of rolls. Then they could pick one column or one roll to use as their stats array.

This seemed like a fun challenge to stretch my functional programming skills.

## Usage

This module should be able to be installed via `npm`. If installed globally, you run the command `dndmatrix` to output a D&D stat matrix in a Github Flavored Markdown table.

`dndmatrix` can also be installed directly to a project and used as a module:

```
const dnd = require('dndmatrix')
```

## Running the Test Suite

If you've installed the developer dependencies, you should be able to run `npm test`. Both [standard](https://www.npmjs.com/package/standard) and [tape](https://github.com/substack/tape) are used for the test suite.

## Provided Functions

### `fillArray(fn, n)`

Returns an array with `n` elements that are the results of function `fn`.

### `rollDie(max)`

Returns a random integer between 1 and `max`.

### `rollD6()`

Returns a random integer between 1 and 6 (1d6).

### `generateRolls()`

Returns an array with four random numbers between 1 and 6 (4d6).

### `sortRolls(arr)`

Returns a sorted array based on `arr` in ascending order.

### `dropLow(arr)`

Returns an array based on `arr` without the first element. If sorted in ascending order, this will be the lowest value.

### `sum(arr)`

Returns the sum of all integers in array `arr`.

### `generateStat()`

Returns a randomly generated integer between 3 and 18 using the algorithm 4d6, drop the lowest value, and add the remaining 3 die rolls.

### `outputTable(matrix)`

Given a six-element array of six-element arrays `matrix`, returns a Github Flavored Markdown table that displays all the integers.

### `generateStatArray()`

Returns a six-element array of stat rolls.

### `generateStatMatrix()`

Returns a six-element array of six stat rolls.

#!/usr/bin/env node
const dnd = require('../dist/dndmatrix')

console.log(dnd.outputTable(dnd.fillArray(dnd.generateStatMatrix, 6)))

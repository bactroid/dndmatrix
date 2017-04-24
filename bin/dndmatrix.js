#!/usr/bin/env node
const dnd = require('../dndmatrix')

console.log(dnd.outputTable(dnd.fillArray(dnd.generateStatMatrix, 6)))

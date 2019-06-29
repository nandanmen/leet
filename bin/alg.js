#!/usr/bin/env node

const newAlg = require('./alg-new')
const runAlg = require('./alg-run')

require('yargs')
  .scriptName('alg')
  .usage('$0 <cmd> [args]')
  .command(
    'run <name|number> [input...]',
    'runs the given algorithm',
    yargs =>
      yargs.positional('name', {
        desc: 'name|number of the algorithm you want to run'
      }),
    runAlg
  )
  .command(
    'new <name>',
    'creates new alg folder with given name',
    yargs =>
      yargs
        .positional('name', {
          desc: 'name of the algorithm you want to create'
        })
        .option('number', {
          alias: 'n',
          type: 'number',
          desc: 'leetcode problem number'
        }),
    newAlg
  )
  .help().argv

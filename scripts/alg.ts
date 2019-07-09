import newAlg from './alg-new'
import * as yargs from 'yargs'

type NewOptions = {
  number: yargs.Options
}

type RunOptions = {
  input: yargs.Options
}

const argv = yargs
  .command<NewOptions>('new <name>', 'creates new alg folder with given name', {
    number: {
      describe: 'the problem number',
      demand: false,
      alias: 'n'
    }
  })
  .command<RunOptions>('run <name|number>', 'runs a given algorithm', {
    input: {
      describe: 'input to the algorithm',
      demand: true,
      alias: 'i'
    }
  })
  .help().argv

const commands = {
  new: newAlg
}

const executeCommand = commands[argv._[0]]
if (typeof executeCommand === 'function') {
  executeCommand(argv)
} else {
  console.error('Invalid command. Use --help for usage.')
}

#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */

const program = require('commander')
const formats = require('@rdfjs/formats-common')
const pkgUp = require('pkg-up')
const path = require('path')
const debug = require('debug')

const log = debug('rdfine')
const error = log.extend('error')
error.enabled = true

function assignDefined(target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const val = source[key]
      if (val !== undefined) {
        target[key] = val
      }
    }
  }
  return target
}

program
  .requiredOption('--format <format>', 'Media type of parser to use')
  .option('--namespace <namespace>', 'Namespace URI')
  .option('--prefix <prefix>', 'prefix')
  .option('--outDir <outDir>', 'Output directory', '.')
  .option('--verbose')
  .option('--dev', 'Run from TS sources (only in development)')
  .action(async ({ format, namespace, prefix, outDir, verbose, dev }) => {
    if (dev) {
      require('ts-node').register()
    }

    const { generate } = require('@rdfine/generator')
    const stream = formats.parsers.import(format, process.stdin)
    if (!stream) {
      error(`Failed to parse standard input as ${format}`)
      process.exit(1)
    }

    if (verbose) {
      log.enabled = true
    }

    const defaultOptions = {
      outDir: process.cwd(),
      exclude: [],
    }

    let options = {
      namespace,
      stream,
      outDir,
      prefix,
    }
    const packageJsonPath = await pkgUp()
    if (packageJsonPath) {
      const packageJson = require(packageJsonPath)
      if ('rdfine' in packageJson) {
        options = assignDefined({}, defaultOptions, packageJson.rdfine, options)
      }
    }

    options.outDir = path.resolve(process.cwd(), options.outDir)

    await generate(options, log)
  })

program.parseAsync(process.argv).catch((e) => {
  error(e)
  process.exit(1)
})

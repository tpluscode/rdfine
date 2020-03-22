#!/usr/bin/env node

import program from 'commander'
import formats from '@rdfjs/formats-common'
import pkgUp from 'pkg-up'
import { generate } from '../lib/generator'
import path from 'path'
import debug from 'debug'

const log = debug('rdfine')
const error = log.extend('error')
error.enabled = true

function assignDefined(target: Record<string, any>, ...sources: Record<string, any>[]) {
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
  .requiredOption('--format <format>')
  .option('--namespace <namespace>')
  .option('--prefix <prefix>')
  .option('--outDir <outDir>', '')
  .option('--verbose')
  .action(async ({ format, namespace, prefix, outDir, verbose }) => {
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
    } as any
    const packageJsonPath = await pkgUp()
    if (packageJsonPath) {
      const packageJson = await import(packageJsonPath)
      if ('rdfine' in packageJson) {
        options = assignDefined({}, defaultOptions, packageJson.rdfine, options)
      }
    }

    options.outDir = path.resolve(process.cwd(), options.outDir)

    log('Generating types for vocabulary <%s>', options.namespace)
    const project = await generate(options, log)

    log('Writing source files')
    await project.save()
  })

program.parseAsync(process.argv).catch((e) => {
  error(e)
  process.exit(1)
})

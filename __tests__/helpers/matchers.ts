import { toMatchSnapshot } from 'jest-snapshot'
import DatasetExt from 'rdf-ext/lib/Dataset'
import { SourceFile } from 'ts-morph'
import Parser from '@rdfjs/parser-jsonld'
import toStream from 'string-to-stream'
import $rdf from 'rdf-ext'

const parser = new Parser()

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeValidJsonLd(): R
    }
  }
}

expect.extend({
  async toBeValidJsonLd(received: string | Record<string, any>) {
    const jsonld = typeof received === 'string' ? received : JSON.stringify(received)

    try {
      await $rdf.dataset().import(parser.import(toStream(jsonld)))

      return {
        message: () => 'Object was valid JSON-LD',
        pass: true,
      }
    } catch (e) {
      return {
        message: () => `Failed to parse JSON-LD: ${e.message}`,
        pass: false,
      }
    }
  },
})

expect.addSnapshotSerializer({
  test(val) {
    return typeof val === 'object' && val && 'toCanonical' in val
  },
  serialize(val: DatasetExt) {
    return val.toCanonical()
  },
})

expect.addSnapshotSerializer({
  test(val) {
    return typeof val === 'object' && 'saveSync' in val
  },
  serialize(val: SourceFile) {
    val.saveSync()
    return val.getProject().getFileSystem().readFileSync(val.getFilePath())
  },
})

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

expect.extend({
  toMatchSnapshot(received: DatasetExt | SourceFile) {
    if (typeof received === 'object' && received && 'toCanonical' in received) {
      return toMatchSnapshot.call(
        this as any,
        received.toCanonical(),
        'toMatchSnapshot',
      )
    }

    if (typeof received === 'object' && 'saveSync' in received) {
      received.saveSync()
      const contents = received.getProject().getFileSystem().readFileSync(received.getFilePath())
      return toMatchSnapshot.call(
        this as any,
        contents,
        'toMatchSnapshot',
      )
    }

    return toMatchSnapshot.call(
      this as any,
      received,
      'toMatchSnapshot',
    )
  },
})

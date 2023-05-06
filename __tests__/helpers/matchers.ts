import DatasetExt from 'rdf-ext/lib/Dataset'
import { SourceFile } from 'ts-morph'
import Parser from '@rdfjs/parser-jsonld'
import toStream from 'string-to-stream'
import $rdf from 'rdf-ext'
import {Assertion, expect} from "chai";
import {addSerializer} from "jest-snapshot";

const parser = new Parser()

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Chai {
    interface TypeComparison {
      validJsonLd(): void
    }

    interface Assertion {
      toMatchInlineSnapshot(snapshot: string): void
    }
  }
}
Assertion.addMethod('validJsonLd', async function (this: Chai.AssertionStatic) {
  const received: string | Record<string, any> = this._obj

    const jsonld = typeof received === 'string' ? received : JSON.stringify(received)

    try {
      await $rdf.dataset().import(parser.import(toStream(jsonld)))

      return {
        message: () => 'Object was valid JSON-LD',
        pass: true,
      }
    } catch (e: any) {
      return {
        message: () => `Failed to parse JSON-LD: ${e.message}`,
        pass: false,
      }
    }
})

addSerializer({
  test(val) {
    return typeof val === 'object' && val && 'toCanonical' in val
  },
  serialize(val: DatasetExt) {
    return val.toCanonical()
  },
})

addSerializer({
  test(val) {
    return typeof val === 'object' && 'saveSync' in val
  },
  serialize(val: SourceFile) {
    val.saveSync()
    return val.getProject().getFileSystem().readFileSync(val.getFilePath())
  },
})


import stringToStream from 'string-to-stream'
import rdf from 'rdf-ext'
import Parser from '@rdfjs/parser-n3'
import { Dataset } from 'rdf-js'
import ns, { NamespaceBuilder } from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'

const parser = new Parser()

export function parse(quads: string): Promise<Dataset> {
  const stream = stringToStream(quads) as any

  return rdf.dataset().import(parser.import(stream) as any)
}

prefixes.ex = 'http://example.com/'

const vocab = Object.entries(prefixes)
  .reduce((map, [key, value]) => {
    return {
      ...map,
      [key]: ns(value),
    }
  }, {}) as {
  [P in keyof typeof prefixes]: NamespaceBuilder;
}
export const vocabs = { ...vocab }

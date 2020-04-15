import stringToStream from 'string-to-stream'
import rdf from 'rdf-ext'
import Parser from '@rdfjs/parser-n3'
import DatasetExt from 'rdf-ext/lib/Dataset'
import ns, { NamespaceBuilder } from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'
import { TurtleTemplateResult } from '@tpluscode/rdf-string'

const parser = new Parser()

export function parse(quads: string | TurtleTemplateResult): Promise<DatasetExt> {
  const stream = stringToStream(quads.toString())

  return rdf.dataset().import(parser.import(stream))
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

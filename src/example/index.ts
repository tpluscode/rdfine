import { factory } from '../'
import program from 'commander'
import fetch from 'node-fetch'
import cf from 'clownface'
import rdf from 'rdf-ext'
import { namedNode } from 'rdf-data-model'
import Parser from '@rdfjs/parser-n3'
import debug from 'debug'
import { Collection, CollectionMixin, HydraResource } from './resources'

const parser = new Parser()
const log = debug('example')

factory.BaseClass = HydraResource
factory.addMixin(CollectionMixin)

program
  .arguments('<uri>')
  .action(async (uri) => {
    const response = await fetch(uri, {
      headers: {
        accept: 'text/turtle',
      },
    })

    const dataset = rdf.dataset()
    await dataset.import(await parser.import(response.body as any))

    const collection = factory.createEntity<Collection>(cf({
      dataset,
      term: namedNode(uri),
    }))

    ;(collection.members || []).forEach(m => {
      log(m.id)
    })
  })

program.parse(process.argv)

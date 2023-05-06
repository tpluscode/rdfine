import program from 'commander'
import cf from 'clownface'
import $rdf from 'rdf-ext'
import fetch from '@rdfjs/fetch'
import formats from '@rdfjs/formats-common'
import { Collection, CollectionMixin, HydraResource } from './resources.js'

HydraResource.factory.addMixin(CollectionMixin)

program
  .arguments('<uri>')
  .action(async (uri) => {
    const response = await fetch(uri, {
      formats,
      factory: $rdf,
    })

    const dataset = await response.dataset()

    const collection = HydraResource.factory.createEntity<Collection>(cf({
      dataset,
      term: $rdf.namedNode(uri),
    }))

    collection.members.forEach(m => {
      console.log(m.id)
    })
  })

program.parse(process.argv)

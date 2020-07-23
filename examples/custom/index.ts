import program from 'commander'
import cf from 'clownface'
import { namedNode } from '@rdfjs/data-model'
import fetch from '@rdfjs/fetch'
import formats from '@rdfjs/formats-common'
import factory from '@rdfjs/dataset'
import { Collection, CollectionMixin, HydraResource } from './resources'

HydraResource.factory.addMixin(CollectionMixin)

program
  .arguments('<uri>')
  .action(async (uri) => {
    const response = await fetch(uri, {
      formats,
      factory,
    })

    const dataset = await response.dataset()

    const collection = HydraResource.factory.createEntity<Collection>(cf({
      dataset,
      term: namedNode(uri),
    }))

    collection.members.forEach(m => {
      console.log(m.id)
    })
  })

program.parse(process.argv)

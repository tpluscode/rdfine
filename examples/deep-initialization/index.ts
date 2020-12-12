import rdf from '@rdfjs/dataset'
import clownface from 'clownface'
import { turtle } from '@tpluscode/rdf-string'
import * as Schema from '@rdfine/schema'
import { fromPointer } from '@rdfine/schema/lib/Person'
import { PersonBundle } from '@rdfine/schema/bundles'
import RdfResource, { fromObject } from '@tpluscode/rdfine/RdfResource'
import { schema } from '@tpluscode/rdf-ns-builders'
import namespace from '@rdfjs/namespace'

// Have rdfine recognize the necessary schema.org terms
RdfResource.factory.addMixin(...PersonBundle)

const bigBangTheory = namespace('http://tbbt.example.com/')

async function main() {
  const dataset = rdf.dataset()
  const graph = clownface({ dataset, term: bigBangTheory.Howard })

  // the person gets initialized with it whole subgraph
  const howard = fromPointer(graph, {
    givenName: 'Howard',
    familyName: 'Wolowitz',
    knows: {
      id: bigBangTheory.Sheldon,
      types: [schema.Person],
      hasOccupation: {
        types: [schema.Occupation],
        name: 'Theoretical physicist',
      },
      name: 'Sheldon Cooper',
    },
    memberOf: {
      types: [schema.Organization],
      name: 'CalTech',
    },
  })

  // existing entities can also be used
  const penny = fromPointer(graph.node(bigBangTheory.Penny), {
    knows: howard,
  })
  penny.name = 'Penny'

  // and individual properties initialized from plain objects
  howard.spouse = fromObject<Schema.Person>({
    id: bigBangTheory.Bernadette,
    types: [schema.Person],
    givenName: 'Bernadette',
    familyName: 'Rostenkowski-Wolowitz',
    alternateName: 'Bernadette Rostenkowski',
  })

  return turtle`${dataset}`.toString()
}

main()
  .then(console.log)
  .catch(console.error)

import rdf from '@rdfjs/dataset'
import clownface from 'clownface'
import { turtle } from '@tpluscode/rdf-string'
import * as Schema from '@rdfine/schema'
import Person from '@rdfine/schema/Person'
import Occupation from '@rdfine/schema/Occupation'
import { Initializer } from '@tpluscode/rdfine/lib/RdfResource'
import { RdfResourceImpl, fromObject } from '@tpluscode/rdfine'
import { schema } from '@tpluscode/rdf-ns-builders'
import namespace from '@rdfjs/namespace'

// Have rdfine recognize the necessayr schema.org terms
RdfResourceImpl.factory.addMixin(Person, Occupation)

const bigBangTheory = namespace('http://tbbt.example.com/')

async function main() {
  const dataset = rdf.dataset()
  const graph = clownface({ dataset, term: bigBangTheory.Howard })

  // the person gets initialized with it whole subgraph
  const howard: Schema.Person = new Person.Class(graph, {
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
  })

  // existing entities can also be used
  const penny = new Person.Class(graph.node(bigBangTheory.Penny), {
    knows: howard as Initializer<Schema.Person>, // otherwise TypeScript goes ballistic
  })
  penny.name = 'Penny'

  // and individual properties initialized from plain objects
  howard.spouse = fromObject({
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

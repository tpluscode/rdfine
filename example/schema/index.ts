/* eslint-disable no-console */
import factory from '@rdfjs/dataset'
import fetch from '@rdfjs/fetch'
import { namedNode } from '@rdfjs/data-model'
import { turtle } from '@tpluscode/rdf-string'
import * as Schema from '@rdfine/schema'
import Person from '@rdfine/schema/Person'
import formats from '@rdfjs/formats-common'
import { RdfResourceImpl } from '@tpluscode/rdfine'

const howard = 'http://zazuko.github.io/tbbt-ld/data/person/howard-wolowitz.ttl'

// Have rdfine recognize schema.org terms
RdfResourceImpl.factory.addMixin(Person)

async function main() {
  // download the triples about Howard
  const response = await fetch(howard, {
    formats,
    factory,
  })
  const dataset = await response.dataset()

  // use factory to create a resource object
  // it will be automatically wrapped as a Schema.Person
  // the <Schema.Person> is just syntactic sugar to make TypeScript happy
  const person = RdfResourceImpl.factory.createEntity<Schema.Person>({
    dataset,
    term: namedNode(howard),
  })

  // access the properties like plain JavaScript
  person.name = `${person.givenName} ${person.familyName}`

  return turtle`${dataset}`.toString()
}

main()
  .then(console.log)
  .catch(console.error)

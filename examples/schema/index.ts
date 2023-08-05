import factory from '@rdfjs/dataset'
import fetch from '@rdfjs/fetch'
import RDF from 'rdf-ext'
import { turtle } from '@tpluscode/rdf-string'
import * as Schema from '@rdfine/schema'
import RdfResource from '@tpluscode/rdfine'
import cf from 'clownface'
import { createEnv } from '@rdfine/env'

const howard = 'http://zazuko.github.io/tbbt-ld/data/person/howard-wolowitz.ttl'
const environment = createEnv()

// Have rdfine recognize required schema.org terms
environment.rdfine().factory.addMixin(Schema.PersonMixin)

async function main() {
  // download the triples about Howard
  const response = await fetch(howard, {
    factory: RDF,
  })
  const dataset = await response.dataset()

  // use factory to create a resource object
  // it will be automatically wrapped as a Schema.Person
  // the <Schema.Person> is just syntactic sugar to make TypeScript happy
  const person = environment.rdfine().createEntity<Schema.Person>(cf({
    dataset,
    term: RDF.namedNode(howard),
  }))

  // access the properties like plain JavaScript
  person.name = `${person.givenName} ${person.familyName}`

  return turtle`${dataset}`.toString()
}

main()
  .then(console.log)
  .catch(console.error)

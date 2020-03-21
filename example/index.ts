/* eslint-disable no-console */
import rdf from '@rdfjs/dataset'
import { namedNode } from '@rdfjs/data-model'
import { turtle } from '@tpluscode/rdf-string'
import * as Schema from '@rdfine/schema'
import Person from '@rdfine/schema/Person'

const dataset = rdf.dataset()

const person: Schema.Person = new Person.Class({ dataset, term: namedNode('http://example.com') })

person.givenName = 'John'
person.familyName = 'Doe'

console.log(turtle`${dataset}`.toString())

## RDFine _/rɪdɪˈfaɪn/_
### **RDF**/JS **i**diomatic, **n**ative, **e**njoyable
### [![NPM version](https://img.shields.io/npm/v/@tpluscode/rdfine.svg?style=flat-square)](https://www.npmjs.com/package/@tpluscode/rdfine) [![Build](https://travis-ci.org/tpluscode/rdfine.svg?branch=master)](https://travis-ci.org/tpluscode/rdfine) [![codecov.io](https://codecov.io/github/tpluscode/rdfine/coverage.svg?branch=master)](https://codecov.io/github/tpluscode/rdfine?branch=master)

## Installation

```shell script
npm i @tplusode/rdfine
```

Also peer `@types` dependencies:

```shell script
npm i --save-dev @types/clownface @types/rdf-ext @types/rdfjs__namespace
```

## Usage
### Define resource interfaces

While it is possible to inherit a base resource class, it's best to create partial mixin classes
which implement part of the RDF model. Mixins are dynamically applied to compose a JavaScript object model
closely matching the actual quad data.

```typescript
// Person.ts
import { Constructor, namespace, property, RdfResource } from '@tplusode/rdfine'
import { Term } from 'rdf-js'
import { namedNode } from 'rdf-data-model'

// TS: define an interface for your object model
export interface Person extends RdfResource {
  name: string
  friends: Person[]
}

export function PersonMixin<Base extends Constructor>(base: Base) {
  @namespace('http://schema.org/')
  class P extends base implements Person {
  
    // Literal property
    // By default use the property's name with the annotated @namespace    
    @property.literal()
    name!: string  // http://schema.org/name

    // Customize the getter to return objects of a certain property
    @property.resource({
      // http://schema.org/knows
      path: 'knows',
      // always return a JS array
      array: true
    })
    friends!: Person[]
    
    // getting raw RDF/JS terms
    // by annotating with plain @property
    @property({ 
      path: 'http://www.w3.org/2000/01/rdf-schema#label'
    })
    label: Term
    
    // use _node property to access raw triples
    // by traversing the graph with https://github.com/rdf-ext/clownface
    get hasOccupation(): boolean {
      return this._node
        .out(namedNode('http://schema.org/hasOccupation'))
        .terms.length > 0
    }
  }
 
  return P
}

// add a function to decide if the underlying resource
// satisfies the Person interface
// for example by checking its RDF types
PersonMixin.shouldApply = (res: RdfResource) => {
  return res.hasType('http://schema.org/Person')
}
```

### Creating resource instances

Instead of directly creating resource types, which would require deciding up-front, which
mixins to add to the constructed class, a factory can be used.

```typescript
import { DatasetCore } from 'rdf-js'
import { namedNode } from 'rdf-data-model'
import { RdfResourceImpl } from '@tpluscode/rdfine'
import { Person, PersonMixin } from './Person'

// register the mixin type with the factory
factory.addMixin(PersonMixin)

// load you RDF triples into a RDF/JS dataset
let dataset: DatasetCore = loadRdfData()

const person = RdfResourceImpl.factory.createEntity<Person>({
  dataset,
  term: namedNode('http://example.com/gh/tpluscode')
})
```

### Use it!

The setters are immediately reflected in the underlying.
Note that any property can also be set with raw RDF term matching the annotated type

```typescript
import { namedNode } from 'rdf-data-model'

person.name = "Tomasz"
person.friends = [
  namedNode('http://example.com/gh/bergos'),
  namedNode('http://example.com/gh/ktk')
] as any as Person[]

console.log(person._node.dataset.toString())
```

The last line above will print triples equivalent to those below

```turtle
@prefix schema: <http://schema.org/> .

<http://example.com/gh/tpluscode> 
    schema:name "Tomasz" ;
    schema:knows <http://example.com/gh/bergos> , <http://example.com/gh/ktk>  .
```

## Using with babel

1. `npm i -D @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties`
1. Configure babel (for example with `.babelrc`)
    ```
    {
      "presets": [
        [
          "@babel/env"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "decoratorsBeforeExport": true
          }
        ],
        [
          "@babel/proposal-class-properties"
        ]
      ]
    }
    ```

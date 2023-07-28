import { Environment } from 'rdf-ext'
import { expect } from 'chai'
import { RdfineFactory } from '../environment.js'

describe('environment', () => {
  it('creates an empty environment', () => {
    // given
    const env = new Environment([
      RdfineFactory,
    ])

    // then
    expect(Object.keys(env.rdfine)).to.eq(['Resource'])
  })
})

import {Environment} from 'rdf-ext';
import {RdfineFactory} from '../environment';
import {expect} from 'chai';

describe('environment', () => {
  it('creates an empty environment', () => {
    // given
    const env = new Environment([
      RdfineFactory
    ])

    // then
    expect(env.rdfine._factory)
  })
})

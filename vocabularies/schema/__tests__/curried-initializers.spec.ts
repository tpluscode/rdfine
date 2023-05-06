import clownface from 'clownface';
import $rdf from 'rdf-ext';
import { fromPointer, PersonMixin } from '../lib/Person';
import { schema } from '@tpluscode/rdf-ns-builders';
import RdfResourceImpl, { ResourceFactory } from '@tpluscode/rdfine';

describe('curried initializers', () => {
  let factory: ResourceFactory

  beforeAll(() => {
    factory = new ResourceFactory(RdfResourceImpl)
    factory.addMixin(PersonMixin)
  })

  it('initializes blank', () => {
    // given
    const id = clownface({ dataset: $rdf.dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer({
        name: 'John',
      }),
    }, { factory })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id.termType).toEqual('BlankNode')
  })

  it('initializes named from string', () => {
    // given
    const id = clownface({ dataset: $rdf.dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer('http://foo.bar/John', {
        name: 'John',
      }),
    }, { factory })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id).toEqual($rdf.namedNode('http://foo.bar/John'))
  })

  it('initializes named from term', () => {
    // given
    const id = clownface({ dataset: $rdf.dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer($rdf.namedNode('http://foo.bar/John'), {
        name: 'John',
      }),
    }, { factory })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id).toEqual($rdf.namedNode('http://foo.bar/John'))
  })

  it('initializes URI property from existing resource', () => {
    // given
    const id = clownface({ dataset: $rdf.dataset() }).namedNode('foo')
    const john = fromPointer(clownface({ dataset: $rdf.dataset() }).namedNode('http://foo.bar/John'))

    // when
    const person = fromPointer(id, {
      [schema.parent.value]: john,
    })

    // then
    expect(person.parent?.id).toEqual($rdf.namedNode('http://foo.bar/John'))
  })

  it('initializes URI property from term', () => {
    // given
    const id = clownface({ dataset: $rdf.dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      [schema.parent.value]: fromPointer($rdf.namedNode('http://foo.bar/John'), {
        name: 'John',
      }),
    }, { factory })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id).toEqual($rdf.namedNode('http://foo.bar/John'))
  })
})

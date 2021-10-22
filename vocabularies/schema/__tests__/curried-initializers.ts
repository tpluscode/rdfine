import clownface from 'clownface';
import { dataset } from '@rdfjs/dataset';
import { namedNode } from '@rdf-esm/data-model';
import { fromPointer } from '../lib/Person';

describe('curried initializers', () => {
  it('initializes blank', () => {
    // given
    const id = clownface({ dataset: dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer({
        name: 'John',
      }),
    })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id.termType).toEqual('BlankNode')
  })

  it('initializes named from string', () => {
    // given
    const id = clownface({ dataset: dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer('http://foo.bar/John', {
        name: 'John',
      }),
    })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id).toEqual(namedNode('http://foo.bar/John'))
  })

  it('initializes named from term', () => {
    // given
    const id = clownface({ dataset: dataset() }).namedNode('foo')

    // when
    const person = fromPointer(id, {
      parent: fromPointer(namedNode('http://foo.bar/John'), {
        name: 'John',
      }),
    })

    // then
    expect(person.parent?.name).toEqual('John')
    expect(person.parent?.id).toEqual(namedNode('http://foo.bar/John'))
  })
})

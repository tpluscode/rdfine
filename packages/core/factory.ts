import * as RDF from '@rdfjs/types'
import { AnyPointer } from 'clownface'
import { Initializer, RdfResourceCore, ResourceNode } from './RdfResource'
import RdfResourceImpl from '.'
import { ResourceFactory, Mixin } from './lib/ResourceFactory'

export interface FactoryOptions {
  factory?: ResourceFactory
  additionalMixins?: Mixin[]
}

interface CurriedBlankFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(initializer?: Initializer<T>, options?: FactoryOptions): (graph: AnyPointer) => T & RdfResourceCore<D>
}

interface CurriedFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(id: string | RDF.NamedNode, initializer?: Initializer<T>, options?: FactoryOptions): (graph: AnyPointer) => T & RdfResourceCore<D>
}

interface FullFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(pointer: ResourceNode<D>, initializer?: Initializer<T>, options?: FactoryOptions): T & RdfResourceCore<D>
}

export type Factory<T extends RdfResourceCore<any>> = FullFactory<T> & CurriedFactory<T> & CurriedBlankFactory<T>

export function createFactory<T extends RdfResourceCore<any>>(mixins: Mixin[], baseInitializer: Initializer<T>): Factory<T> {
  const fullFactory: FullFactory<T> = (pointer, initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return factory.createEntity<T>(pointer, [...mixins, ...additionalMixins], {
      initializer: {
        ...baseInitializer,
        ...(initializer || {}),
      },
    })
  }

  const curriedNamedFactory: CurriedFactory<T> = (id, initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return (graph) => factory.createEntity<T>(graph.namedNode(id), [...mixins, ...additionalMixins], {
      initializer: {
        ...baseInitializer,
        ...(initializer || {}),
      },
    })
  }

  const curriedBlankFactory: CurriedBlankFactory<T> = (initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return (graph) => factory.createEntity<T>(graph.blankNode(), [...mixins, ...additionalMixins], {
      initializer: {
        ...baseInitializer,
        ...(initializer || {}),
      },
    })
  }

  return (first: any, second: any, third?: any): any => {
    if (typeof first === 'object' && 'term' in first) {
      return fullFactory(first, second, third)
    }

    if ((typeof first === 'object' && first.termType === 'NamedNode') || typeof first === 'string') {
      return curriedNamedFactory(first, second, third)
    }

    return curriedBlankFactory(first, second)
  }
}

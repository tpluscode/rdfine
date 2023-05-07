import type * as RDF from '@rdfjs/types'
import { AnyContext, AnyPointer } from 'clownface'
import { Initializer, RdfResourceCore, ResourceIdentifier, ResourceNode } from './RdfResource.js'
import { ResourceFactory, Mixin } from './lib/ResourceFactory.js'
import RdfResourceImpl from './index.js'

export interface FactoryOptions {
  factory?: ResourceFactory
  additionalMixins?: Mixin[]
}

export interface AnyFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(graph: AnyPointer<AnyContext, D>): (T & RdfResourceCore<D>) | ResourceNode<D>
}

export interface CurriedBlankFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(initializer?: Initializer<T>, options?: FactoryOptions): (graph: AnyPointer) => T & RdfResourceCore<D>
}

export interface CurriedFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(id: string | ResourceIdentifier, initializer?: Initializer<T>, options?: FactoryOptions): (graph: AnyPointer) => T & RdfResourceCore<D>
}

export interface FullFactory<T extends RdfResourceCore<any>> {
  <D extends RDF.DatasetCore = RDF.DatasetCore>(pointer: ResourceNode<D>, initializer?: Initializer<T>, options?: FactoryOptions): T & RdfResourceCore<D>
}

export type Factory<T extends RdfResourceCore<any>> = FullFactory<T> & CurriedFactory<T> & CurriedBlankFactory<T>;

export function createFactory<T extends RdfResourceCore<any>>(mixins: Mixin[], baseInitializer: Initializer<T>): FullFactory<T> & CurriedFactory<T> & CurriedBlankFactory<T> {
  const fullFactory: FullFactory<T> = (pointer, initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return factory.createEntity<T>(pointer, [...mixins, ...additionalMixins], {
      initializer: {
        ...baseInitializer,
        ...(initializer || {}),
      },
    })
  }

  const curriedNamedFactory: CurriedFactory<T> = (id, initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return (graph, overrideFactory = factory) => {
      const term = typeof id === 'string' ? graph.namedNode(id) : graph.node(id)
      return overrideFactory.createEntity<T>(term, [...mixins, ...additionalMixins], {
        initializer: {
          ...baseInitializer,
          ...(initializer || {}),
        },
      })
    }
  }

  const curriedBlankFactory: CurriedBlankFactory<T> = (initializer, { factory = RdfResourceImpl.factory, additionalMixins = [] } = {}) => {
    return (graph, overrideFactory = factory) => overrideFactory.createEntity<T>(graph.blankNode(), [...mixins, ...additionalMixins], {
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

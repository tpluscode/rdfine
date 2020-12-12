import * as RDF from 'rdf-js'
import { Initializer, RdfResourceCore, ResourceNode } from './RdfResource'
import RdfResourceImpl from '.'
import { ResourceFactory, Mixin } from './lib/ResourceFactory'

export interface FactoryOptions {
  factory?: ResourceFactory
  additionalMixins?: Mixin[]
}

export function createFactory<T extends RdfResourceCore<any>>(mixins: Mixin[], baseInitializer: Initializer<T>) {
  return <D extends RDF.DatasetCore = RDF.DatasetCore>(pointer: ResourceNode<D>, initializer?: Initializer<T>, { factory = RdfResourceImpl.factory, additionalMixins = [] }: FactoryOptions = {}): T & RdfResourceCore<D> => {
    return factory.createEntity<T>(pointer, [...mixins, ...additionalMixins], {
      initializer: {
        ...baseInitializer,
        ...(initializer || {}),
      },
    })
  }
}

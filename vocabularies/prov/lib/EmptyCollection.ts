import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { CollectionMixin } from './Collection.js';

export interface EmptyCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Collection<D>, rdfine.RdfResource<D> {
}

export function EmptyCollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EmptyCollection & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class EmptyCollectionClass extends CollectionMixin(Resource) {
  }
  return EmptyCollectionClass as any
}

class EmptyCollectionImpl extends EmptyCollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmptyCollection>) {
    super(arg, init)
    this.types.add(prov.EmptyCollection)
  }

  static readonly __mixins: Mixin[] = [EmptyCollectionMixin, CollectionMixin];
}
EmptyCollectionMixin.appliesTo = prov.EmptyCollection
EmptyCollectionMixin.Class = EmptyCollectionImpl

export const fromPointer = createFactory<EmptyCollection>([CollectionMixin, EmptyCollectionMixin], { types: [prov.EmptyCollection] });

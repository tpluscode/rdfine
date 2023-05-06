import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { CollectionMixin } from './Collection.js';

export interface EmptyCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Collection<D>, RdfResource<D> {
}

export function EmptyCollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmptyCollection> & RdfResourceCore> & Base {
  @namespace(prov)
  class EmptyCollectionClass extends CollectionMixin(Resource) implements Partial<EmptyCollection> {
  }
  return EmptyCollectionClass
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

import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { CollectionMixin } from './Collection';

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

import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { EntityMixin } from './Entity.js';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Entity<D>, rdfine.RdfResource<D> {
  hadMember: Prov.Entity<D> | undefined;
}

export function CollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Collection> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class CollectionClass extends EntityMixin(Resource) implements Partial<Collection> {
    @rdfine.property.resource({ implicitTypes: [prov.Entity] })
    hadMember: Prov.Entity | undefined;
  }
  return CollectionClass
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(prov.Collection)
  }

  static readonly __mixins: Mixin[] = [CollectionMixin, EntityMixin];
}
CollectionMixin.appliesTo = prov.Collection
CollectionMixin.Class = CollectionImpl

export const fromPointer = createFactory<Collection>([EntityMixin, CollectionMixin], { types: [prov.Collection] });

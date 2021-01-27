import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { EntityMixin } from './Entity';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Entity<D>, RdfResource<D> {
  hadMember: Prov.Entity<D> | undefined;
}

export function CollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Collection> & RdfResourceCore> & Base {
  @namespace(prov)
  class CollectionClass extends EntityMixin(Resource) implements Partial<Collection> {
    @property.resource({ implicitTypes: [prov.Entity] })
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

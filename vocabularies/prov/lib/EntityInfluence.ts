import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { InfluenceMixin } from './Influence.js';

export interface EntityInfluence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Influence<D>, rdfine.RdfResource<D> {
  entity: Prov.Entity<D> | undefined;
}

export function EntityInfluenceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EntityInfluence> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class EntityInfluenceClass extends InfluenceMixin(Resource) implements Partial<EntityInfluence> {
    @rdfine.property.resource({ implicitTypes: [prov.Entity] })
    entity: Prov.Entity | undefined;
  }
  return EntityInfluenceClass
}

class EntityInfluenceImpl extends EntityInfluenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EntityInfluence>) {
    super(arg, init)
    this.types.add(prov.EntityInfluence)
  }

  static readonly __mixins: Mixin[] = [EntityInfluenceMixin, InfluenceMixin];
}
EntityInfluenceMixin.appliesTo = prov.EntityInfluence
EntityInfluenceMixin.Class = EntityInfluenceImpl

export const fromPointer = createFactory<EntityInfluence>([InfluenceMixin, EntityInfluenceMixin], { types: [prov.EntityInfluence] });

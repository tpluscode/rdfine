import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { InfluenceMixin } from './Influence';

export interface EntityInfluence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Influence<D>, RdfResource<D> {
  entity: Prov.Entity<D> | undefined;
}

export function EntityInfluenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EntityInfluence> & RdfResourceCore> & Base {
  @namespace(prov)
  class EntityInfluenceClass extends InfluenceMixin(Resource) implements Partial<EntityInfluence> {
    @property.resource({ implicitTypes: [prov.Entity] })
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

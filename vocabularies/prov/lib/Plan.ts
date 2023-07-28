import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { EntityMixin } from './Entity.js';

export interface Plan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Entity<D>, rdfine.RdfResource<D> {
}

export function PlanMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Plan & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class PlanClass extends EntityMixin(Resource) {
  }
  return PlanClass as any
}

class PlanImpl extends PlanMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Plan>) {
    super(arg, init)
    this.types.add(prov.Plan)
  }

  static readonly __mixins: Mixin[] = [PlanMixin, EntityMixin];
}
PlanMixin.appliesTo = prov.Plan
PlanMixin.Class = PlanImpl

export const fromPointer = createFactory<Plan>([EntityMixin, PlanMixin], { types: [prov.Plan] });

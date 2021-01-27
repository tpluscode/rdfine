import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { EntityMixin } from './Entity';

export interface Plan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Entity<D>, RdfResource<D> {
}

export function PlanMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Plan> & RdfResourceCore> & Base {
  @namespace(prov)
  class PlanClass extends EntityMixin(Resource) implements Partial<Plan> {
  }
  return PlanClass
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

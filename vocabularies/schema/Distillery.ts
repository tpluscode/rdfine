import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Distillery extends Schema.FoodEstablishment, RdfResource {
}

export default function DistilleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DistilleryClass extends FoodEstablishmentMixin(Resource) implements Distillery {
  }
  return DistilleryClass
}

class DistilleryImpl extends DistilleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Distillery>) {
    super(arg, init)
    this.types.add(schema.Distillery)
  }
}
DistilleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Distillery)
DistilleryMixin.Class = DistilleryImpl

import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Distillery>) {
    super(arg)
    this.types.add(schema.Distillery)
    initializeProperties(this, init)
  }
}
DistilleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Distillery)
DistilleryMixin.Class = DistilleryImpl

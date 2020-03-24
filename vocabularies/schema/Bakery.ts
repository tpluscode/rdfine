import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Bakery extends Schema.FoodEstablishment, RdfResource {
}

export default function BakeryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BakeryClass extends FoodEstablishmentMixin(Resource) implements Bakery {
  }
  return BakeryClass
}

class BakeryImpl extends BakeryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Bakery>) {
    super(arg)
    this.types.add(schema.Bakery)
    initializeProperties(this, init)
  }
}
BakeryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bakery)
BakeryMixin.Class = BakeryImpl

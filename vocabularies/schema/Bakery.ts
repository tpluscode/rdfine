import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Bakery>) {
    super(arg, init)
    this.types.add(schema.Bakery)
  }
}
BakeryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bakery)
BakeryMixin.Class = BakeryImpl

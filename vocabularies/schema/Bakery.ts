import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Bakery)
  }
}
BakeryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Bakery)
BakeryMixin.Class = BakeryImpl

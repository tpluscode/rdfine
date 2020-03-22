import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface BarOrPub extends Schema.FoodEstablishment, RdfResource {
}

export default function BarOrPubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BarOrPubClass extends FoodEstablishmentMixin(Resource) implements BarOrPub {
  }
  return BarOrPubClass
}

class BarOrPubImpl extends BarOrPubMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BarOrPub)
  }
}
BarOrPubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BarOrPub)
BarOrPubMixin.Class = BarOrPubImpl

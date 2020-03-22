import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface BedAndBreakfast extends Schema.LodgingBusiness, RdfResource {
}

export default function BedAndBreakfastMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BedAndBreakfastClass extends LodgingBusinessMixin(Resource) implements BedAndBreakfast {
  }
  return BedAndBreakfastClass
}

class BedAndBreakfastImpl extends BedAndBreakfastMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BedAndBreakfast)
  }
}
BedAndBreakfastMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BedAndBreakfast)
BedAndBreakfastMixin.Class = BedAndBreakfastImpl

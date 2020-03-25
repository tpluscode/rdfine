import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<BedAndBreakfast>) {
    super(arg)
    this.types.add(schema.BedAndBreakfast)
    initializeProperties<BedAndBreakfast>(this, init)
  }
}
BedAndBreakfastMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BedAndBreakfast)
BedAndBreakfastMixin.Class = BedAndBreakfastImpl

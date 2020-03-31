import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BedAndBreakfast>) {
    super(arg, init)
    this.types.add(schema.BedAndBreakfast)
  }
}
BedAndBreakfastMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BedAndBreakfast)
BedAndBreakfastMixin.Class = BedAndBreakfastImpl

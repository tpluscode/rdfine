import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Resort extends Schema.LodgingBusiness, RdfResource {
}

export default function ResortMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResortClass extends LodgingBusinessMixin(Resource) implements Resort {
  }
  return ResortClass
}

class ResortImpl extends ResortMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Resort)
  }
}
ResortMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Resort)
ResortMixin.Class = ResortImpl

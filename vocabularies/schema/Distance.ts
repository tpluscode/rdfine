import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import QuantityMixin from './Quantity';

export interface Distance extends Schema.Quantity, RdfResource {
}

export default function DistanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DistanceClass extends QuantityMixin(Resource) implements Distance {
  }
  return DistanceClass
}

class DistanceImpl extends DistanceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Distance)
  }
}
DistanceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Distance)
DistanceMixin.Class = DistanceImpl

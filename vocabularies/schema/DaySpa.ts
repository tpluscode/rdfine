import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface DaySpa extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function DaySpaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DaySpaClass extends HealthAndBeautyBusinessMixin(Resource) implements DaySpa {
  }
  return DaySpaClass
}

class DaySpaImpl extends DaySpaMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DaySpa)
  }
}
DaySpaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DaySpa)
DaySpaMixin.Class = DaySpaImpl

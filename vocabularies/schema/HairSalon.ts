import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface HairSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function HairSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HairSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements HairSalon {
  }
  return HairSalonClass
}

class HairSalonImpl extends HairSalonMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HairSalon)
  }
}
HairSalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HairSalon)
HairSalonMixin.Class = HairSalonImpl

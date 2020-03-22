import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface HVACBusiness extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function HVACBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HVACBusinessClass extends HomeAndConstructionBusinessMixin(Resource) implements HVACBusiness {
  }
  return HVACBusinessClass
}

class HVACBusinessImpl extends HVACBusinessMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HVACBusiness)
  }
}
HVACBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HVACBusiness)
HVACBusinessMixin.Class = HVACBusinessImpl

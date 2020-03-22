import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface NailSalon extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function NailSalonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NailSalonClass extends HealthAndBeautyBusinessMixin(Resource) implements NailSalon {
  }
  return NailSalonClass
}

class NailSalonImpl extends NailSalonMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.NailSalon)
  }
}
NailSalonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NailSalon)
NailSalonMixin.Class = NailSalonImpl

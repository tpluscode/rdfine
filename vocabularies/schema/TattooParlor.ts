import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface TattooParlor extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function TattooParlorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TattooParlorClass extends HealthAndBeautyBusinessMixin(Resource) implements TattooParlor {
  }
  return TattooParlorClass
}

class TattooParlorImpl extends TattooParlorMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TattooParlor)
  }
}
TattooParlorMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TattooParlor)
TattooParlorMixin.Class = TattooParlorImpl

import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface AmusementPark extends Schema.EntertainmentBusiness, RdfResource {
}

export default function AmusementParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AmusementParkClass extends EntertainmentBusinessMixin(Resource) implements AmusementPark {
  }
  return AmusementParkClass
}

class AmusementParkImpl extends AmusementParkMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AmusementPark)
  }
}
AmusementParkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AmusementPark)
AmusementParkMixin.Class = AmusementParkImpl

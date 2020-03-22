import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Airport extends Schema.CivicStructure, RdfResource {
  iataCode: string;
  icaoCode: string;
}

export default function AirportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AirportClass extends CivicStructureMixin(Resource) implements Airport {
    @property.literal()
    iataCode!: string;
    @property.literal()
    icaoCode!: string;
  }
  return AirportClass
}

class AirportImpl extends AirportMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Airport)
  }
}
AirportMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Airport)
AirportMixin.Class = AirportImpl
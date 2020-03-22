import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface ParkingFacility extends Schema.CivicStructure, RdfResource {
}

export default function ParkingFacilityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParkingFacilityClass extends CivicStructureMixin(Resource) implements ParkingFacility {
  }
  return ParkingFacilityClass
}

class ParkingFacilityImpl extends ParkingFacilityMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ParkingFacility)
  }
}
ParkingFacilityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ParkingFacility)
ParkingFacilityMixin.Class = ParkingFacilityImpl
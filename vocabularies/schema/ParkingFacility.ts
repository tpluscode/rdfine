import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ParkingFacility>) {
    super(arg, init)
    this.types.add(schema.ParkingFacility)
  }
}
ParkingFacilityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ParkingFacility)
ParkingFacilityMixin.Class = ParkingFacilityImpl

import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ParkingFacility>) {
    super(arg)
    this.types.add(schema.ParkingFacility)
    initializeProperties(this, init)
  }
}
ParkingFacilityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ParkingFacility)
ParkingFacilityMixin.Class = ParkingFacilityImpl

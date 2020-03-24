import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import EmergencyServiceMixin from './EmergencyService';

export interface PoliceStation extends Schema.CivicStructure, Schema.EmergencyService, RdfResource {
}

export default function PoliceStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PoliceStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements PoliceStation {
  }
  return PoliceStationClass
}

class PoliceStationImpl extends PoliceStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PoliceStation>) {
    super(arg)
    this.types.add(schema.PoliceStation)
    initializeProperties(this, init)
  }
}
PoliceStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PoliceStation)
PoliceStationMixin.Class = PoliceStationImpl

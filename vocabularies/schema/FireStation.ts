import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import EmergencyServiceMixin from './EmergencyService';

export interface FireStation extends Schema.CivicStructure, Schema.EmergencyService, RdfResource {
}

export default function FireStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FireStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements FireStation {
  }
  return FireStationClass
}

class FireStationImpl extends FireStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FireStation>) {
    super(arg)
    this.types.add(schema.FireStation)
    initializeProperties(this, init)
  }
}
FireStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FireStation)
FireStationMixin.Class = FireStationImpl

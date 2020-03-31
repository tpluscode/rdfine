import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<PoliceStation>) {
    super(arg, init)
    this.types.add(schema.PoliceStation)
  }
}
PoliceStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PoliceStation)
PoliceStationMixin.Class = PoliceStationImpl

import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import EmergencyServiceMixin from './EmergencyService';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Hospital extends Schema.CivicStructure, Schema.EmergencyService, Schema.MedicalOrganization, RdfResource {
}

export default function HospitalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HospitalClass extends MedicalOrganizationMixin(EmergencyServiceMixin(CivicStructureMixin(Resource))) implements Hospital {
  }
  return HospitalClass
}

class HospitalImpl extends HospitalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hospital>) {
    super(arg, init)
    this.types.add(schema.Hospital)
  }
}
HospitalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hospital)
HospitalMixin.Class = HospitalImpl

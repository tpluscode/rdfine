import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Hospital)
  }
}
HospitalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hospital)
HospitalMixin.Class = HospitalImpl

import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Hospital<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, Schema.EmergencyService<ID>, Schema.MedicalOrganization<ID>, RdfResource<ID> {
  availableService: Schema.MedicalProcedure<SiblingNode<ID>> | Schema.MedicalTest<SiblingNode<ID>> | Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  healthcareReportingData: Schema.CDCPMDRecord<SiblingNode<ID>> | Schema.Dataset<SiblingNode<ID>> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function HospitalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HospitalClass extends MedicalOrganizationMixin(EmergencyServiceMixin(CivicStructureMixin(Resource))) implements Hospital {
    @property.resource()
    availableService: Schema.MedicalProcedure | Schema.MedicalTest | Schema.MedicalTherapy | undefined;
    @property.resource()
    healthcareReportingData: Schema.CDCPMDRecord | Schema.Dataset | undefined;
    @property()
    medicalSpecialty: Schema.MedicalSpecialty | undefined;
  }
  return HospitalClass
}

class HospitalImpl extends HospitalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hospital>) {
    super(arg, init)
    this.types.add(schema.Hospital)
  }

  static readonly __mixins: Mixin[] = [HospitalMixin, CivicStructureMixin, EmergencyServiceMixin, MedicalOrganizationMixin];
}
HospitalMixin.appliesTo = schema.Hospital
HospitalMixin.Class = HospitalImpl

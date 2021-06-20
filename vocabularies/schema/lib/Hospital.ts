import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Hospital<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EmergencyService<D>, Schema.MedicalOrganization<D>, RdfResource<D> {
  availableService: Schema.MedicalProcedure<D> | Schema.MedicalTest<D> | Schema.MedicalTherapy<D> | undefined;
  healthcareReportingData: Schema.CDCPMDRecord<D> | Schema.Dataset<D> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function HospitalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Hospital> & RdfResourceCore> & Base {
  @namespace(schema)
  class HospitalClass extends MedicalOrganizationMixin(EmergencyServiceMixin(CivicStructureMixin(Resource))) implements Partial<Hospital> {
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

export const fromPointer = createFactory<Hospital>([MedicalOrganizationMixin, EmergencyServiceMixin, CivicStructureMixin, HospitalMixin], { types: [schema.Hospital] });

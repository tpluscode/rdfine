import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { MedicalOrganizationMixin } from './MedicalOrganization';
import { EmergencyServiceMixin } from './EmergencyService';

export interface Hospital<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.MedicalOrganization<D>, Schema.EmergencyService<D>, RdfResource<D> {
  availableService: Schema.MedicalProcedure<D> | Schema.MedicalTest<D> | Schema.MedicalTherapy<D> | undefined;
  healthcareReportingData: Schema.CDCPMDRecord<D> | Schema.Dataset<D> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function HospitalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Hospital> & RdfResourceCore> & Base {
  @namespace(schema)
  class HospitalClass extends EmergencyServiceMixin(MedicalOrganizationMixin(CivicStructureMixin(Resource))) implements Partial<Hospital> {
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

  static readonly __mixins: Mixin[] = [HospitalMixin, CivicStructureMixin, MedicalOrganizationMixin, EmergencyServiceMixin];
}
HospitalMixin.appliesTo = schema.Hospital
HospitalMixin.Class = HospitalImpl

export const fromPointer = createFactory<Hospital>([EmergencyServiceMixin, MedicalOrganizationMixin, CivicStructureMixin, HospitalMixin], { types: [schema.Hospital] });

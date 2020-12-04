import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface MedicalClinic<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, RdfResource<D> {
  availableService: Schema.MedicalProcedure<D> | Schema.MedicalTest<D> | Schema.MedicalTherapy<D> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function MedicalClinicMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalClinic> & Base {
  @namespace(schema)
  class MedicalClinicClass extends MedicalOrganizationMixin(Resource) implements MedicalClinic {
    @property.resource()
    availableService: Schema.MedicalProcedure | Schema.MedicalTest | Schema.MedicalTherapy | undefined;
    @property()
    medicalSpecialty: Schema.MedicalSpecialty | undefined;
  }
  return MedicalClinicClass
}

class MedicalClinicImpl extends MedicalClinicMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalClinic>) {
    super(arg, init)
    this.types.add(schema.MedicalClinic)
  }

  static readonly __mixins: Mixin[] = [MedicalClinicMixin, MedicalOrganizationMixin];
}
MedicalClinicMixin.appliesTo = schema.MedicalClinic
MedicalClinicMixin.Class = MedicalClinicImpl

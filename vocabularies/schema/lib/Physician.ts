import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface Physician<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, rdfine.RdfResource<D> {
  availableService: Schema.MedicalProcedure<D> | Schema.MedicalTest<D> | Schema.MedicalTherapy<D> | undefined;
  hospitalAffiliation: Schema.Hospital<D> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

declare global {
  interface SchemaVocabulary {
    Physician: Factory<Schema.Physician>;
  }
}

export function PhysicianMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Physician & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PhysicianClass extends MedicalOrganizationMixin(Resource) {
    @rdfine.property.resource()
    availableService: Schema.MedicalProcedure | Schema.MedicalTest | Schema.MedicalTherapy | undefined;
    @rdfine.property.resource()
    hospitalAffiliation: Schema.Hospital | undefined;
    @rdfine.property()
    medicalSpecialty: Schema.MedicalSpecialty | undefined;
  }
  return PhysicianClass as any
}
PhysicianMixin.appliesTo = schema.Physician
PhysicianMixin.createFactory = (env: RdfineEnvironment) => createFactory<Physician>([MedicalOrganizationMixin, PhysicianMixin], { types: [schema.Physician] }, env)

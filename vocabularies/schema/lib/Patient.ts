import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalAudienceMixin } from './MedicalAudience.js';
import { PersonMixin } from './Person.js';

export interface Patient<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalAudience<D>, Schema.Person<D>, rdfine.RdfResource<D> {
  diagnosis: Schema.MedicalCondition<D> | undefined;
  drug: Schema.Drug<D> | undefined;
  healthCondition: Schema.MedicalCondition<D> | undefined;
}

export function PatientMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Patient & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PatientClass extends PersonMixin(MedicalAudienceMixin(Resource)) {
    @rdfine.property.resource()
    diagnosis: Schema.MedicalCondition | undefined;
    @rdfine.property.resource()
    drug: Schema.Drug | undefined;
    @rdfine.property.resource()
    healthCondition: Schema.MedicalCondition | undefined;
  }
  return PatientClass as any
}

class PatientImpl extends PatientMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Patient>) {
    super(arg, init)
    this.types.add(schema.Patient)
  }

  static readonly __mixins: Mixin[] = [PatientMixin, MedicalAudienceMixin, PersonMixin];
}
PatientMixin.appliesTo = schema.Patient
PatientMixin.Class = PatientImpl

export const fromPointer = createFactory<Patient>([PersonMixin, MedicalAudienceMixin, PatientMixin], { types: [schema.Patient] });

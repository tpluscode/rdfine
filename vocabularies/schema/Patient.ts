import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalAudienceMixin } from './MedicalAudience';
import { PersonMixin } from './Person';

export interface Patient<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalAudience<D>, Schema.Person<D>, RdfResource<D> {
  diagnosis: Schema.MedicalCondition<D> | undefined;
  drug: Schema.Drug<D> | undefined;
  healthCondition: Schema.MedicalCondition<D> | undefined;
}

export function PatientMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PatientClass extends PersonMixin(MedicalAudienceMixin(Resource)) implements Patient {
    @property.resource()
    diagnosis: Schema.MedicalCondition | undefined;
    @property.resource()
    drug: Schema.Drug | undefined;
    @property.resource()
    healthCondition: Schema.MedicalCondition | undefined;
  }
  return PatientClass
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

import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface Physician<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, RdfResource<D> {
  availableService: Schema.MedicalProcedure<D> | Schema.MedicalTest<D> | Schema.MedicalTherapy<D> | undefined;
  hospitalAffiliation: Schema.Hospital<D> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function PhysicianMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Physician> & RdfResourceCore> & Base {
  @namespace(schema)
  class PhysicianClass extends MedicalOrganizationMixin(Resource) implements Partial<Physician> {
    @property.resource()
    availableService: Schema.MedicalProcedure | Schema.MedicalTest | Schema.MedicalTherapy | undefined;
    @property.resource()
    hospitalAffiliation: Schema.Hospital | undefined;
    @property()
    medicalSpecialty: Schema.MedicalSpecialty | undefined;
  }
  return PhysicianClass
}

class PhysicianImpl extends PhysicianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Physician>) {
    super(arg, init)
    this.types.add(schema.Physician)
  }

  static readonly __mixins: Mixin[] = [PhysicianMixin, MedicalOrganizationMixin];
}
PhysicianMixin.appliesTo = schema.Physician
PhysicianMixin.Class = PhysicianImpl

export const fromPointer = createFactory<Physician>([MedicalOrganizationMixin, PhysicianMixin], { types: [schema.Physician] });

import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Physician<ID extends ResourceNode = ResourceNode> extends Schema.MedicalOrganization<ID>, RdfResource<ID> {
  availableService: Schema.MedicalProcedure<SiblingNode<ID>> | Schema.MedicalTest<SiblingNode<ID>> | Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  hospitalAffiliation: Schema.Hospital<SiblingNode<ID>> | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function PhysicianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhysicianClass extends MedicalOrganizationMixin(Resource) implements Physician {
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

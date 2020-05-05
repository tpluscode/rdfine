import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface MedicalOrganization extends Schema.Organization, RdfResource {
}

export function MedicalOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalOrganizationClass extends OrganizationMixin(Resource) implements MedicalOrganization {
  }
  return MedicalOrganizationClass
}

class MedicalOrganizationImpl extends MedicalOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalOrganization>) {
    super(arg, init)
    this.types.add(schema.MedicalOrganization)
  }

  static readonly __mixins: Mixin[] = [MedicalOrganizationMixin, OrganizationMixin];
}
MedicalOrganizationMixin.appliesTo = schema.MedicalOrganization
MedicalOrganizationMixin.Class = MedicalOrganizationImpl

import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface MedicalOrganization extends Schema.Organization, RdfResource {
}

export default function MedicalOrganizationMixin<Base extends Constructor>(Resource: Base) {
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
}
MedicalOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MedicalOrganization)
MedicalOrganizationMixin.Class = MedicalOrganizationImpl

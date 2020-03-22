import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MedicalOrganization)
  }
}
MedicalOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MedicalOrganization)
MedicalOrganizationMixin.Class = MedicalOrganizationImpl

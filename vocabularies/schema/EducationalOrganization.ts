import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface EducationalOrganization extends Schema.Organization, RdfResource {
  alumni: Schema.Person;
}

export default function EducationalOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationalOrganizationClass extends OrganizationMixin(Resource) implements EducationalOrganization {
    @property.resource()
    alumni!: Schema.Person;
  }
  return EducationalOrganizationClass
}

class EducationalOrganizationImpl extends EducationalOrganizationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EducationalOrganization)
  }
}
EducationalOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationalOrganization)
EducationalOrganizationMixin.Class = EducationalOrganizationImpl
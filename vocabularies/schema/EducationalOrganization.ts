import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<EducationalOrganization>) {
    super(arg, init)
    this.types.add(schema.EducationalOrganization)
  }
}
EducationalOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationalOrganization)
EducationalOrganizationMixin.Class = EducationalOrganizationImpl

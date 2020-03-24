import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<EducationalOrganization>) {
    super(arg)
    this.types.add(schema.EducationalOrganization)
    initializeProperties(this, init)
  }
}
EducationalOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationalOrganization)
EducationalOrganizationMixin.Class = EducationalOrganizationImpl

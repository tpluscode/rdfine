import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface GovernmentOrganization extends Schema.Organization, RdfResource {
}

export default function GovernmentOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentOrganizationClass extends OrganizationMixin(Resource) implements GovernmentOrganization {
  }
  return GovernmentOrganizationClass
}

class GovernmentOrganizationImpl extends GovernmentOrganizationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GovernmentOrganization)
  }
}
GovernmentOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentOrganization)
GovernmentOrganizationMixin.Class = GovernmentOrganizationImpl

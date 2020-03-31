import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<GovernmentOrganization>) {
    super(arg, init)
    this.types.add(schema.GovernmentOrganization)
  }
}
GovernmentOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentOrganization)
GovernmentOrganizationMixin.Class = GovernmentOrganizationImpl

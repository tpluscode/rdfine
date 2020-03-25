import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface SportsOrganization extends Schema.Organization, RdfResource {
}

export default function SportsOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsOrganizationClass extends OrganizationMixin(Resource) implements SportsOrganization {
  }
  return SportsOrganizationClass
}

class SportsOrganizationImpl extends SportsOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SportsOrganization>) {
    super(arg)
    this.types.add(schema.SportsOrganization)
    initializeProperties<SportsOrganization>(this, init)
  }
}
SportsOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsOrganization)
SportsOrganizationMixin.Class = SportsOrganizationImpl

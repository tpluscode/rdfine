import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SportsOrganization>) {
    super(arg, init)
    this.types.add(schema.SportsOrganization)
  }
}
SportsOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsOrganization)
SportsOrganizationMixin.Class = SportsOrganizationImpl

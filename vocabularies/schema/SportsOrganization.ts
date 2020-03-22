import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SportsOrganization)
  }
}
SportsOrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsOrganization)
SportsOrganizationMixin.Class = SportsOrganizationImpl

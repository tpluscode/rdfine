import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import RoleMixin from './Role';

export interface OrganizationRole extends Schema.Role, RdfResource {
  numberedPosition: number;
}

export default function OrganizationRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationRoleClass extends RoleMixin(Resource) implements OrganizationRole {
    @property.literal({ type: Number })
    numberedPosition!: number;
  }
  return OrganizationRoleClass
}

class OrganizationRoleImpl extends OrganizationRoleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OrganizationRole)
  }
}
OrganizationRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrganizationRole)
OrganizationRoleMixin.Class = OrganizationRoleImpl

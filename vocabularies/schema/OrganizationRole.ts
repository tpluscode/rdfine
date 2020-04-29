import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { RoleMixin } from './Role';

export interface OrganizationRole extends Schema.Role, RdfResource {
  numberedPosition: number;
}

export function OrganizationRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationRoleClass extends RoleMixin(Resource) implements OrganizationRole {
    @property.literal({ type: Number })
    numberedPosition!: number;
  }
  return OrganizationRoleClass
}

class OrganizationRoleImpl extends OrganizationRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizationRole>) {
    super(arg, init)
    this.types.add(schema.OrganizationRole)
  }
}
OrganizationRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrganizationRole)
OrganizationRoleMixin.Class = OrganizationRoleImpl

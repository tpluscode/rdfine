import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<OrganizationRole>) {
    super(arg)
    this.types.add(schema.OrganizationRole)
    initializeProperties<OrganizationRole>(this, init)
  }
}
OrganizationRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrganizationRole)
OrganizationRoleMixin.Class = OrganizationRoleImpl

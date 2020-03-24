import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Role extends Schema.Intangible, RdfResource {
  endDate: Date | Date;
  namedPosition: rdf.Term;
  namedPositionLiteral: string;
  roleName: rdf.Term;
  roleNameLiteral: string;
  startDate: Date | Date;
}

export default function RoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoleClass extends IntangibleMixin(Resource) implements Role {
    @property.literal()
    endDate!: Date | Date;
    @property()
    namedPosition!: rdf.Term;
    @property.literal({ path: schema.namedPosition })
    namedPositionLiteral!: string;
    @property()
    roleName!: rdf.Term;
    @property.literal({ path: schema.roleName })
    roleNameLiteral!: string;
    @property.literal()
    startDate!: Date | Date;
  }
  return RoleClass
}

class RoleImpl extends RoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Role>) {
    super(arg)
    this.types.add(schema.Role)
    initializeProperties(this, init)
  }
}
RoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Role)
RoleMixin.Class = RoleImpl

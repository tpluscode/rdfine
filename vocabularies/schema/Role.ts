import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Role extends Schema.Intangible, RdfResource {
  endDate: Date;
  namedPosition: string;
  namedPositionTerm: rdf.NamedNode;
  roleName: string;
  roleNameTerm: rdf.NamedNode;
  startDate: Date;
}

export default function RoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoleClass extends IntangibleMixin(Resource) implements Role {
    @property.literal()
    endDate!: Date;
    @property.literal()
    namedPosition!: string;
    @property({ path: schema.namedPosition })
    namedPositionTerm!: rdf.NamedNode;
    @property.literal()
    roleName!: string;
    @property({ path: schema.roleName })
    roleNameTerm!: rdf.NamedNode;
    @property.literal()
    startDate!: Date;
  }
  return RoleClass
}

class RoleImpl extends RoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Role>) {
    super(arg, init)
    this.types.add(schema.Role)
  }
}
RoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Role)
RoleMixin.Class = RoleImpl

import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Role extends Schema.Intangible, RdfResource {
  endDate: Date;
  namedPosition: string;
  namedPositionTerm: RDF.NamedNode;
  roleName: string;
  roleNameTerm: RDF.NamedNode;
  startDate: Date;
}

export function RoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoleClass extends IntangibleMixin(Resource) implements Role {
    @property.literal()
    endDate!: Date;
    @property.literal()
    namedPosition!: string;
    @property({ path: schema.namedPosition })
    namedPositionTerm!: RDF.NamedNode;
    @property.literal()
    roleName!: string;
    @property({ path: schema.roleName })
    roleNameTerm!: RDF.NamedNode;
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

  static readonly __mixins: Mixin[] = [RoleMixin, IntangibleMixin];
}
RoleMixin.appliesTo = schema.Role
RoleMixin.Class = RoleImpl

import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Role<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  endDate: Date | undefined;
  namedPosition: string | undefined;
  namedPositionTerm: RDF.NamedNode | undefined;
  roleName: string | undefined;
  roleNameTerm: RDF.NamedNode | undefined;
  startDate: Date | undefined;
}

export function RoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoleClass extends IntangibleMixin(Resource) implements Role {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal()
    namedPosition: string | undefined;
    @property({ path: schema.namedPosition })
    namedPositionTerm: RDF.NamedNode | undefined;
    @property.literal()
    roleName: string | undefined;
    @property({ path: schema.roleName })
    roleNameTerm: RDF.NamedNode | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
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

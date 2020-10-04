import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { RoleMixin } from './Role';

export interface OrganizationRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Role<D>, RdfResource<D> {
  numberedPosition: number | undefined;
}

export function OrganizationRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationRoleClass extends RoleMixin(Resource) implements OrganizationRole {
    @property.literal({ type: Number })
    numberedPosition: number | undefined;
  }
  return OrganizationRoleClass
}

class OrganizationRoleImpl extends OrganizationRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizationRole>) {
    super(arg, init)
    this.types.add(schema.OrganizationRole)
  }

  static readonly __mixins: Mixin[] = [OrganizationRoleMixin, RoleMixin];
}
OrganizationRoleMixin.appliesTo = schema.OrganizationRole
OrganizationRoleMixin.Class = OrganizationRoleImpl

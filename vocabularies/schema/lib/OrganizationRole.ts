import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RoleMixin } from './Role.js';

export interface OrganizationRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Role<D>, RdfResource<D> {
  numberedPosition: number | undefined;
}

export function OrganizationRoleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OrganizationRole> & RdfResourceCore> & Base {
  @namespace(schema)
  class OrganizationRoleClass extends RoleMixin(Resource) implements Partial<OrganizationRole> {
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

export const fromPointer = createFactory<OrganizationRole>([RoleMixin, OrganizationRoleMixin], { types: [schema.OrganizationRole] });

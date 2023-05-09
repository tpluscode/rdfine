import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Role<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function RoleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Role> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class RoleClass extends Resource implements Partial<Role> {
  }
  return RoleClass
}

class RoleImpl extends RoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Role>) {
    super(arg, init)
    this.types.add(prov.Role)
  }

  static readonly __mixins: Mixin[] = [RoleMixin];
}
RoleMixin.appliesTo = prov.Role
RoleMixin.Class = RoleImpl

export const fromPointer = createFactory<Role>([RoleMixin], { types: [prov.Role] });

import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Role<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  'function_of': RDF.Term | undefined;
  'has_scope': RDF.Term | undefined;
}

export function RoleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Role & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class RoleClass extends Resource {
    @rdfine.property()
    'function_of': RDF.Term | undefined;
    @rdfine.property()
    'has_scope': RDF.Term | undefined;
  }
  return RoleClass as any
}

class RoleImpl extends RoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Role>) {
    super(arg, init)
    this.types.add(sioc.Role)
  }

  static readonly __mixins: Mixin[] = [RoleMixin];
}
RoleMixin.appliesTo = sioc.Role
RoleMixin.Class = RoleImpl

export const fromPointer = createFactory<Role>([RoleMixin], { types: [sioc.Role] });

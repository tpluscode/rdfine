import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Role<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'function_of': RDF.Term | undefined;
  'has_scope': RDF.Term | undefined;
}

export function RoleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Role> & RdfResourceCore> & Base {
  @namespace(sioc)
  class RoleClass extends Resource implements Partial<Role> {
    @property()
    'function_of': RDF.Term | undefined;
    @property()
    'has_scope': RDF.Term | undefined;
  }
  return RoleClass
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

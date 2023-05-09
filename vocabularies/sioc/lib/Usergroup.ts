import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Usergroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  'has_member': Sioc.UserAccount<D> | undefined;
  'usergroup_of': Sioc.Space<D> | undefined;
}

export function UsergroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Usergroup> & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class UsergroupClass extends Resource implements Partial<Usergroup> {
    @rdfine.property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_member': Sioc.UserAccount | undefined;
    @rdfine.property.resource({ implicitTypes: [sioc.Space] })
    'usergroup_of': Sioc.Space | undefined;
  }
  return UsergroupClass
}

class UsergroupImpl extends UsergroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Usergroup>) {
    super(arg, init)
    this.types.add(sioc.Usergroup)
  }

  static readonly __mixins: Mixin[] = [UsergroupMixin];
}
UsergroupMixin.appliesTo = sioc.Usergroup
UsergroupMixin.Class = UsergroupImpl

export const fromPointer = createFactory<Usergroup>([UsergroupMixin], { types: [sioc.Usergroup] });

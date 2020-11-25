import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Usergroup<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  'has_member': Sioc.UserAccount<SiblingNode<ID>> | undefined;
  'usergroup_of': Sioc.Space<SiblingNode<ID>> | undefined;
}

export function UsergroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class UsergroupClass extends Resource implements Usergroup {
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_member': Sioc.UserAccount | undefined;
    @property.resource({ implicitTypes: [sioc.Space] })
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

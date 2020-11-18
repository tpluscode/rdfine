import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';
import { ContainerMixin } from './Container';

export interface Forum<ID extends ResourceNode = ResourceNode> extends Sioc.Container<ID>, RdfResource<ID> {
  'has_moderator': Sioc.UserAccount<SiblingNode<ID>> | undefined;
  'num_threads': number | undefined;
}

export function ForumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class ForumClass extends ContainerMixin(Resource) implements Forum {
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_moderator': Sioc.UserAccount | undefined;
    @property.literal({ type: Number })
    'num_threads': number | undefined;
  }
  return ForumClass
}

class ForumImpl extends ForumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Forum>) {
    super(arg, init)
    this.types.add(sioc.Forum)
  }

  static readonly __mixins: Mixin[] = [ForumMixin, ContainerMixin];
}
ForumMixin.appliesTo = sioc.Forum
ForumMixin.Class = ForumImpl

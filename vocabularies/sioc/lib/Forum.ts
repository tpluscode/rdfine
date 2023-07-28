import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';
import { ContainerMixin } from './Container.js';

export interface Forum<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sioc.Container<D>, rdfine.RdfResource<D> {
  'has_moderator': Sioc.UserAccount<D> | undefined;
  'num_threads': number | undefined;
}

export function ForumMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Forum & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class ForumClass extends ContainerMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_moderator': Sioc.UserAccount | undefined;
    @rdfine.property.literal({ type: Number })
    'num_threads': number | undefined;
  }
  return ForumClass as any
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

export const fromPointer = createFactory<Forum>([ContainerMixin, ForumMixin], { types: [sioc.Forum] });
